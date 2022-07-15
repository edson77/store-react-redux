import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, removeFromCart } from "../lib/actions"
import { Link } from 'react-router-dom';
var _ = require('lodash');

const Row = ({item}) => {
    const itemData = item['item']
    const [qty, setQty] = useState(item['quantity'])
    const dispatch = useDispatch()
    const update = (item, quantity) =>{
        dispatch(updateCart(item, quantity))
    }
    const remove = (item) =>{
        dispatch(removeFromCart(item))
    }
    // useEffect(() =>{
    //     console.log(item)
    // })
    return (
        <>
            <tr>
                <td>
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + "/assets/images/" + itemData.category + "/"+itemData.image} alt="nom" title={itemData.nom} width="47" height="47" />
                    </a>
                </td>
                <td>
                    <a href="#">{itemData.ref} </a>
                </td>
                <td>
                    <p>€ {itemData.price}</p>
                </td>
                <td>
                    <span className="pro-qty1">
                        <button className="btn-dark qtybtn text-center"
                            onClick={() => {
                                if (qty > 1) {
                                    setQty(qty - 1)
                                    update(item, qty - 1)
                                }
                            }}>
                            -
                        </button>
                            { qty }
                        <button className="btn-dark qtybtn text-center"
                            onClick={() => {
                                setQty(qty + 1)
                                update(item, qty + 1)
                            }}>
                            +
                        </button>
                    </span>
                </td>
                <td className="price">€ {(qty * itemData.price).toFixed(2)} </td>
                <td className="text-center">
                    <a href="#" className="remove_cart" rel="2" onClick={() => remove(item)}>
                        <i className="fa fa-trash-o"></i>
                    </a>
                </td>
            </tr>
        </>
    )
}

const Table = ({items}) => {
    
    return (
        <>
            <table className="">
                <thead>
                    <tr>
                        <th width='150'>Product</th>
                        <th width='140'>Reference</th>
                        <th width='150'>Price</th>
                        <th width='150'>Quantity</th>
                        <th width='150'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map(item => <Row item={item}/>) }   
                </tbody>
            </table>
        </>
    )
}
const CartPage = () => {
    const items = useSelector(state => state.items)
    const [subTotal, setSubTotal] = useState(0.00)
    const [total, setTotal] = useState(0.00)
    const [shipping, setShipping] = useState(0.00)

    useEffect(() => {
        let totals = items.map(data => data.quantity * data.item.price)
        var sum = _.sum(totals);
        if(sum > 0){
            setShipping(3.00)
        }
        setSubTotal(sum)
        setTotal(subTotal + shipping)
    })
    return (
        <>
            <div className="row">
                <div className="col-sm">
                    <Table items={items}/>
                </div>
                <div className="col-sm-3" >
                    <div className="card border-sombre" style={{ maxWidth: 18 + 'rem' }}>
                        <div className="card-header bg-transparent border-sombre">Order Summary</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-8">
                                    <p className="card-title">Subtotal</p>
                                </div>
                                <div className="col-sm-4">
                                    <p className="card-title">{_.round(subTotal,2)} €</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <p className="card-title">Shipping</p>
                                </div>
                                <div className="col-sm-4">
                                    <p className="card-title">{_.round(shipping,2) } €</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <p style={{color: 'red'}} className=""> >>add coupon code </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent border-sombre">
                            <div className="row">
                                <div className="col-sm-8">
                                    <p className="card-title">Total</p>
                                </div>
                                <div className="col-sm-4">
                                    <p className="card-title">{_.round(total, 2)} €</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/checkout" style={{ position: 'relative', maxWidth: 18 + 'rem', top: 1 + 'px', marginTop: 0 }}
                    disabled={ _.isEmpty(items) ? 'true' : 'false'}
                     className=" btn btn-danger btn-md btn-block">
                        Checkout
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CartPage