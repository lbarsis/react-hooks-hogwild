import React, { useState } from "react";
import Nav from "./Nav";
import HogLists from "./HogLists";

import hogs from "../porkers_data";

function App() {
	const [hogsData, setHogsData] = useState(hogs)

	const filteredHogs = hogs.filter(hog => {
    return hog.greased === true
  })

	function handleFilter() {
		if (hogsData.length === hogs.length) {
			setHogsData(filteredHogs)
		} else {
			setHogsData(hogs)
		}
	}

	return (
		<div className="App">
			<Nav hogs={hogsData} onHandleFilter={handleFilter}/>
			<HogLists hogsData={hogsData} setHogsData={setHogsData}/>
		</div>
	);
}

export default App;
