import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="relative container max-sm:px-4 my-10 md:my-20"
    >
      <div className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Title level={2} className="font-semibold">
              {t("Contact Us")}
            </Title>
            <p className="mt-4 text-muted-foreground">
              {t("Get in touch with us for quotes and inquiries.")}
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div className="flex flex-col">
                  <p className="font-medium">{t("Call Us")}</p>
                  <a
                    href="tel:+971521699227"
                    dir="ltr"
                    className="text-sm text-muted-foreground hover:underline hover:text-primary transition-all"
                  >
                    +971 52 169 9227
                  </a>
                  <a
                    href="tel:+971568714170"
                    dir="ltr"
                    className="text-sm text-muted-foreground hover:underline hover:text-primary transition-all"
                  >
                    +971 56 871 4170
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{t("Email Us")}</p>
                  <a
                    dir="ltr"
                    href="mailto:dabolglue@gmail.com"
                    className="text-sm text-muted-foreground hover:underline hover:text-primary transition-all"
                  >
                    dabolglue@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{t("Visit Us")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("No. 17 - TOUFIQ L-Industrial 17 Sharqah - UAE")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">
                  {t("Name")}
                </label>
                <Input
                  className="rounded-[10px]"
                  id="name"
                  placeholder={t("Your name")}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  {t("Email")}
                </label>
                <Input
                  className="rounded-[10px]"
                  id="email"
                  placeholder={t("Your email")}
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">
                {t("Message")}
              </label>
              <Textarea
                className="min-h-[150px] rounded-[10px]"
                id="message"
                placeholder={t("Your message")}
              />
            </div>
            <Button className="w-full rounded-[10px] text-white" size="lg">
              {t("Send Message")}
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative Shapes */}
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-secondary/20 blur-2xl"></div>
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
    </section>
  );
};

export default ContactUs;
