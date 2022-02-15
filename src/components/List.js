import React from 'react'
import Item from './Item'
const List = ({expense,HandelDelete,HandelEditItem,HandelDeleteItem}) => {
  return (
    <>
      <ul>
        {expense.map((expense)=>{
          return <Item key={expense.id}
           expense={expense}
           HandelEditItem={HandelEditItem}
           HandelDeleteItem={HandelDeleteItem} />
        })}
      </ul>
      {expense.length > 0 && <button className='btnn' onClick={HandelDelete}>
        clear item
        <i className="fa-solid fa-trash"></i>
        </button>}
      
    </>
  )
}

export default List