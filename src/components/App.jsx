// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import React from "react";
import Heading from "./Heading";
import List from "./List";
// import PI, { doublePi, triplePi } from "./math";
import * as pi from "./math";
console.log(pi);
function App() {
  return (
    <div>
      <Heading />
      <List />
      <List />
      <li>{pi.default}</li>
      <li>{pi.doublePi()}</li>
      <li>{pi.triplePi()}</li>
      <li>{pi.add(2, 3)}</li>;
    </div>
  );
}

export default App;
