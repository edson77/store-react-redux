import React from "react"
import Card from "./card"
const List = props => {
    const { data } = props
    return (
        <>
            <div className='col-sm'>
                <div className='row'>
                    {data.map( item => {
                        return (<Card key={item.ref} item={item} />)
                    } )}
                </div>
            </div>
        </>
    )
}

export default List