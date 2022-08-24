import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import styles from "../styles/Home.module.scss";
import Script from "next/script";
import Header from "./../components/Header/Header";
import Ad from "./../components/Ad/Ad";
import News from "../components/News/News";
import dynamic from "next/dynamic";

import axios from "axios";
import { AppContext } from "./../app/state/contexts/AppContext";

const DynamicTimer = dynamic(() => import("../components/Timer/Timer"), {
  ssr: false,
});

function Home() {
  const [state, dispatch] = useContext(AppContext);
  const [isFetching, setFetching] = React.useState(false);
  React.useEffect(() => {
    // !window.adsbygoogle
    //   ? (window.adsbygoogle = window.adsbygoogle || []).push({})
    //   : console.log("Adsbygoogle already exists");
    const url = process.env.NEXT_PUBLIC_HOST_URL + "/foreversPosts";
    (async () => {
      setFetching(true);
      axios.get(url).then((res) => {
        dispatch({ type: "setposts", payload: res.data.data });
        setFetching(false);
      });
    })();
    const urlCat =
      process.env.NEXT_PUBLIC_HOST_URL + "/foreversPosts/categories";
    (async () => {
      setFetching(true);
      axios.get(urlCat).then((res) => {
        dispatch({ type: "set-categories", payload: res.data.data });
        setFetching(false);
      });
    })();
    const urlCatPosts =
      process.env.NEXT_PUBLIC_HOST_URL + "/foreversPosts/categoryPosts";
    (async () => {
      setFetching(true);
      axios.get(urlCatPosts).then((res) => {
        dispatch({ type: "set-category-posts", payload: res.data.data });
        setFetching(false);
      });
    })();
    console.log("state", state);
  }, []);
  return (
    <div style={{ flex: 1, display: "flex" }}>
      <Head>
        <title>Forevers.in</title>
      </Head>
      <main className="container-sm flex flex-col flex-1">
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        {/* <div> */}
        <img src="/assets/modi.jpg" alt="pm-image" />
        {/* <Ad /> */}

        {/* <DynamicTimer /> */}
        {/* <div style={{ flex: 1 }}>afjafjl</div> */}
        <News />
        {/* </div> */}
      </main>
    </div>
  );
}

export default Home;
