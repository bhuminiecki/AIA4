import React, { useState } from "react"
import ReactDOM from "react"

import Item from "./Item"
import ItemEditable from "./ItemEditable"

const List = ({items, setter}) => {
  const [search, setSearchRaw] = useState("")
  const [sort, setSortRaw] = useState({
    key: "coolFactor",
    asc: false
  })

  const setSearch = (e) => {
    setSearchRaw(e.target.value);
  }

  let sortKeys = {
    coolAsc: {
      key: "coolFactor",
      asc: true
    },
    coolDesc: {
      key: "coolFactor",
      asc: false
    },
    modelAsc: {
      key: "model",
      asc: true
    },
    modelDesc: {
      key: "model",
      asc: false
    }
  }

  const setSort = (e) => {
    setSortRaw(sortKeys[e.target.value]);
    console.log(sort)
  }

  const addCar = () => {
    const emptyItem = {
      src: "",
      model: "",
      year: "",
      hp: "",
      coolFactor: 0,
      editable: true
    }
    setter([...items, emptyItem ])
  }

  function saveCar () {
    for (let x of Object.keys(this.inputs)) {
      this.data[x] = this.inputs[x]
    }
    this.data.editable = false
    setter([...items])
  }

  function editCar () {
    console.log(this.data)
    this.data.editable = true
    setter([...items])
    console.log(items)
  }

  function removeCar () {
    console.log(this.data)
    let newItems = items.filter(item => item.model !== this.data.model)
    setter(newItems)
  }

  return (
    <div>
      <button className="addButton" onClick={addCar}>
      Dodaj samochód
      </button>
      <input className="searchBar" placeholder="Search..." value={search} onChange={setSearch}></input>
      <select className="sortSelect" onChange={setSort}>
        <option value="coolDesc">Fajność malejąco</option>
        <option value="coolAsc">Fajność rosnąco</option>
        <option value="modelAsc">Nazwa rosnąco</option>
        <option value="modelDesc">Nazwa malejąco</option>
      </select>
      <ul>{
          items.sort(
            (a, b) => {
              if(sort.asc) return a[sort.key] > b[sort.key]
              else return a[sort.key] < b[sort.key]
            }).filter(item =>
              `${item.model}`
              .toUpperCase()
              .indexOf(search.toUpperCase()) !== -1
              || !search
            ).map(item =>
            item.editable ?
              <ItemEditable key={item.id} data={item} save={saveCar} remove={removeCar}/>
            :
              <Item key={item.id} data={item} edit={editCar} remove={removeCar}/>
          )
      }</ul>
    </div>
  )
}

export default List
