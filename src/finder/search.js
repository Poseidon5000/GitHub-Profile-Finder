import React from "react";
import { useState } from "react";
import Axios from "axios";
import Displaytable from "../finder/Displaytable";
import "../App.css";

const Search = () => {
  const [data, setData] = useState("");
  const [username, setUsername] = useState("");
  const [repository, setRepository] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const searchHandler = async (e) => {
    e.preventDefault();

    // const profile = await fetch(`https://api.github.com/users/${username}`);
    // const profileJson = await profile.json();
    // console.log(profileJson);

    // const repos = await fetch(profileJson.repos_url)
    // const repo = repos.json()
    // console.log(repo);

    const profile = await Axios.get(
      `https://api.github.com/users/${username}`
    ).then((res) => res.data);

    const repository = await Axios.get(
      `https://api.github.com/users/${username}/repos`
    ).then((res) => res.data);
    console.log(repository);

    if (profile) {
      setData(profile);
      setRepository(repository);
    }
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="searcher">
          <div className="ui search first">
            <div className="ui icon input">
             

              <input
                className="prompt username"
                placeholder="search username here"
                value={username}
                onChange={onChangeHandler}
              />
            </div>
          </div>

          <button
            className="ui primary button"
            type="submit"
            onClick={searchHandler}
          >
            <i class="github icon"></i>
            Search
          </button>
        </div>

        <Displaytable data={data} repository={repository} />
      </div>
    </>
  );
};

export default Search;
