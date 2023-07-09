import React from 'react';
import {  useSelector,useDispatch } from 'react-redux';

import {remove,empty} from '../redux/cartslice'



export default function Cart() {
    const dispatch=useDispatch();
    const cart = useSelector(state => state.cart);
    async function orderfood(e)
    {
        
        
      
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/orderfood", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ mail: localStorage.getItem('mail'),orderdata:cart,orderdate:new Date().toDateString()})
        })
        const data = await response.json();
        if(data.success)
        dispatch(empty())
    

       
    }
    
    if(cart.length===0)
    {
        return(
            <div>
                <div className='m-5 fs-3 text-center w-100'>The cart is empty!</div>
            </div>
        )
    }
    let totalprice=cart.reduce((total,item)=> total+item.finalprice,0);
    return (
        
        <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
            <table className='table table-hover '>
                <thead className=' text-success fs-4'>
                    <tr>
                        <th scope='col' >#</th>
                        <th scope='col' >Name</th>
                        <th scope='col' >Quantity</th>
                        <th scope='col' >Option</th>
                        <th scope='col' >Amount</th>
                        <th scope='col' ></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => {
                            return (
                                <tr>
                                    <th scope='row' >{index + 1}</th>
                                    <td >{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.size}</td>
                                    <td>{item.finalprice}</td>
                                    <td ><button type="button" className="btn bg-danger text-white p-0" onClick={() =>{ dispatch(remove({id:item.id,size:item.size}))}}>Delete</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div><h1 className='fs-2'>Total Price:{totalprice}</h1></div>
            <div>
                <button className='btn bg-success mt-5 ' onClick={orderfood} > Check Out </button>
            </div>
        </div>

    )
}
