import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@component/store ";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
