import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslation } from "react-i18next";

const UserTableLoading = () => {
  const { t } = useTranslation();
  const UsersHeaderTable = [
    {
      head: "global.id",
      className: "w-[80px]",
    },
    {
      head: "global.image",
    },
    {
      head: "global.name",
    },
    {
      head: "global.email",
    },
    {
      head: "global.phone",
    },
    {
      head: "global.actions",
      className: "text-end",
    },
  ];
  return (
    <div className="w-full border-2 overflow-hidden shadow hidden sm:block">
      <div className="p-2 w-full flex justify-end">
        <Skeleton className="w-24 h-10 rounded-lg" />
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-inherit !border-b-4 capitalize">
            {UsersHeaderTable.map((item, index) => (
              <TableHead className={item.className} key={index}>
                {t(item.head)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(5)
            .fill("")
            .map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="size-5" />
                </TableCell>
                <TableCell className="font-medium flex gap-2 justify-start items-center">
                  <Skeleton className="size-10 rounded-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-28 h-3 rounded-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-32 h-3 rounded-full" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Skeleton className="w-28 h-3 rounded-full" />
                </TableCell>
                <TableCell className="flex justify-end gap-4">
                  <Skeleton className="size-8 rounded" />
                  <Skeleton className="size-8 rounded" />
                  <Skeleton className="size-8 rounded" />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTableLoading;
