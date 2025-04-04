import { Resend } from "resend";
import Email from "@/lib/Email";
import { z } from "zod";

export const dynamic = "force-dynamic";

// Change from force-static to force-dynamic to ensure environment variables are available at runtime
// export const dynamic = "force-dynamic";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  surname: z.string().min(1, { message: "Surname is required" }),
  email: z.string().email({ message: "Email is required" }),
  message: z.string().min(5, { message: "Message is required" }),
});

export async function POST(request: Request) {
  const ResendAPIKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;
  const toEmail = process.env.TO_EMAIL;

  console.log("ResendAPIKey:", ResendAPIKey);
  console.log("fromEmail:", fromEmail);
  console.log("toEmail:", toEmail);

  if (!ResendAPIKey) {
    throw new Error("Missing Resend API Key.");
  }

  if (!fromEmail) {
    throw new Error("Missing From Email.");
  }

  if (!toEmail) {
    throw new Error("Missing To Email.");
  }

  const resend = new Resend(ResendAPIKey);

  try {
    const { name, surname, email, message } = contactFormSchema.parse(
      await request.json()
    );

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: "Form reachout",
      react: Email({ name, surname, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    console.log(data);

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
