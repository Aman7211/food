import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart, useDispatchCart } from '../components/ContextReducer';


export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3 text-danger'>The Cart is Empty !</div>
      </div>
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }
  // const apiUrl = "http://localhost:4000/api/orderData" || "https://food-lecp.onrender.com/api/orderData";
const apiUrl = process.env.REACT_APP_API_URL;
  
  const HandleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch(`${apiUrl}/api/orderData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    // console.log("Order Response : ", response.status);
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >S.No</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td >
                  <button type="button" className="btn p-0"> <Button endIcon={<DeleteIcon />}onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> 
                  </td></tr>
            ))}
          </tbody>
        </table>
        <div className='w-full max-w-md ml-auto '>
          <h2 className='bg-success text-white p-2 lgtext-'>Summary</h2>
          <div className='flex w-full py-2 text-lg-border-b'>
          </div>
          <div className='flex w-full d-flex py-2 text-lg-border-b'>
            <p style={{"fontWeight":"bolder","fontSize":"25px", "marginRight":"40px","color": "red"}}>Total Price : </p>
          <p className='ml-auto d-flex w-32 font-bold' style={{"fontWeight":"bolder","fontSize":"25px", "marginRight":"40px","color": "red"}}>{totalPrice}/-</p>    
      </div>
          <button className='btn bg-success mt-1 text-light ' onClick={HandleCheckOut} style={{"fontWeight":"500","fontSize":"20px",  "padding": "7px 10px",  "paddingRight":"70px", "marginBottom":"5px"}}> Proceed to Cash & Delivery </button>
       <div> <button className='btn bg-success mt-1 text-light ' onClick={HandleCheckOut} style={{"fontWeight":"500","fontSize":"20px",  "padding": "7px 10px",  "paddingRight":"70px", "marginTop":"5px"}}>Proceed to Online payment</button>
      </div></div>  
      </div>
      </div>
  )
}