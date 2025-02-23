import img5 from "@/assets/images/hot-glue.jpg";
import img1 from "@/assets/images/mdf.jpg";
import img3 from "@/assets/images/melamen-mdf.jpg";
import img6 from "@/assets/images/pvc-edge.jpg";
import img7 from "@/assets/images/PVC-foam-board.jpg";
import img2 from "@/assets/images/pvc-faom-2.jpg";
import img4 from "@/assets/images/white-glue.jpg";
import Title from "@/components/title";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Products = () => {
  const data = [
    {
      img: img1,
      title: "Plain MDF Normal 18~6 mm (Thailand)",
      details:
        "Ideal for furniture making and interior applications, our Plain MDF offers a smooth surface for easy finishing.",
    },

    {
      img: img3,
      title: "Melamine MDF (Thailand)",
      details:
        "A versatile option with a range of decorative finishes, perfect for creating stylish furniture and cabinetry.",
    },
    {
      img: img4,
      title: "White Glue (Taiwan)",
      details:
        "High-quality adhesive designed for woodworking, providing strong bonds and excellent performance.",
    },
    {
      img: img5,
      title: "Hot Melt Glue (Taiwan)",
      details:
        "Fast-setting adhesive that ensures quick assembly, ideal for production lines and woodworking projects.",
    },
    {
      img: img6,
      title: "PVC Edge banding (China)",
      details:
        "Enhance the appearance of your furniture with our durable edge banding, available in various colors and finishes.",
    },
    {
      img: img7,
      title: "PVC Foam Board 18 and 6 mm (China)",
      details:
        "Lightweight, 100% waterproof, insect-proof, anti-mildew, anti-fungal, eco-friendly, used for kitchens, under sinks and outdoors.",
    },
    {
      img: img2,
      title: "Plain MDF MR 18~6 mm (Thailand)",
      details:
        "Moisture-resistant MDF suitable for humid environments, ensuring durability and longevity in various applications.",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // الحركات تظهر بالتتابع
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const { t } = useTranslation();
  return (
    <section
      id="products"
      className="relative container max-sm:px-4 my-10 md:my-20 w-full "
    >
      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="mb-6 md:mb-12 text-center"
        >
          <motion.div variants={itemVariants}>
            <Title level={2} className="font-semibold">
              {t("Our Products")}
            </Title>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-muted-foreground"
          >
            {t("High-quality construction materials for your projects")}
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((product, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className={`group rounded-[30px] shadow-xl relative overflow-hidden border bg-background p-4 md:p-6 transition-all hover:border-primary hover:shadow-lg`}
            >
              <div className="mb-4">
                <img
                  src={product.img}
                  alt={product.title}
                  className="size-full object-cover h-[300px] shadow-xl rounded-[30px]"
                />
              </div>
              <h3 className="px-2 mb-2 text-lg font-semibold">
                {t(product.title)}
              </h3>
              <p className="px-2 text-sm text-muted-foreground max-w-[90%]">
                {t(product.details)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
