// Write your code here
import './index.css'

const TodoItem = props => {
  const {Item, onDelete} = props
  const {id, title} = Item
  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="item">
      <p className="title">{title}</p>
      <div>
        <button onClick={onDeleteItem} className="btn">
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
