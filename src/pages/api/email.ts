import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';

export const POST: APIRoute = async ({ request }) => {
    if (request.headers.get("Content-Type") === "application/json") {
        const body = await request.json();
        const message = body.message;
        await sendEmail(message)
        return new Response(JSON.stringify({
          message: "email sent"
        }), {
          status: 200
        })
      }
      return new Response(null, { status: 400 });
}

async function sendEmail(message: any) {


    try {
      const response = await sgMail.send(message);
      console.log('Email sent', response);
    } catch (Error)  {
      console.error('Error sending email', Error);
    }
  }