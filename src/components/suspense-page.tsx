import { FC, LazyExoticComponent, Suspense } from "react";
import Loading from "./loading";

type Props = {
  Page: LazyExoticComponent<FC<unknown>>;
  fallback?: JSX.Element;
};
const SuspensePage: FC<Props> = ({ Page, fallback }) => {
  return (
    <Suspense fallback={fallback ? fallback : <Loading />}>
      <Page />
    </Suspense>
  );
};

export default SuspensePage;
