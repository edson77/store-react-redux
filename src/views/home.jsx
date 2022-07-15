import React, {useState, useEffect} from 'react';
import List from '../components/List';

const SideMenu = ({ loadCategory, category }) => {
    const lists = ["Fruits", "Légumes", "Boissons"]
    return (
        <>
            <div className='col-sm-2 sidebar'>
                <ul>
                    {lists.map((link, index) => {
                        return (<li className={category == index ? 'active' : ''} key={index} onClick={() => loadCategory(index)}>{link}</li>)
                    })}
                </ul>
            </div>
        </>
    )
}


const Home = props => {
    const {loadCategory,category, isFiltering, filtered, data} = props
    return (
        <>
            <div className='row'>
                <SideMenu loadCategory={loadCategory} category={category} />
                <List data={isFiltering ? filtered : data[category]} category={category} />
            </div>
        </>
    )
}

export default Home