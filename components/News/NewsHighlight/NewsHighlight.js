import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
// import { AppContext } from "../../../app/state/contexts/AppContext";
import getWindowDimensions from "../../../hooks/useWindowDimensions";
function NewsHighlight({ data, id, optionalHeight, W }) {
  const router = useRouter();
  // const [state, dispatch] = useContext(AppContext);
  const { height, width } = getWindowDimensions();
  let slug = "";
  let oldTitle = data.title;
  for (let i = 0; i < oldTitle.length; i++) {
    if (oldTitle[i] == " ") {
      slug += "-";
    } else {
      slug += oldTitle[i]?.toLowerCase();
    }
    if (slug.substr(slug.length - 1) === "?")
      slug = slug.substr(0, slug.length - 1);
  }
  console.log("slug", data.title);
  function createMarkup(length = 30) {
    console.log("data.details", data.title);
    const p = document.createElement("p");
    p.innerHTML = data?.title || "";
    // p.classList.add("hover:underline");
    const arr = p.innerText.split(" ");
    const count = Math.floor(arr.length < length ? arr.length : length);
    const arrToTake = arr.map((item, index) => {
      if (index <= count) return item;
    });
    let result = arrToTake.join(" ") + (arr.length > length ? "..." : "");
    if (result.length > 80) {
      result = result.substring(0, 80) + " ...";
    }
    return result;
    // return {
    //   __html: data.details,
    // };
  }
  return (
    <div
      className={`py-3 ${W ? "md:w-1/2" : ""}`}
      style={{ cursor: "pointer" }}
      // onClick={() => {
      //   debugger;
      //   // dispatch({ type: "setposts", payload: res.data.data });

      //   router.push(`/news/${slug}`);
      // }}
    >
      {/* <Link href={`/news/${slug}`}> */}
      <div className="flex gap-3">
        <div className="w-2/5 px-1 md:px-0 md:pr-3 pt-1">
          <Link
            className="w-3/5 px-1 md:px-0 md:pr-3 hover:underline"
            style={{ wordBreak: "break-word" }}
            href={`/news/${slug}`}
          >
            <img
              src={data.imgUrl}
              alt="post-img"
              className={`w-80 md:h-${
                optionalHeight ? optionalHeight : "24"
              } h-20 object-cover rounded-lg`}
            />
          </Link>
          {/* </a> */}
        </div>

        {/* <p dangerouslySetInnerHTML={createMarkup()} />; */}
        <Link href={`/news/${slug}`}>
          <p
            className="w-3/5 px-1 md:px-0 md:pr-3 hover:underline"
            style={{ wordBreak: "break-word" }}
          >
            {createMarkup(width < 768 ? 17 : optionalHeight ? 10 : 60)}
          </p>
        </Link>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default NewsHighlight;
