import React, { useState } from "react";

function App() {
  // var ct = 0;
  const [count, setCount] = React.useState(0);
  // console.log(state); // can see two arguments

  function increase() {
    setCount(count + 1);
    // ct++;
    // ReactDOM.render(
    //   <div className="container">
    //     <h1>{ct}</h1>
    //     <button onClick={increase}>+</button>
    //   </div>,
    //   document.getElementById("root"),
    // );
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
// import React from "react";

// function strike() {
//   document.getElementById("root").style.textDecoration = "line-through";
// }
// function unStrike() {
//   document.getElementById("root").style.textDecoration = null;
// }
// function App() {
//   var isDone = false;
//   const strikeThrough = { textDecoration: "line-through" };
//   return (
//     <div>
//       <p> Buy milk</p>
//       <button onClick={strike}>Change to strike through</button>
//       <button onClick={unStrike}>Change back to unstriek</button>
//     </div>
//   );
//   //return <p style={isDone && strikeThrough}>Buy Milk</p>;
//   // return <p style={isDone ? strikeThrough : null}>Buy Milk</p>;
//   // return <p style={{ textDecoration: "line-through" }}>Buy Milk</p>;
// }

// export default App;
// import React from "react";
// import Form from "./Form";

// const userIsRegistered = false;

// function App() {
//   return (
//     <div className="container">
//       <Form isRegistered={userIsRegistered} />
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import Login from "./Login";

// var isLoggedIn = false;

// const currTime = new Date().getHours();

// // function renderConditionally() {
// //   if (isLoggedIn === true) {
// //     return <h1>Hello</h1>;
// //   } else {
// //     return <Login />;
// //   }
// // }

// function App() {
//   return;
//   // <div className="container">{renderConditionally()}</div>;
//   // <div className="container">{ if (isLoggedIn === true) {
//   //     return <h1>Hello</h1>;
//   //     } else {
//   //        return <Login />;
//   //     }}
//   //   </div>;
//   <div className="container">
//     {isLoggedIn ? <h1>Hello</h1> : <Login />}
//     {currTime > 12 ? <h1>Why are you still working?</h1> : null}
//   </div>;
// }

// export default App;
// import React from "react";
// import Login from "./Login";

// var isLoggedIn = false;

// function renderConditionally() {}

// import React from "react";
// import Entry from "./Entry";
// import emojipedia from "../emojipedia";

// console.log(emojipedia);

// // function createEntry(emojiTerm) {
// //   return (
// //     <Entry
// //       key={emojiTerm.id}
// //       emoji={emojiTerm.emoji}
// //       name={emojiTerm.name}
// //       description={emojiTerm.meaning}
// //     />
// //   );
// // }

// function App() {
//   return (
//     <div>
//       <h1>
//         <span>emojipedia</span>
//       </h1>
//       <dl className="dictionary">
//         {emojipedia.map(
//           (
//             emojiTerm, //instead of doing with normal function we do it by fat arrow fucntions
//           ) => (
//             <Entry
//               key={emojiTerm.id}
//               emoji={emojiTerm.emoji}
//               name={emojiTerm.name}
//               description={emojiTerm.meaning}
//             />
//           ),
//         )}
//       </dl>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Card from "./Card";
// import contacts from "../contacts";
// import Avatar from "./AVatar";

// function createCard(contact) {
//   return (
//     <Card
//       key={contact.id}
//       name={contact.name}
//       img={contact.img}
//       tel={contact.phone}
//       email={contact.email}
//     />
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1 className="heading">Mycontacts</h1>
//       <Avatar img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" />
//       {contacts.map(createCard)}
//       {/* <Card
//         name={contacts[0].name}
//         img={contacts[0].img}
//         tel={contacts[0].tel}
//         email={contacts[0].email}
//       /> */}
//       {/* <div className="card">
//         <div className="top">
//           <h2 className="name">Alisha</h2>
//           <img
//             className="circle-img"
//             src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//             alt="avatar_img"
//           />
//         </div>
//         <div className="bottom">
//           <p className="info">{props.tel}</p>
//           <p className="info">{props.email}</p>
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default App;

// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// import React from "react";
// import Heading from "./Heading";
// import List from "./List";
// // import PI, { doublePi, triplePi } from "./math";
// import * as pi from "./math";
// console.log(pi);
// function App() {
//   return (
//     <div>
//       <Heading />
//       <List />
//       <List />
//       <li>{pi.default}</li>
//       <li>{pi.doublePi()}</li>
//       <li>{pi.triplePi()}</li>
//       <li>{pi.add(2, 3)}</li>;
//     </div>
//   );
// }

// export default App;
