import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { SectionHeading } from "./About";
import { sendContactEmail } from "@/actions/contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await sendContactEmail({ data: values });
      if (response?.success) {
        toast.success("Message sent successfully!", {
          description: "I'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Error sending message", {
        description: "Please try again or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Get In Touch" title="Let's grow your business" />
        <div
          className="mt-12 p-10 md:p-14 rounded-3xl border border-border text-center relative overflow-hidden"
          style={{ backgroundImage: "var(--gradient-card)", boxShadow: "var(--shadow-glow)" }}
        >
          <div
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-30"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          />
          <p className="text-xl md:text-2xl text-foreground/90 italic max-w-2xl mx-auto">
            "Any project I work on, I generate quality leads, manage pages
            professionally, and support business growth through performance marketing."
          </p>
          <div className="grid md:grid-cols-2 gap-10 mt-10 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out directly using the information below, or
                fill out the form and I'll get back to you shortly.
              </p>
              <div className="flex flex-col gap-4 mt-6">
                <a
                  href="tel:9361469482"
                  className="p-5 rounded-2xl border border-border bg-background/40 hover:border-primary transition-colors flex flex-col"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Phone</span>
                  <span className="font-semibold mt-1">+91 93614 69482</span>
                </a>
                <a
                  href="mailto:muthukarthik906@gmail.com"
                  className="p-5 rounded-2xl border border-border bg-background/40 hover:border-primary transition-colors flex flex-col"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Email</span>
                  <span className="font-semibold mt-1 truncate">muthukarthik906@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="bg-background/50 p-6 sm:p-8 rounded-2xl border border-border backdrop-blur-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can I help you grow your business?" 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 rounded-xl"
                    disabled={isSubmitting}
                    style={{ backgroundImage: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
