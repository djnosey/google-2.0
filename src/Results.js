import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import response from "./response";
import "./results.css";

function Results() {
  const [{ term }, dispatch] = useStateValue();
  const {data} = useGoogleSearch(term)

  //const data = response;

  console.log(data);

  return (
    <div className = "results__page">
      {data?.items.map((item) => (
        <div className="results__div">
          <a href={item.link}>
            <h2>{item.title}</h2>
          </a>

          <p>{item.snippet}</p>
          <a href={item.link}>{item.displayLink}</a>
        </div>
      ))}
    </div>
  );
}

export default Results;
