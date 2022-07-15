import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = ({filter,setIsFiltering, count}) => {

    const items = useSelector(state => state.items)
    return (
        <>
            <header>

                <nav className="navbar navbar-expand-lg navbar-light bg-light brand-color-header-bg">
                    <Link className="navbar-brand brand-color-header" to="/"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Mes Courses en ligne</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                onChange={(e) => {
                                    setIsFiltering(e.target.value.length > 0)
                                    filter(e.target.value)
                                }}
                            />
                        </form>
                        <Link className="link-decoration" to='/cart'>
                            <i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
                            <sup>
                                <span className="badge-panier badge badge-pill badge-success">{items.length}</span>
                            </sup>
                        </Link>

                    </div>
                </nav>

            </header>
            <br />
        </>
    )
}

export default NavBar