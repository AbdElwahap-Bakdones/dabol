import logo from "@/assets/images/logo.png";
import img1 from "@/assets/images/gallery/1.jpg";
import img2 from "@/assets/images/gallery/2.jpg";
import img3 from "@/assets/images/gallery/3.jpg";
import img4 from "@/assets/images/gallery/4.jpg";
import img5 from "@/assets/images/gallery/5.jpg";
import img6 from "@/assets/images/gallery/6.jpg";
import img7 from "@/assets/images/gallery/7.jpg";
import img8 from "@/assets/images/gallery/8.jpg";
import img9 from "@/assets/images/gallery/9.jpg";
import img10 from "@/assets/images/gallery/10.jpg";
import img11 from "@/assets/images/gallery/11.jpg";
import img12 from "@/assets/images/gallery/12.jpg";
import img13 from "@/assets/images/gallery/13.jpg";
import img14 from "@/assets/images/gallery/14.jpg";
import img15 from "@/assets/images/gallery/15.jpg";
import img16 from "@/assets/images/gallery/16.jpg";
import img17 from "@/assets/images/gallery/17.jpg";
import img18 from "@/assets/images/gallery/18.jpg";
import img19 from "@/assets/images/gallery/19.jpg";
import img20 from "@/assets/images/gallery/20.jpg";
import img21 from "@/assets/images/gallery/21.jpg";

import Title from "@/components/title";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const images = [
  img1,
  img2,
  img3,
  // img4,
  // img5,
  // img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
];

const Gallery = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="gallery"
      className="flex flex-col relative container max-sm:px-4 my-10 md:my-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className="mb-6 md:mb-12 text-center"
      >
        <motion.div variants={itemVariants}>
          <Title level={2} className="font-semibold">
            {t("gallery")}
          </Title>
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-muted-foreground "
        >
          {t("High-quality construction materials for your projects")}
        </motion.p>
      </motion.div>
      <div className="absolute inset-0 w-full h-full flex items-end -z-10">
        <div className="w-full bg-gradient-to-b from-[rgba(250,245,235,1)] via-[rgba(250,245,235,1)] to-[rgba(255,255,255,1)] h-2/3 blur-sm" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-3 justify-center items-center gap-6 mt-4"
      >
        {images.map((img, index) => (
          <motion.div key={index} variants={itemVariants}>
            <img
              loading="lazy"
              src={img}
              alt=""
              className="h-[300px] w-full object-cover rounded-[30px] shadow-xl"
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="flex max-sm:flex-col gap-4 mt-10"
      >
        <div className="sm:w-2/3">
          <div className="grid grid-cols-2 items-end gap-4 my-8">
            <motion.div className="flex flex-col " variants={itemVariants}>
              <img
                className="p-6 object-contain h-[300px]"
                loading="lazy"
                src={logo}
                alt=""
              />
              <img
                loading="lazy"
                src={img5}
                alt=""
                className="h-[300px] object-cover rounded-[30px]"
              />
            </motion.div>
            <motion.div className="" variants={itemVariants}>
              <img
                loading="lazy"
                src={img4}
                alt=""
                className="h-[600px] w-full object-cover rounded-[30px]"
              />
            </motion.div>
          </div>
          <motion.div variants={itemVariants}>
            <motion.p
              variants={itemVariants}
              className="max-sm:text-justify text-main xl:text-meduim  font-[400]"
            >
              {/* Additional text can be added here */}
            </motion.p>
          </motion.div>
        </div>
        <div className="sm:w-1/3 flex flex-col-reverse max-sm:my-4 sm:flex-col justify-center gap-4">
          <motion.p
            variants={itemVariants}
            className="max-sm:text-justify  text-main xl:text-meduim  font-[400]"
          >
            {/* Additional text can be added here */}
          </motion.p>
          <motion.div variants={itemVariants} className="max-sm:mb-4">
            <img
              loading="lazy"
              src={img6}
              alt=""
              className="h-[300px] w-full rounded-[30px] object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
