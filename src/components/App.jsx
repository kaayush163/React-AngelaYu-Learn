import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

console.log(emojipedia);

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;

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
