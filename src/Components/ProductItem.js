import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './data.json';

function Productitem() {
    let { id } = useParams();
    let shoe = Shoes[id];

    if (!shoe) {
        return <h2>Product Not Found</h2>
    }
    return (
        <div>
        <h1 style={{textAlign:"center"}}>Product Item Page</h1>
        <div className="main">
            <div className="selectitem" >

                <h4>{shoe.name}</h4>
                <img src={shoe.img} alt="Shoes" style={{ width: "200px", height: "200px" }} />


            </div>
        </div>
        </div>

    )
}

export default Productitem;