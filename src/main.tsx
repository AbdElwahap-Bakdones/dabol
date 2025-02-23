import App from "@/App";
import "@/i18n";
import "@/index.css";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "./providers/react-query-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReactQueryProvider>
    <App />
    <Toaster
      toastOptions={{
        duration: 3000,
        className: "text-base [&_*]:font-Tajawal",
      }}
    />
  </ReactQueryProvider>
);
