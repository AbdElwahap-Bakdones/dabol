import { useTranslation } from "react-i18next";

// import logo from "@/assets/logo2.png";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%B4%D8%B1%D9%83%D8%A9%20%D8%AF%D8%B9%D8%A8%D9%88%D9%84%20%D9%84%D9%88%D8%BA%D9%88%20%D9%85%D8%B9%D8%AF%D9%84-BH9UkqyzeZcufSTx253sZpH8bkThnj.png"
            alt="DBC Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-sm font-semibold">D.B.C</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          {t("DABOL FOR TRADING. All rights reserved.")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
