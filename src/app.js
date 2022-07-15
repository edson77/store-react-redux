import React, {useState, useEffect} from 'react';
import { Routes,Route } from 'react-router-dom';
import CartPage from './views/cartPage'
import './style/bootstrap.min.css'
import './style/style.css'
import NavBar from './components/navbar';
import {data} from './data'
import Home from './views/home';
import Checkout from './views/checkout';

const App = props => {
    const { items, saveLocalStorage } = props
    const [category, setCategory] = useState(0)
    const [isFiltering, setIsFiltering] = useState(false)
    const [filtered, setFiltered] = useState(false)
    const [count, setCount] = useState(0)
    const loadCategory = (i) =>{
        setCategory(i)
    }
    const filterResult = (input) =>{
        const fullList = data.flat() //rassemble toutes les tableaux en un seul
        let results = fullList.filter( (item) =>{
            const name  = item.name.toLowerCase()
            const term = input.toLowerCase()
            return name.indexOf(term) > -1
        })
        setFiltered(results)
    }
    useEffect(() =>{
        saveLocalStorage(items)
    }, [items])

    return (
        <>

            <NavBar filter={filterResult} setIsFiltering={setIsFiltering} count={count} />
            {/*les routes*/}
            <div className='container'>
                <Routes>
                    <Route exact path='/' 
                    element={<Home category={category} data={data} loadCategory={loadCategory} isFiltering={isFiltering} filtered={filtered} count={count} />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </div>
        </>
    )
}

export default App