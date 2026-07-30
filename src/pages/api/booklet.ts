import type { APIRoute } from 'astro';
import { isHoneypotFilled, str } from '../../lib/validate';
import { isRateLimited, clientIp } from '../../lib/rateLimit';
import { notifyOffice } from '../../lib/email';
import { logSubmission } from '../../lib/supabaseLog';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  // Honeypot: pretend success without doing any work, so a bot never
  // learns its submission was rejected.
  if (isHoneypotFilled(formData)) {
    return redirect('/booklet/thank-you?delivery=mail_and_pdf', 303);
  }

  if (isRateLimited(clientIp(request))) {
    return redirect('/booklet?error=rate_limited', 303);
  }

  const delivery = str(formData, 'delivery') || 'mail_and_pdf';
  const name = str(formData, 'name');
  const mailingAddress = str(formData, 'mailing_address');
  const townStateZip = str(formData, 'town_state_zip');

  if (!name) {
    return redirect('/booklet?error=name', 303);
  }
  if (delivery !== 'pdf' && (!mailingAddress || !townStateZip)) {
    return redirect('/booklet?error=mailing_address', 303);
  }

  const data = {
    delivery,
    name,
    business_name: str(formData, 'business_name'),
    trade: str(formData, 'trade'),
    mailing_address: mailingAddress,
    town_state_zip: townStateZip,
    telephone: str(formData, 'telephone'),
    email: str(formData, 'email'),
  };

  await Promise.all([
    notifyOffice(
      'Booklet request — theplainoffice.com',
      `Delivery: ${data.delivery}\nName: ${data.name}\nBusiness: ${data.business_name}\nTrade: ${data.trade}\nMailing address: ${data.mailing_address}, ${data.town_state_zip}\nTelephone: ${data.telephone}\nEmail: ${data.email}`
    ),
    logSubmission('booklet', data),
  ]);

  return redirect(`/booklet/thank-you?delivery=${encodeURIComponent(delivery)}`, 303);
};
