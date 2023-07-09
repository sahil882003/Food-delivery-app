import React from 'react'
import { useEffect } from 'react'

import Myorderscard from '../Myorderscard';
export default function Myorders() {
     const [keys,setkeys]=React.useState([]);
     const [orders,setorders]=React.useState({});
     
     
    async function fetchorderdata() {
        var result = await fetch('http://localhost:5000/api/fetchorderdata', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mail: localStorage.getItem('mail') })
        });
        result=await result.json();
        setorders(result.data);
       
        setkeys(Object.keys(result.data));
        
        
       
        
    }
    useEffect(()=>{
        
        fetchorderdata();
        
    },[])
    
    return (
       
        <div className='container'>
        
      
        {
          
          
          (keys !== [] ) ?
            keys.map((key) => {
              return (


                <div className='row mb-3'>
                  <div key={key} className='fs-3 m-3'>{key}</div>
                  <hr />
                  {
                    
                    (orders[key] !== []) ?
                      orders[key].map((item)=>{
                        return(
                            <Myorderscard key={item.id} name={item.name} description={item.description} image={item.image} size={item.size} quantity={item.quantity} price={item.finalprice} />
                        )
                      }):

                      <div key='Loading screen'>No orders placed</div>

                  }
                </div>

              )
            }) :
            <h1 key="loading .screen">Loading...</h1>
        }
       
      </div>

  )
}
