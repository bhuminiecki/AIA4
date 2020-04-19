import React from "react"
import ReactDOM from "react"

const Item = ({data, edit, remove}) => {
  const bindedEdit = edit.bind(
    {
      data: data
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
        <div>
          <img src={data.src}>
          </img>
        </div>
        <div>
          <p className="modelname">{data.model}</p>
          <p>Wyprodukowany: {data.year}</p>
          <p>Moc: {data.hp}</p>
          <p>Fajność: {data.coolFactor}</p>
          <button onClick={bindedEdit}>Edytuj</button>
          <button onClick={bindedRemove}>Usuń</button>
        </div>
      </div>
    </li>
  )
}

export default Item