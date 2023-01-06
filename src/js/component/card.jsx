import React from "react";
//create your first component
const Card = () => {
	return (
		
		<div className="card" style={{width: "18rem"}}>
		<img src="https://cristalderoca.com/senderismo/wp-content/uploads/2020/04/almendros-jucar-senderismo-destacada-500x325.jpg" className="card-img-top" alt="..."/>
		<div className="card-body">
		  <h5 className="card-title">Card title</h5>
		  <p className="card-text">Donec tortor elit, viverra nec erat vel, tempus malesuada elit. Phasellus egestas ligula sit amet diam tempor, et pellentesque mi imperdiet. Ut hendrerit nunc sit amet dapibus sagittis.. </p>
		  <a href="#" className="btn btn-primary">Go somewhere</a>
		</div>
	  </div>
		
	);
};

export default Card;