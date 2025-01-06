import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/*
const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(heading);
*/
