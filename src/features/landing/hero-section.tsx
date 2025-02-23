import logo from "@/assets/images/logo.png";
import Title from "@/components/title";
import { buttonVariants } from "@/components/ui/button";
import MenuRes from "@/layouts/components/menu-res";
import NavLinks from "@/layouts/components/nav-links";
import LangToggle from "@/layouts/components/toggle-lang";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-dvh text-white relative before:absolute before:inset-0 before:-z-0 before:bg-black/60 bgs ">
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 100 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 bottom-0 start-[180px] lg:start-[224px] h-full w-[0.5px] bg-white z-10 max-md:hidden"
      />
      <motion.div
        initial={{ opacity: 0, height: "0" }}
        animate={{ opacity: 1, height: "350px" }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 start-[178.5px] lg:start-[222.5px] h-[350px] w-[3px] rounded-full bg-white z-20 max-md:hidden"
      />
      <nav className="px-4 sm:px-8 lg:px-12 h-16 flex justify-between items-center gap-4 relative z-50">
        <div className="min-w-[140px] lg:min-w-[160px] flex items-center gap-1">
          <img src={logo} alt="dabol" className="size-14" />
          <h1 className="font-bold text-lg -mt-1">D.B.C</h1>
        </div>
        <div className="flex-1 flex justify-end max-md:hidden gap-4">
          <NavLinks />
          <LangToggle />
        </div>
        <div className="flex-1 flex justify-end md:hidden">
          <MenuRes />
        </div>
      </nav>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 100 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-[1px] relative bg-white z-10"
      />
      <div className="relative z-50 flex flex-col gap-4 items-center justify-center w-full  h-[calc(100vh_-_64px)] text-white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeOut",
              staggerChildren: 0.2, // Stagger children animations
            },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 max-w-lg max-md:px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end gap-1"
          >
            <Title level={2} className="font-normal uppercase">
              {t("Dabol for trading")}
            </Title>
            {/* <div className="flex-1 w-full bg-white h-[1.5px]" /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Title level={2} className="font-normal uppercase">
              {t("building and constructions material")}
            </Title>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="opacity-80"
          >
            {t(
              "We are your trusted partner for high-quality materials and solutions in the woodworking industry. Our mission is to deliver exceptional products that meet the diverse needs of our clients, ensuring satisfaction with every purchase."
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-fit bg-white text-black px-8 hover:text-white"
              )}
            >
              {t("Contact Us")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
