import React from "react";
import Filter from "./Filter";
import piggy from "../assets/porco.png";

const Nav = ( {onHandleFilter, onHandleSearch, searchHogs, onHandleSubmit} ) => {

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span><br></br>
			<Filter onHandleFilter={onHandleFilter} onHandleSearch={onHandleSearch} searchHogs={searchHogs} onHandleSubmit={onHandleSubmit} />
		</div>
	);
};

export default Nav;
