import React from 'react'

import { useDispatch } from 'react-redux';
import {add,empty} from './redux/cartslice'

export default function Card(props) {
    const okeys=Object.keys(props.options);
   
    const [qty,setqty]=React.useState(1);
    const [size,setsize]=React.useState(okeys[0]);
    const dispatch=useDispatch();
    let price=qty*parseInt(props.options[size]);
    function addtocart(e)
    {
        e.preventDefault();
      dispatch(add({id:props.id,name:props.name,description:props.description,image:props.image,quantity:qty,size:size,finalprice:price}));
    }
    return (
        <div className="card mt-3" style={{ "width": "18rem" }}>
            <img src={props.image} className="card-img-top" alt="..."  style={{"height":"120px","objectFit":"fill"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description.substring(0,44)}</p>
                <div className='container w-100'>
                    <select className='m-2 h-100 bg-success rounded' onChange={(e)=>{setqty(e.target.value)}}>
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            }
                            )
                        }
                    </select>
                    <select className='m-2 h-100 bg-success rounded' onChange={(e)=>{setsize(e.target.value)}}>
                        {
                            
                            okeys.map((key)=>{
                                return(
                                    <option key={key} value={key}>{key}</option>
                                )
                            })
                        }
                    </select>
                    <div className='fs-5 d-inline'>{price}</div>
                </div>
            </div>
            <hr className='m-0' />
            <div className='text-center m-2'>
            <button className='btn bg-success text-dark w-50' onClick={addtocart}>add to cart</button>
    
            </div> 
        </div>
    )
}
