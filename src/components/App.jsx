import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: "",
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;
//     // setContact((prevValue) => ({ ...prevValue, [name]: value }));
//     setContact((prevValue) => {
//       return {
//         ...prevValue,
//         [name]: value,
//         // event.target.name:value can't use event inside set state otherwise warnings will be shown
//       };
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input
//           onChange={handleChange}
//           name="fName"
//           value={contact.fName}
//           placeholder="First Name"
//         />
//         <input
//           onChange={handleChange}
//           name="lName"
//           value={contact.lName}
//           placeholder="Last Name"
//         />
//         <input
//           onChange={handleChange}
//           name="email"
//           value={contact.email}
//           placeholder="Email"
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: "",
//   });

//   function changeState(event) {
//     const { name, value } = event.target;
//     setContact((prev) => {
//       if (name === "fName") {
//         setContact({
//           fName: value,
//           lName: prev.lName,
//           email: prev.email,
//         });
//       } else if (name === "lName") {
//         setContact({
//           fName: prev.fName,
//           lName: value,
//           email: prev.email,
//         });
//       } else if (name === "email") {
//         setContact({
//           fName: prev.fName,
//           lName: prev.lName,
//           email: value,
//         });
//       }
//     });
//   }
//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input
//           onChange={changeState}
//           value={contact.fName}
//           name="fName"
//           placeholder="First Name"
//         />
//         <input
//           onChange={changeState}
//           value={contact.lName}
//           name="lName"
//           placeholder="First Name"
//         />
//         <input
//           onChange={changeState}
//           value={contact.email}
//           name="email"
//           placeholder="First Name"
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [fullName, setFullName] = useState({
//     fName: "",
//     lName: "",
//   });

//   function handleChange(event) {
//     // const newValue = event.target.value;
//     // const inputName = event.target.name;
//     // console.log(newValue);
//     // console.log(inputName);
//     // setFullName((prev) => {
//     //   console.log(prev);

//     //   if (inputName === "fName") {
//     //     return {
//     //       fName: newValue,
//     //       lName: prev.lName,
//     //     };
//     //   } else if (inputName === "lName") {
//     //     return {
//     //       fName: prev.fName,
//     //       lName: newValue,
//     //     };
//     //   }
//     // });

//     //to use destructuring form to look modern
//     const { value, name } = event.target;
//     setFullName((prev) => {
//       console.log(prev);

//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: prev.lName,
//         };
//       } else if (name === "lName") {
//         return {
//           fName: prev.fName,
//           lName: value,
//         };
//       }
//     });

//     // if (inputName === "fName") {
//     //   setFullName({ fName: newValue });
//     // } else if (inputName === "lName") {
//     //   setFullName({ lName: newValue });
//     // }
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fullName.fName} {fullName.lName}
//       </h1>
//       <form>
//         <input
//           name="fName"
//           onChange={handleChange}
//           placeholde="What's your first name"
//           value={fullName.fName}
//         />

//         <input
//           name="lName"
//           onChange={handleChange}
//           placeholde="What's your last name"
//           value={fullName.lName}
//         />
//       </form>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import ClassComponent from "./ClassComponent";
// import FunctionalComponent from "./FunctionalComponent";

// class App extends React.Component {
//   render() {
//     return <ClassComponent />;
//   }
// }

// export default App;
// import React, { useState } from "react";
// function App() {
//   const [name, setName] = useState("");
//   const [heading, setHeading] = useState("");

//   function handleChange(event) {
//     console.log(event.target.value);
//     console.log(event.target.type);
//     console.log(event.target.placeholder);

//     setName(event.target.value);
//   }
//   function handleClick() {
//     setHeading(name);
//   }

//   return (
//     <div className="container">
//       <h1>Hello {heading}</h1>

//       <h1>DynamicIn {name}</h1>
//       <form>
//         <input
//           onChange={handleChange}
//           type="text"
//           placeholder="What's your name?"
//           value={name} //for single source of truth
//         />
//         <button onClick={handleClick}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";

// function App() {
//   const [headingText, setHeadingText] = useState("Hello");
//   const [mouseOver, setMouseOver] = useState(false);
//   // const [mouseOut, setMouseOut] = useState(false);
//   function handleClick() {
//     setHeadingText("Submitted");
//   }

//   function handleMouseOver() {
//     setMouseOver(true);
//   }

//   function handleMouseOut() {
//     setMouseOver(false);
//   }

//   return (
//     <div className="container">
//       <h1>{headingText}</h1>
//       <input type="text" />
//       <button
//         style={{ backgroundColor: mouseOver ? "black" : "white" }}
//         onClick={handleClick}
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//       >
//         onClic
//       </button>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";

// function App() {
//   setInterval(changeTime, 1000);
//   const newTime = new Date().toLocaleTimeString();
//   const [time, setTime] = useState(newTime);
//   function changeTime() {
//     // setTime = new Date().toLocaleTimeString;
//     const newTime = new Date().toLocaleTimeString();
//     setTime(newTime);
//   }

//   return (
//     <div className="container">
//       <h1>{time}</h1>
//       <button onClick={changeTime}>Get Time</button>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";

// function App() {
//   // var ct = 0;
//   const [count, setCount] = React.useState(0);
//   // console.log(state); // can see two arguments

//   function increase() {
//     setCount(count + 1);
//     // ct++;
//     // ReactDOM.render(
//     //   <div className="container">
//     //     <h1>{ct}</h1>
//     //     <button onClick={increase}>+</button>
//     //   </div>,
//     //   document.getElementById("root"),
//     // );
//   }
//   function decrease() {
//     setCount(count - 1);
//   }
//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

// export default App;
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
