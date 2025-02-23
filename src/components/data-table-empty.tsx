import img from "@/assets/images/nodatafound.svg";
import { useTranslation } from "react-i18next";
import { TableCell, TableRow } from "./ui/table";
// Define the type for the props expected by DataTableEmpty
type DataTableEmptyProps = {
  colSpan: number;
};

// Define the component with props typed according to DataTableEmptyProps
const DataTableEmpty: React.FC<DataTableEmptyProps> = ({ colSpan }) => {
  const { t } = useTranslation("translation");
  return (
    <TableRow>
      <TableCell className="!p-8 text-nowrap text-center" colSpan={colSpan}>
        <div className="flex justify-center items-center flex-col">
          <img src={img} alt="" className="w-48" />
          <p>{t("global.data-is-empty")}</p>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default DataTableEmpty;
