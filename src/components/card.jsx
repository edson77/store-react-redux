import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../lib/actions"

const Card = ({ item }) => {
    return (
        <>
            <div className='col-sm-4'>
                <div className="card" style={{ width: 15 + "rem" }}>
                    <img className="card-img" src={process.env.PUBLIC_URL + "/assets/images/" + item.category + "/" + item.image} alt={item.ref} />
                    <div className="card-body">
                        <p className="card-text row">
                            <span className="col-sm-6">{item.name}</span>
                            <span className="col-sm-6">{item.price} €/{item.unit}</span>
                        </p>
                        <p className="card-text row">
                            <span className="col-sm-4"></span>
                            <span className="col-sm"><button type="button" data-toggle="modal" data-target={`#${item.ref}`} className="btn btn-warning">View Product</button></span>
                        </p>
                    </div>
                </div>
            </div>
            {/* introduction d'un modal */}
                <Modal item={item}/>
            
            {/* introduction d'un modal */}
        </>
    )
}

const Modal = ({item}) =>{
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const add = (item, quantity) =>{
        dispatch(addToCart(item, quantity))
    }
    return (
        <>
        {/*  Modal */}
        <div className="modal fade  bd-example-modal-lg" id={item.ref} tabindex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >{item.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-4">
                                <img className="card-img" src={process.env.PUBLIC_URL + "/assets/images/" + item.category + "/" + item.image} alt={item.name} />
                                </div>
                                <div className="col-sm">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <p className="prix">{item.price} €</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <span className="pro-qty1">
                                                <button
                                                    onClick={() => qty <= 1 ? 1 : setQty(qty - 1)}
                                                    className="btn-dark qtybtn text-center">-</button>
                                                        {qty}
                                                <button
                                                    onClick={() => setQty(qty + 1)}
                                                    className="btn-dark qtybtn text-center">+</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button
                                onClick={() => add(item, qty)}
                                data-dismiss="modal"
                             type="button" className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card