import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .handler(async ({ data }) => {
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      throw new Error("Invalid form data");
    }
    const { name, email, message } = result.data;
    
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set. Simulating successful email delivery.");
      console.log(`[Email Simulation] To: muthukarthik906@gmail.com | From: ${name} <${email}> | Message: ${message}`);
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { success: true, simulated: true };
    }

    const resend = new Resend(apiKey);

    try {
      const { data: emailResponse, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>", 
        to: "muthukarthik906@gmail.com",
        subject: `New Message from ${name} via Portfolio`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      if (error) {
        console.error("Resend API Error:", error);
        throw new Error(error.message);
      }

      return { success: true };
    } catch (error) {
      console.error("Failed to send email:", error);
      throw new Error("Failed to send email");
    }
  });
