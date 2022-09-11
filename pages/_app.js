import React, { useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import "./../styles/globals.css";
import { GlobalContext } from "./../app/state/contexts/AppContext";
import Head from "next/head";
import Script from "next/script";
import Ad from "../components/Ad/Ad";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  debugger;
  // useEffect(() => {
  //   const { googletag } = window;
  //   if (googletag) {
  //     googletag.cmd.push(function () {
  //       googletag.pubads().refresh();
  //     });
  //   }
  // }, []);
  console.log("router", router);
  // React.useEffect(() => {}, []);
  // React.useEffect(() => {
  //   debugger;
  //   !window.adsbygoogle
  //     ? (window.adsbygoogle = window.adsbygoogle || []).push({})
  //     : console.log("Adsbygoogle already exists");
  // }, []);
  const admin = (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F2F2F0",
        }}
        className="flex-col md:flex-row gap-3"
      >
        {/* <Script
          id="Adsense-id"
          data-ad-client="2397723075092719"
          async="true"
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        /> */}

        <div className="w-full hidden md:flex-1 md:block"></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            // width: "80vw",

            minHeight: "100vh",
            // flex: 1,
          }}
          className="w-full md:w-1000px"
        >
          <Header marginX={"220px"} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              // alignItems: "center",
              // margin: "auto",
              minWidth: "100%",
              // position: "relative",

              flex: 1,
            }}
            // className="md:top-[5rem] top-[4rem]"
          >
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
        <div className="w-full hidden md:block md:flex-1"></div>
      </div>
    </>
  );
  const other = (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F2F2F0",
        }}
        className="flex-col md:flex-row gap-3"
      >
        {/* <Script
          id="Adsense-id"
          data-ad-client="2397723075092719"
          async="true"
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        /> */}

        <div className="w-full hidden md:flex-1 md:block">
          <Ad currentPath="page add" dataAdSlot="2909822801" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            // width: "80vw",

            minHeight: "100vh",
            // flex: 1,
          }}
          className="w-full md:w-1000px"
        >
          <Header marginX={"220px"} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              // alignItems: "center",
              // margin: "auto",
              minWidth: "100%",
              // position: "relative",

              flex: 1,
            }}
            // className="md:top-[5rem] top-[4rem]"
          >
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
        <div className="w-full hidden md:block md:flex-1">
          <Ad currentPath="below footer ad" dataAdSlot="2989713855" />
        </div>
      </div>
    </>
  );
  const news = (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F2F2F0",
        }}
      >
        {/* <Script
          id="Adsense-id"
          async
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2397723075092719"
          crossorigin="anonymous"
        /> */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",

            // width: "80vw",
            minHeight: "100vh",
            // flex: 1,
          }}
          className="w-full md:w-1280px"
        >
          <Header marginX={"80px"} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // position: "relative",
              // justifyContent: "center",
              // alignItems: "center",
              // margin: "auto",
              minWidth: "100%",
              flex: 1,
            }}
            className="w-full md:w-4/6"
          >
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
  return (
    <GlobalContext>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-2397723075092719"
        async="true"
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      {router.asPath.includes("/admin")
        ? admin
        : router.asPath.includes("/news/")
        ? news
        : other}
    </GlobalContext>
  );
}

export default MyApp;
