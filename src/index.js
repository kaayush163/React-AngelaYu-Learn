import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";

// function Card(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img src={props.img} alt="avatar_img" />
//       <p>{props.tel}</p>
//       <p>{props.email}</p>
//     </div>
//   );
// }

// ReactDOM.render(
//   <div>
//     <h1>My Contacts</h1>
//     <Card
//       name="Beyonce"
//       img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//       tel="+123 456 789"
//       email="b@beyonce.com"
//     />
//     <Card
//       name="Jack Bauer"
//       img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
//       tel="+7387384587"
//       email="jack@nowhere.com"
//     />
//   </div>,
//   document.getElementById("root"),
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(
//   // <div>
//   //   <Heading />
//   //   <List />
//   // </div>,
//   <App />,
//   document.getElementById("root"),
// );

// ReactDOM.render(

//   document.getElementById("root"),
// );
// const food1 = "Bacon";
// const food2 = "Noodles";
// const food3 = "Jamon";
// const name = "Aayush";

// const customStyle = {
//   color: "red",
//   fontSize: "20px",
//   border: "1px solid black",
// };

// customStyle.color = "blue";
// // Bigegst reason why to want styling

// ReactDOM.render(
//   <div>
//     <h1 style={customStyle} className="heading">
//       {name} Favourite Foods
//     </h1>
//     <ul>
//       <li> {food1} </li>
//       <img
//         className="food-img"
//         alt="bacon"
//         src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
//       />
//       <img
//         className="food-img"
//         alt="jamon"
//         src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
//       />
//       <img
//         className="food-img"
//         alt="noodles"
//         src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
//       />
//       <li> {food2} </li>
//       <li> {food3} </li>
//     </ul>
//   </div>,
//   document.getElementById("root"),
// );
