import React from 'react'

export default function Myorderscard(props) {
  return (
    <div className="card mt-3 m-3" style={{ "width": "18rem" }}>
    <img src={props.image} className="card-img-top" alt="..."  style={{"height":"120px","objectFit":"fill"}}/>
    <div className="card-body text-left">
        <h5 className="card-title m-3">{props.name}</h5>
        <p className="card-text ">{props.description.substring(0,44)}</p>
        
        <div className='text-center'>
        <div className='fs-5 btn btn-sm bg-success m-1 w-75'> Size:{props.size}</div>
        <div className='fs-5 btn btn-sm bg-success m-1 w-75'> Quantity:{props.quantity}</div>
        <div className='fs-5 btn btn-sm bg-success m-1 w-75'>price:{props.price}</div>
        </div>
    </div>
    </div>

  )
}
