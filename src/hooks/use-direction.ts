import { useTranslation } from "react-i18next";

type Direction = "rtl" | "ltr";

/**
 * Custom hook to get page direction.
 * @returns {Direction}
 * @example
 * const direction = useDirection();
 * console.log(direction) // "rtl" | "ltr"
 */
const useDirection = (): Direction => {
  const { i18n } = useTranslation();
  const direction = i18n.dir();
  return direction;
};

export default useDirection;
