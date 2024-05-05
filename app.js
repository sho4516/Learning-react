import React from "react";
import ReactDOM from "react-dom";

// This is a very clumsy way and rarely used. This is the core of react but is very developer friendly.
//Hence JSX was invented
// const heading = React.createElement("h1", {}, "Hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//JSX - is not HTML in JS

//React element
// const jsxHeading = (
//   <h1 id="heading" className="heading">
//     Welcome to react using JSX 🚀
//   </h1>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React functional component
const Title = () => {
  return <h1 className="title">This is a title</h1>;
};

// Component composition
const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1 className="heading">React functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
