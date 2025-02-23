import useDirection from "@/hooks/use-direction";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
const Layout = () => {
  const dir = useDirection();
  return (
    <div dir={dir} className="size-full relative">
      {/* <Navbar /> */}
      <main className="size-full min-h-dvh">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
