import {
  Table as TableShad,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactNode } from "react";

interface Props {
  DataTable: Record<string, ReactNode>[];
  HeaderTable: { head: string; className?: string }[];
}
const Table: React.FC<Props> = ({ DataTable, HeaderTable }) => {
  return (
    <TableShad className="border-2">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-inherit !border-b-4 capitalize">
          {HeaderTable.map((item, index) => (
            <TableHead className={item.className} key={index}>
              {item.head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {DataTable.map((items, index) => (
          <TableRow key={index}>
            {Object.values(items).map((item, subIndex) => (
              <TableCell key={subIndex}>{item}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableShad>
  );
};

export default Table;
