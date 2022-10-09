import React, { useState } from "react";
import Nav from "./Nav";
import HogLists from "./HogLists";

import hogs from "../porkers_data";

function App() {
	console.log(hogs)
	const [hogsData, setHogsData] = useState(hogs)
	return (
		<div className="App">
			<Nav />
			<HogLists hogs={hogsData}/>
		</div>
	);
}

export default App;
