import React, { useContext, useState } from 'react';
import "../App.css"
import { Siva } from '../App'

function Phon() {
    const { siva } = useContext(Siva);

    const [iPhone, setIphon] = useState({}); 

    const sk = (phons, phon) => {
        setIphon({
            [phons]: phon,
        });
    };

    return (
        <div>
            {siva.products.map(val => (
                <div key={val.id} className='all'>
                    <div className='insidebox'>
                            <img src={val.thumbnail} alt={val.title} className='photo' />
                     <div className='info'><h2 className='title'>{val.title}</h2>
                        <p className=''>{val.description}</p></div>
                    </div>
                    <div className='right'>
                    <select className='selection'
                        onChange={(e) => sk(val.id, parseInt(e.target.value))}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </select>
                  
                        <h4 id='pi'>${val.price}</h4>
                        <p className='remove'>Remove</p>
                    
                    </div>
                    <hr />
                    <p className='left'>SUBTOTAL:</p> 
                    <span className='rightside'><h4>$ {val.price * (iPhone[val.id]) || val.price}</h4></span>
                    <p className='left'>SHIPPING:</p> 
                    <span className='rightside'><h4>FREE</h4></span>
                    <hr />
                    <p className='left'>TOTAL:</p> 
                    <span className='rightside'><h4>$ {val.price * (iPhone[val.id])||val.price}</h4></span>
                </div>
     
            ))}
        </div>
    );
}

export default Phon;