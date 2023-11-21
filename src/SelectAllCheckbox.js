import React from 'react'

const SelectAllCheckbox = ({ todos, handleSelectAll}) => {

const isAllChecked = todos.every((todo) => todo.completed);

  return (
    <div>
      <button onClick={handleSelectAll}>
      {isAllChecked ? "全解除" : "全選択"}
      </button>
    </div>
  )
}





export default SelectAllCheckbox;
