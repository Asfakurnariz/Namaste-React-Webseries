/**
 * this is nested code in HTML, How we can write it.
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 Tag</h1>
 *          <h2>I am h2 Tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am h1 Tag</h1>
 *          <h2>I am h2 Tag</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML (Broweser Understand)
 * 
 */

// this is the code of core React Code, this is how we can write code with react without JSX.
const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ]),
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ]),
]);

console.log(parent); // this is for showing object on log file.

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello World from React"
//     );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);