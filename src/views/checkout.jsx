import React from "react"

//le hooks useSelector  acccede au state et à la propriete du state
const Checkout = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-8 offset-sm-2">
                    <br />
                    <h1 className="color" >Checkout</h1>
                    <br />
                    <form className="">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div> <br />
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="address" placeholder="Address" />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Postal Code" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="City" />
                            </div>
                        </div> <br />
                        <button type="button" class="btn btn-danger btn-md btn-block">Confirm</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Checkout