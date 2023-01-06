import React from "react";
import Navbar from "./navbar.jsx";
import Container from "./container.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return ( <>

		<Navbar/>
		<Jumbotron/>

		<div className="container text-center">
  <div className="row">
    <div className="col">
	<Card/>
    </div>
    <div className="col">
      <Card/>
    </div>
    <div className="col">
	<Card/>
    </div>
  </div>
</div>
	
		<Footer/>

		</>
	);
};

export default Home;

