import React, { useState } from "react";
import Nav from "./Nav";
import HogLists from "./HogLists";

import hogs from "../porkers_data";

function App() {
	const [hogsData, setHogsData] = useState(hogs)
	const [searchHogs, setSearchHogs] = useState('')

	function handleInput(e) {
		setSearchHogs(e.target.value)
		const filteredHogs = hogs.filter(hog => {
			return hog.name.includes(searchHogs)
		})
		setHogsData(filteredHogs)
	}

	function handleFilter() {
		const filteredHogs = hogs.filter(hog => {
			return hog.greased === true
		})

		if (hogsData.length === hogs.length) {
			setHogsData(filteredHogs)
		} else {
			setHogsData(hogs)
		}
	}

	return (
		<div className="App">
			<Nav hogs={hogsData} onHandleFilter={handleFilter} onHandleSearch={handleInput} searchHogs={searchHogs} />
			<HogLists hogsData={hogsData} setHogsData={setHogsData} />
		</div>
	);
}

export default App;
