import "./styles.css"
import "./AddButton.js"
import AddButton from "./AddButton.js"
import DeleteButton from "./DeleteButton.js"
import EditButton from "./EditButton.js"

export default function App() {

  const grocertyItems = [
    { id: 1, item: "apples", cost: "$2.99", quantity: 5 },
    { id: 2, item: "bread", cost: "$3.99", quantity: 2 },
    { id: 3, item: "beans", cost: "$0.99", quantity: 4 },
    { id: 4, item: "onions", cost: "$1.89", quantity: 1 },
    { id: 5, item: "tomatoes", cost: "$0.50", quantity: 2 }
  ]
  return (
    <>
      <div className="header">Grocery List</div>
      <div>
        <table className="table">
          <tr className="row">
            <th>Item</th>
            <th>Cost</th>
            <th>Quantity</th>
          </tr>
          {grocertyItems.map((taco, index) => (
            <tr>
              <td>{taco.item}</td>
              <td>{taco.cost}</td>
              <td>{taco.quantity}</td>
            </tr>
            
          )
          )}

        </table>
      </div>
      <AddButton />
      <DeleteButton />
      <EditButton />
    </>
  )
}