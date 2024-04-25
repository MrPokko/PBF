import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/css/bootstrap.min.css");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;


