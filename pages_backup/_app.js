// import { Router } from "next/router";
// import { useEffect, useState } from "react";
// import Loading from "./loading";

// import "bootstrap/scss/bootstrap.scss";

// // ========= Plugins CSS START =========
// import "../public/css/plugins/feature.css";
// import "../public/css/plugins/fontawesome-all.min.css";
// import "../public/css/plugins/animation.css";
// import "../node_modules/sal.js/dist/sal.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "react-tooltip/dist/react-tooltip.css";
// // ========= Plugins CSS END =========

// import "../public/scss/style.scss";

// export default function App({ Component, pageProps }) {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");

//     const handleStart = (url) => url !== Router.asPath && setLoading(true);
//     const handleComplete = () => setLoading(false);

//     Router.events.on("routeChangeStart", handleStart);
//     Router.events.on("routeChangeComplete", handleComplete);
//     Router.events.on("routeChangeError", handleComplete);

//     return () => {
//       Router.events.off("routeChangeStart", handleStart);
//       Router.events.off("routeChangeComplete", handleComplete);
//       Router.events.off("routeChangeError", handleComplete);
//     };
//   }, []);

//   return <>{loading ? <Loading /> : <Component {...pageProps} />}</>;
// }

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "./loading";

import "bootstrap/scss/bootstrap.scss";

// ========= Plugins CSS START =========
import "../public/css/plugins/feature.css";
import "../public/css/plugins/fontawesome-all.min.css";
import "../public/css/plugins/animation.css";
import "sal.js/dist/sal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tooltip/dist/react-tooltip.css";
// ========= Plugins CSS END =========

import "../public/scss/style.scss";
import "../styles/Home.module.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Remove the Bootstrap JS require and use static CSS
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 300); // Optional loading delay
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("routeChangeError", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("routeChangeError", handleRouteChange);
    };
  }, [router]);

  return <>{loading ? <Loading /> : <Component {...pageProps} />}</>;
}
