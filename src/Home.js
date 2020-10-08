import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./home.css"

function Home() {
  const [state, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    history.push("/results");

    dispatch({
      type: "SET_SEARCH_TERM",
      term: input,
    });
  };

  return (
    <div className="home">
<h1>Google 2.0</h1>

      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        ></input>
        <button onClick={search} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Home;
