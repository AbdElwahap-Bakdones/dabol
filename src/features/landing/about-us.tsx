import img from "@/assets/images/img2.jpg";
import Title from "@/components/title";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const data = [
    {
      text: "Quality Assurance: All our products are identical to the samples we provide and have data sheets.",
    },
    {
      text: "Competitive Pricing: We offer the best prices with the highest quality.",
    },
    {
      text: "Expert Support: Our knowledgeable team is here to assist you with any questions or requirements.",
    },
  ];

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  const { t } = useTranslation();
  return (
    <section
      id="about-us"
      className="relative container max-sm:px-4 my-10 md:my-20 max-lg:flex max-lg:flex-col-reverse md:h-[450px]"
    >
      {/* Image Section */}
      <motion.div
        className="flex size-full lg:justify-end max-lg:mt-4 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={imageVariant}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={img}
          alt=""
          className="lg:w-2/3 object-cover rounded-[30px]"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col gap-4 bg-black/80 p-4 md:p-6 text-[hsla(214,32%,91%,1)] rounded-[30px] z-40 lg:absolute top-0 bottom-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariant}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
      >
        <Title level={2} className="font-semibold">
          {t("Why Choose Us")}
        </Title>
        <motion.p
          // className="text-primary"
          color="#738FAF"
          variants={textVariant}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t(
            `At Dabol-DBC, we are your trusted partner for high-quality materials and solutions in the woodworking industry. Our mission is to deliver exceptional products that meet the diverse needs of our clients, ensuring satisfaction with every purchase.`
          )}
        </motion.p>
        <ul className="flex flex-col gap-4 no-underline md:mt-4">
          {data.map((item, index) => (
            <motion.li
              key={index}
              className="flex gap-2 md:gap-4 items-center"
              variants={textVariant}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <div className="size-3 rounded-full bg-white" />
              <p className="md:w-[80%]">{t(item.text)}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default AboutUs;
