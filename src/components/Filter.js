function Filter({ onHandleFilter, onHandleSearch, searchHogs, onHandleSubmit }) {

  return (
    <div>
      <button onClick={onHandleFilter}>Filter for Greased Pigs</button>
      <form>
        <label>Search Hogs </label>
        <input value={searchHogs} onChange={onHandleSearch}></input>
      </form>
    </div>
  )
}

export default Filter