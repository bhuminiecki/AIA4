import React, { useState } from "react"
import ReactDOM from "react"



const ItemEditable = ({data, save, remove}) => {
  const [inputs, setInputsRaw] = useState({})

  const setInputs = (e) => {
    const target = e.target
    setInputsRaw({ ...inputs, [target.name]: target.value })
    console.log(inputs)
  }

  const bindedSave = save.bind(
    {
      data: data,
      inputs: inputs
    }
  )
  const bindedRemove = remove.bind(
    {
      data: data
    }
  )
  return (
    <li>
      <div className="item">
        <div className="imageEdit">
          <label>URL zdjęcia: </label>
          <input name="src" type="text" value={inputs.src || data.src} onChange={setInputs}></input>
        </div>
        <div className="infoBox">
          <label className="modelname">Model: </label>
          <input name="model" type="text" value={inputs.model || data.model} onChange={setInputs}></input>
          <label>Wyprodukowany: </label>
          <input name="year" type="number" value={inputs.year || data.year} onChange={setInputs}></input>
          <label>Moc: </label>
          <input name="hp" type="number" value={inputs.hp || data.hp} onChange={setInputs}></input>
          <label>Fajność: </label>
          <input name="coolFactor" type="number" value={inputs.coolFactor || data.coolFactor} onChange={setInputs}></input>
          <button onClick={bindedSave}>Zapisz</button>
          <button onClick={bindedRemove}>Usuń</button>
        </div>
      </div>
    </li>
  )
}

export default ItemEditable