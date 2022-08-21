import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./../styles/globals.css";
import { GlobalContext } from "./../app/state/contexts/AppContext";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    !window.adsbygoogle
      ? (window.adsbygoogle = window.adsbygoogle || []).push({})
      : console.log("Adsbygoogle already exists");
  }, []);
  return (
    <>
      <div className="global-container">
        <Script
          id="Adsense-id"
          async
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2397723075092719"
          crossorigin="anonymous"
        />
        <GlobalContext>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              flex: 1,
            }}
          >
            <Header />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                minWidth: "100%",
                flex: 1,
              }}
            >
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </GlobalContext>
      </div>
    </>
  );
}

export default MyApp;
