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
  const streetAddress = str(formData, 'street_address');

  if (!name) {
    return redirect('/booklet?error=name', 303);
  }
  if (delivery !== 'pdf' && !streetAddress) {
    return redirect('/booklet?error=street_address', 303);
  }

  // Email is shown as required in the approved design, but is
  // deliberately NOT enforced here — the Build Brief prohibits
  // requiring email anywhere on the site. See CHANGELOG.md.
  const data = {
    delivery,
    name,
    organization: str(formData, 'organization'),
    email: str(formData, 'email'),
    street_address: streetAddress,
    city: str(formData, 'city'),
    postal_code: str(formData, 'postal_code'),
  };

  await Promise.all([
    notifyOffice(
      'Booklet request — theplainoffice.com',
      `Delivery: ${data.delivery}\nName: ${data.name}\nOrganization: ${data.organization}\nEmail: ${data.email}\nAddress: ${data.street_address}, ${data.city} ${data.postal_code}`
    ),
    logSubmission('booklet', data),
  ]);

  return redirect(`/booklet/thank-you?delivery=${encodeURIComponent(delivery)}`, 303);
};
