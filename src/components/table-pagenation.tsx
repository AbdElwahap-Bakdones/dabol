// import { useSearchParams } from "react-router-dom";
// import { Button } from "./ui/button";
// import { Pagination } from "@/types";
// import {
//   ChevronLeft,
//   ChevronRight,
//   ChevronsLeft,
//   ChevronsRight,
// } from "lucide-react";
// import { FC } from "react";
// import { useTranslation } from "react-i18next";

// type PropsType = {
//   pagination: Pagination;
// };

// const TablePagination: FC<PropsType> = ({ pagination }) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const { t } = useTranslation();
//   console.log(pagination)
//   return (
//     <div className="gap-2 flex">
//       <div className="flex w-full items-center justify-center text-sm font-medium text-primary">
//         {t("pagination.current-page", {
//           current: pagination.current_page,
//           total: Math.ceil(pagination?.total / pagination?.per_page),
//         })}
//       </div>
//       <div className="flex items-center justify-center space-x-2 flex-1">
//         <div className="flex justify-center items-center gap-2 rtl:flex-row-reverse">
//           <Button
//             onClick={() => {
//               searchParams.set("page", "1");
//               setSearchParams(searchParams);
//             }}
//             disabled={pagination.current_page === 1}
//             className="w-8 h-8 text-primary border-primary rounded-full"
//             size="icon"
//             variant="outline"
//           >
//             <span className="sr-only">next</span>
//             <ChevronsLeft className="w-5 h-5" />
//           </Button>
//           <Button
//             disabled={pagination.current_page === 1}
//             onClick={() => {
//               if (searchParams.has("page"))
//                 searchParams.set(
//                   "page",
//                   (+searchParams.get("page")! - 1).toString()
//                 );
//               setSearchParams(searchParams);
//             }}
//             className="w-8 h-8 text-primary border-primary rounded-full"
//             size="icon"
//             variant="outline"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </Button>
//           <Button
//             disabled={typeof pagination.next_page_url !== "string"}
//             onClick={() => {
//               if (!searchParams.has("page")) searchParams.set("page", "2");
//               else {
//                 if (
//                   +searchParams.get("page")! !==
//                   Math.ceil(pagination?.total / pagination?.per_page)
//                 ) {
//                   searchParams.set(
//                     "page",
//                     (+searchParams.get("page")! + 1).toString()
//                   );
//                 }
//               }
//               setSearchParams(searchParams);
//             }}
//             className="w-8 h-8 text-primary border-primary rounded-full"
//             size="icon"
//             variant="outline"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </Button>
//           <Button
//             disabled={typeof pagination.next_page_url !== "string"}
//             onClick={() => {
//               searchParams.set(
//                 "page",
//                 Math.ceil(pagination?.total / pagination?.per_page).toString()
//               );
//               setSearchParams(searchParams);
//             }}
//             className="w-8 h-8 text-primary border-primary rounded-full"
//             size="icon"
//             variant="outline"
//           >
//             <ChevronsRight className="w-5 h-5" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TablePagination;
