
import './App.css';
import List from './components/List';
import Form from './components/Form';
import Alert from './components/Alert';
import {  useState } from 'react';
import { v4 as uuid } from 'uuid';
//list item
const StartList = [
  {id:uuid(),charge:'rent',amount:1400},
]

function App() {
 // state item 
 const [expense , setExpense] = useState(StartList)
 //state charge 
 const [charge , setCharge] = useState('')
 //state Amount 
 const [amount , setAmount] = useState('')
//state alert
 const [alert , setAlert] = useState({show:false}) 
//state edit 
const [edit , setEdit] = useState(false)
//state send edit  
const [id , setId] = useState(false)

//function charge 
 const HandelCharge = (e)=>{
  setCharge(e.target.value)
}
//function amount 
const HandelAmount = (e)=>{
  setAmount(e.target.value)
}
//function Delete all item
const HandelDelete = ()=>{
  setExpense([])
  setAlert({show:true,text:'all item deleted'})
  setTimeout(() => {
    setAlert({show:false,text:'Item deleted'})
  }, 3000);
 
}
//function Delete item
const HandelDeleteItem = (id)=>{
  const itemDelete = expense.filter((item)=>{
   return item.id !== id 
   
  })
  setExpense(itemDelete)
  setAlert({show:true,text:'Item deleted'})
  setTimeout(() => {
    setAlert({show:false,text:'Item deleted'})
  }, 3000);
 
}
//function edit item
const HandelEditItem = (id)=>{
  const findEdit = expense.find((item) =>{
    return item.id === id
  })
  const {charge , amount} = findEdit
  setCharge(charge)
  setAmount(amount)
  setEdit(true)
  setId(id)
  setAlert({show:true,text:'Can you edit item?'})
  setTimeout(() => {
    setAlert({show:false})
  }, 3000);
  
}
//function supmit
const HandelSupmit = (e)=>{
  e.preventDefault()
  if (charge != '' && amount > 0 ) {
    if(edit){
      let editItemExpense = expense.map((item)=>{
        return item.id ==id ?{...item,charge,amount} :item
      })
      setExpense(editItemExpense)
      setEdit(false)
    }else{
        const addExpense = {id:uuid(),charge:charge,amount:amount}
    setExpense([...expense,addExpense])
    }
    setCharge('')
    setAmount('')
    setAlert({show:false})
    
  }else{
    setAlert({show:true,text:'Item is empty Please fill in the fields'})
    setTimeout(() => {
      setAlert({show:false})
    }, 3000);
   
  }
}
  return (
   <div className='App'>
     <div className='container'>
       {alert.show && <Alert type={alert.type} text={alert.text}  />}
   
         <h1>budget calculator</h1>
            <main>
              <Form charge={charge}
               amount={amount}
                HandelCharge={HandelCharge} 
                HandelAmount={HandelAmount} 
                HandelSupmit={HandelSupmit}
                edit={edit}
                />
              <List expense={expense}
               HandelDelete={HandelDelete}
               HandelDeleteItem={HandelDeleteItem} 
               HandelEditItem={HandelEditItem} />
              
            </main>
          <h1>
            Amount :
            <span className='all-amount'>
              $
                {expense.reduce((prev,curr)=>{
                return  prev +parseInt(curr.amount) 
            },0)}
            </span>
            
          </h1>
     </div>
     
   </div>
     
      
    
  );
}

export default App;
