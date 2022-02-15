import React from 'react'

const Item = ({expense,HandelDeleteItem,HandelEditItem}) => {
  const {id ,charge ,amount} = expense
  return (
    <>
      <li key={id} className='item-expense'>
        <div className='name'>
          <span>{charge}</span>
        </div>
        <div className='amount'>
            <span>${amount}</span>
        </div>
        <div className='icon'>
        <i className="fa-solid fa-pencil" onClick={()=> HandelEditItem(id)}></i>
        <i className="fa-solid fa-trash" onClick={()=> HandelDeleteItem(id)}></i>

        </div>
      </li>
    </>
  )
}

export default Item