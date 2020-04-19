import React from "react"
import ReactDOM from "react"

import Item from "./Item"
import ItemEditable from "./ItemEditable"

const List = ({items, setter}) => {
  console.log("rendered")

  const addCar = () => {
    const emptyItem = {
      src: "",
      model: "",
      year: "",
      hp: "",
      coolFactor: 0,
      editable: true
    }
    setter([ ...items, emptyItem ])
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
      <ul>{
          items.sort((a, b) => a.coolFactor < b.coolFactor).map((item, idx) =>
            item.editable ?
              <ItemEditable key={idx} data={item} save={saveCar} remove={removeCar}/>
            :
              <Item key={idx} data={item} edit={editCar} remove={removeCar}/>
          )
      }</ul>
    </div>
  )
}

export default List