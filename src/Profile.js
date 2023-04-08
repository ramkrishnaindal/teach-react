import React, { useState } from "react";
import "./Profile.css";
const { name, age } = { name: "ravi" };
export const text = "Hi there";
const Profile = ({ name1, age, data, add, onClick, setEditItem }) => {
  //   const [a,b]=[1,2]

  return (
    <h1>
      Profile of {name1} of age {age}
      {data.map((item, index) => {
        return (
          <div
            key={index}
            onClick={setEditItem.bind(null, item.id, item.title, item.author)}
          >
            <div className="containerLabel">
              <label className="lable" htmlFor="">
                {item.title}
              </label>
            </div>

            <div className="div">
              {item.author}
              <button
                className="btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(item.id);
                }}
              >
                X
              </button>
            </div>
            {/* <button onClick={onClickHandler.bind(null, item.name)}> */}
          </div>
        );
      })}
      <button onClick={add}>Add</button>
    </h1>
  );
};

export default Profile;
