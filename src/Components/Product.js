import React from 'react';
import Shoes from './data.json';
import {Link} from 'react-router-dom';


function Product(){
    
    return(
<div className="product">
    {Object.keys(Shoes).map((v,i)=>{
        return (
            
            <Link key={i} className="link" to={`/productitem/${v}`}>
                   
                   <h4>{Shoes[v].name}</h4>
                   <img src={Shoes[v].img} alt="Shoes" style={{width:"200px",height:"200px"}} />
                   

            </Link>
            
        )
    })}
</div>
    )
}

export default Product;