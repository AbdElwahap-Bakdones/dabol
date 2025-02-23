import { FC, LazyExoticComponent, Suspense } from "react";
import UserTableLoading from "./user-table-loading";

type Props = {
  Page: LazyExoticComponent<FC<unknown>>;
  fallback?: JSX.Element;
};
const SuspensePage: FC<Props> = ({ Page, fallback }) => {
  return (
    <Suspense fallback={fallback ? fallback : <UserTableLoading />}>
      <Page />
    </Suspense>
  );
};

export default SuspensePage;
