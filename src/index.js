import React from "react";
import ReactDOM from "react-dom";

//Task
// const date = new Date(2019, 1, 1, 20);
const date = new Date();

const currentTime = date.getHours();
let greeting;
const customStyle = {
  color: "",
};
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good AFternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle} className="heading">
    {greeting}
  </h1>,
  document.getElementById("root"),
);
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
