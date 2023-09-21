import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

export default function Home() {
   
    return (
        <div>
            <h1>Home</h1>
            <Link to="/todo">todo</Link>
        </div>

    );

}


//<div class="w3grayscale">
//<div class="allContent">
//<div class="w3-half">
// <img src="exemple.png">
//  <img src="exemple.png">
//   <img src="exemple.png" >
 //   <img src="exemple.png" >
 //   <img src="exemple.png" >
 //   <img src="exemple.png" >
//</div>

//<div class="w3-half">
 //   <img src="exemple.png" >
  //  <img src="exemple.png" >
   // <img src="exemple.png" >
   // <img src="exemple.png" >
   // <img src="exemple.png" >
  //  <img src="exemple.png" >
//</div>
//</div>
//<!-- End Page Content -->
//</div>
