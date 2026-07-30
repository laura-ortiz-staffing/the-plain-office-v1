import type { APIRoute } from 'astro';
import { isHoneypotFilled, str } from '../../lib/validate';
import { isRateLimited, clientIp } from '../../lib/rateLimit';
import { notifyOffice } from '../../lib/email';
import { logSubmission } from '../../lib/supabaseLog';

export const prerender = false;

const REQUIRED = ['name', 'trade', 'mailing_address', 'town_state_zip', 'telephone', 'contact_pref'] as const;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  if (isHoneypotFilled(formData)) {
    return redirect('/second-look/thank-you', 303);
  }

  if (isRateLimited(clientIp(request))) {
    return redirect('/second-look?error=rate_limited', 303);
  }

  for (const field of REQUIRED) {
    if (!str(formData, field)) {
      return redirect(`/second-look?error=${field}`, 303);
    }
  }

  const contactPref = str(formData, 'contact_pref');
  const email = str(formData, 'email');
  if (contactPref === 'Email' && !email) {
    return redirect('/second-look?error=email', 303);
  }

  const data = {
    name: str(formData, 'name'),
    business_name: str(formData, 'business_name'),
    trade: str(formData, 'trade'),
    mailing_address: str(formData, 'mailing_address'),
    town_state_zip: str(formData, 'town_state_zip'),
    telephone: str(formData, 'telephone'),
    best_time_to_call: str(formData, 'best_time'),
    books_kept_now: str(formData, 'books_kept_now'),
    contact_pref: contactPref,
    email,
  };

  await Promise.all([
    notifyOffice(
      'Second Look request — theplainoffice.com',
      `Name: ${data.name}\nBusiness: ${data.business_name}\nTrade: ${data.trade}\nMailing address: ${data.mailing_address}, ${data.town_state_zip}\nTelephone: ${data.telephone}\nBest time to call: ${data.best_time_to_call}\nHow books are kept now: ${data.books_kept_now}\nPreferred way to hear from us: ${data.contact_pref}\nEmail: ${data.email}`
    ),
    logSubmission('second_look', data),
  ]);

  return redirect('/second-look/thank-you', 303);
};
