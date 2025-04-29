//  create and render element in react

const heading_react = React.createElement("h1", { id: "heading" }, "Hello world from react js")

// props (attributes + children) in react create element
console.log(heading_react)

const root_react = ReactDOM.createRoot(document.getElementById("root_react"))

// render appends the created object to the div
root_react.render(heading_react)


//creating nested element structure (children inside parent )
//pass create react into parent
/**
 * <div  id='parent'>
 *   <div id="children">
 *    <h1>From children div</h1>
 *     <h2>From children 2 div</h2>
 *  </div>
 * </div>
 * 
 */
const parent = React.createElement("div", { id: "parent" }, React.createElement("h1", { id: "children" }, "From children div"))

console.log("parent", parent)

//convert to array of different children
const parent2 = React.createElement("div", { id: "parent" }, [React.createElement("h1", { id: "children" }, "From children div k"),
React.createElement("h2", { id: "children" }, "From children 2 div")
])


const parent3 = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "parent" }, [React.createElement("h1", { id: "children" }, "From children div k"),
React.createElement("h2", { id: "children" }, "From children 2 divlll")
]),
React.createElement("div", { id: "parent" }, [React.createElement("h1", { id: "children" }, "From children div k"),
React.createElement("h2", { id: "children" }, "From children 2 div")
])])

root_react.render(parent)

root_react.render(parent3)


