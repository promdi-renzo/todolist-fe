import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <div style={parentDiv}>
      <Header title="About" />
      <div style={content}>
        <h2>2du App</h2>
        <p>
          2du list is a fun, flexible, and free. Access it anywhere for free and
          fast. Easiest to manage your goal and task by using our website you
          can now experience basic to do list, and list all your memories so you
          will not forget it.
        </p>
        <h3>Dev Team</h3>
        <ul style={ul}>
            <li><a href="https://www.github.com/renzothenoob">@renzothenoob</a></li>
            <li><a href="https://www.github.com/druloloy">@druloloy</a></li>
            <li><a href="https://www.github.com/Connected21">@Connected21</a></li>
        </ul>
      </div>
    </div>
  );
}
const parentDiv = {
  width: "100%",
};
const ul ={
    padding: "0 2rem",
}
const content = {
  minWidth: "100%",
  padding: "1rem",
};
export default About;
