const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("h1", {
        id: "h1"
    }, "I am h1"),
    React.createElement("h2", {
        id: "h2"
    }, "I am h2")
]);
const heading = React.createElement("h1", {
    id: "heading",
    class: "head"
}, "Hello! I am from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
