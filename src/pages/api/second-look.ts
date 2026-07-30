import type { APIRoute } from 'astro';
import { isHoneypotFilled, str } from '../../lib/validate';
import { isRateLimited, clientIp } from '../../lib/rateLimit';
import { notifyOffice } from '../../lib/email';
import { logSubmission } from '../../lib/supabaseLog';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  if (isHoneypotFilled(formData)) {
    return redirect('/second-look/thank-you', 303);
  }

  if (isRateLimited(clientIp(request))) {
    return redirect('/second-look?error=rate_limited', 303);
  }

  const name = str(formData, 'name');
  const mailingAddress = str(formData, 'mailing_address');

  if (!name) {
    return redirect('/second-look?error=name', 303);
  }
  if (!mailingAddress) {
    return redirect('/second-look?error=mailing_address', 303);
  }

  const data = {
    name,
    business_name: str(formData, 'business_name'),
    mailing_address: mailingAddress,
    telephone: str(formData, 'telephone'),
    best_time_to_call: str(formData, 'best_time'),
    books_kept_now: str(formData, 'books_kept_now'),
  };

  await Promise.all([
    notifyOffice(
      'Second Look request — theplainoffice.com',
      `Name: ${data.name}\nBusiness: ${data.business_name}\nMailing address: ${data.mailing_address}\nTelephone: ${data.telephone}\nBest time to call: ${data.best_time_to_call}\nHow books are kept now: ${data.books_kept_now}`
    ),
    logSubmission('second_look', data),
  ]);

  return redirect('/second-look/thank-you', 303);
};
