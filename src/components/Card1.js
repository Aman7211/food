import React, { useEffect,useRef, useState } from 'react'
import {useDispatchCart, useCart} from './ContextReducer'

export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceoptions = Object.keys(options);
    const [qty,setqty] = useState(1);
    const [size,setsize] = useState("");


    const handleAddtocart = async ()=> {
        let food = []
        for(const item of data)
        {
            if(item.id === props.fooditem.id){
                food = item;
                break;
            }
        }
        if(food !==[]){
           if(food.size === size)
           {
           await dispatch({type: "UPDATE", id: props.fooditem.id, price: finalPrice, qty: qty})
           return
        }

        else if( food.size !== size ){
      await dispatch({type: "ADD", id: props.fooditem.id, name: props.fooditem.name, price: finalPrice, qty: qty, size: size})
         return
        }
        return
    }
    await dispatch({type: "ADD", id: props.fooditem.id, name: props.fooditem.name, price: finalPrice, qty: qty, size: size})
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setsize(priceRef.current.value)
    },[])

    return (

        <div className='m-2 row'>
            <div className="card m-3" style={{ "width": "18rem", "maxHeight": "500px" }}>
                <img src={props.fooditem.img} className="card-img-top" alt="..." style={{height:"230px", objectFit:"fill"}}/>
                <div className="card-body">
                    <h5 className="card-title text-dark font-weight-bold">{props.fooditem.name}</h5>
                    {/* <p className="card-text">{props.description}</p> */}
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success text-light rounded' onChange={(e) => setqty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 w-50 bg-success text-light rounded' ref={priceRef} onChange={(e) => setsize(e.target.value)}>
                          {priceoptions.map((data)=>{
                            return <option key={data} value={data}>{data}</option>
                          })}
                        </select>
                        <div className='d-inline h-100 fs-5 mx-5 font-weight-bold'>
                         ₹{finalPrice}/-
                        </div>
                        <hr/>
                        <button className='btn btn-success justify-center ms-2' onClick={handleAddtocart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            {/* <div className="card m-4" style={{ "width": "18rem", "maxHeight": "500px" }}>
                <img src={'/media/11.jpeg'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build tent.</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success text-light rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 w-50 bg-success text-light rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price :
                        </div>
                    </div>
                </div>
            </div>
            <div className="card m-4" style={{ "width": "18rem", "maxHeight": "500px" }}>
                <img src={'/media/11.jpeg'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build tent.</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success text-light rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-4 h-100 w-50 bg-success text-light rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price :
                        </div>
                    </div>
                </div>
            </div>
            <div className="card m-4" style={{ "width": "18rem", "maxHeight": "500px" }}>
                <img src={'/media/11.jpeg'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build tent.</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success text-light rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 w-50 bg-success text-light rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price :
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}
