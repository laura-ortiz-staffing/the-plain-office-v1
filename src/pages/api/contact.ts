import type { APIRoute } from 'astro';
import { isHoneypotFilled, str } from '../../lib/validate';
import { isRateLimited, clientIp } from '../../lib/rateLimit';
import { notifyOffice } from '../../lib/email';
import { logSubmission } from '../../lib/supabaseLog';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  if (isHoneypotFilled(formData)) {
    return redirect('/contact/thank-you', 303);
  }

  if (isRateLimited(clientIp(request))) {
    return redirect('/contact?error=rate_limited', 303);
  }

  const name = str(formData, 'name');
  const message = str(formData, 'message');
  const telephone = str(formData, 'telephone');
  const address = str(formData, 'address');
  const email = str(formData, 'email');

  if (!name) {
    return redirect('/contact?error=name', 303);
  }
  if (!message) {
    return redirect('/contact?error=message', 303);
  }
  if (!telephone && !address && !email) {
    return redirect('/contact?error=reach', 303);
  }

  const data = {
    name,
    business_and_trade: str(formData, 'business_and_trade'),
    telephone,
    address,
    email,
    message,
  };

  await Promise.all([
    notifyOffice(
      'Contact form — theplainoffice.com',
      `Name: ${data.name}\nBusiness/trade: ${data.business_and_trade}\nTelephone: ${data.telephone}\nAddress: ${data.address}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    ),
    logSubmission('contact', data),
  ]);

  return redirect('/contact/thank-you', 303);
};
