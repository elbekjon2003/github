import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./userInfo.css";

function UserInfo({ gitUser }) {
  // console.log(gitUser);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${gitUser}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [gitUser]);

  console.log(data);
  if(gitUser && data.login){
    return(
      <div className="userContainer">
        <div className="avatar">
          <img src={data.avatar_url} alt="" />
        </div>
        <div className="userInfo">
          <h2>{data.login}</h2>
          <p className="bio">{data.bio}</p>
          <h3>Name: {data.name}</h3>
          <h3 className="date">Created at: {data.created_at}</h3>
          <h3 className="repos">Public repos: {data.public_repos}</h3>
        </div>
      </div>
    )
  } else return <h1 className="err">Try to enter valid username</h1>

}

export default UserInfo;
