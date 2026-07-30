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

  if (!name) {
    return redirect('/contact?error=name', 303);
  }
  if (!message) {
    return redirect('/contact?error=message', 303);
  }

  const data = {
    name,
    business_and_trade: str(formData, 'business_and_trade'),
    reach_method: str(formData, 'reach_method'),
    contact_identifier: str(formData, 'contact_identifier'),
    message,
  };

  await Promise.all([
    notifyOffice(
      'Contact form — theplainoffice.com',
      `Name: ${data.name}\nBusiness/trade: ${data.business_and_trade}\nPreferred reach method: ${data.reach_method}\nContact identifier: ${data.contact_identifier}\n\nMessage:\n${data.message}`
    ),
    logSubmission('contact', data),
  ]);

  return redirect('/contact/thank-you', 303);
};
