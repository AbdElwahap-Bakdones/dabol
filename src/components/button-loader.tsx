import useDirection from "@/hooks/use-direction";
import { useTranslation } from "react-i18next";
import Loader from "./ui/loader";

const ButtonLoader = ({ message = "global.loading-text" }) => {
  const { t } = useTranslation();
  const dir = useDirection();
  return (
    <span dir={dir} className="flex justify-center items-center gap-2">
      <span className="text-sm">{t(message)}</span>
      <Loader variant="spinner" />
    </span>
  );
};

export default ButtonLoader;
