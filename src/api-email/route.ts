import Email from '../Components/emails/sample-email';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response){
  const { email, userFirstName } = await request.json();

  const {data, error } = await resend.emails.send({

    from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "Thank you",
    react: Email(),
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: "Email send successfully" });
}
  