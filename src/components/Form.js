import React from 'react'

const Form = ({charge,amount,HandelCharge,HandelAmount,HandelSupmit,edit}) => {
  return (
     <form onSubmit={HandelSupmit}>
    <div className="form-center">
      <div className="form-group">
        <label htmlFor="expense">charge</label>
        <input
          type="text"
          className="form-control"
          id="charge"
          name="charge"
          placeholder="e.g. rent"
          value={charge}
          onChange={HandelCharge}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">amount</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          placeholder="e.g. 100"
          value={amount}
          onChange={HandelAmount}
        
        />
      </div>
      <button className='btnn' type='submit'>
       {edit=edit?"Edit" : "SUBMIT"}
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
    </form >
 
  )
}

export default Form