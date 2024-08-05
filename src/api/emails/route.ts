import { Resend } from 'resend';
import Email from '../../Components/emails/sample-email';

const resend = new Resend('process.env.RESEND_API_KEY');

export async function post(req, res) {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'nigelengel88@gmail.com',
      subject: 'Testing Email',
      react: Email(),
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}