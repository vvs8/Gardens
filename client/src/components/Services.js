import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './css/Services.css';

let services = {
    "services":[
        {"name":"Lawn Mowing", "text":"+ Edging", "link":"/services/lawn-mowing","img":"images/mower_s.jpeg", "category":["Garden", "Landscaping"]},
        {"name":"Trimming", "text":"Shrubs, Hedges, Trees ...", "link": "/services/trimming","img":"images/trim_s.jpeg", "category":["Garden", "Landscaping"]},
        {"name":"Power Rake", "text":"Better do it in Spring or Fall", "link":"", "img":"", "category":["Landscaping"]}
    ]
}

const Services= () => {
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState('')

    useEffect(() => {
        setItems(services.services) 
    }, [])

    function filter(c, w){
        const filter_item = (element) => element === c;
        switch(w){
            case 0:
                setItems(services.services)
                break;
            case 1:
                const A = []
                for (var i=0; i <items.length; i++) {
                    if (items[i].category.some(filter_item))
                        A.push(items[i]);
                }
                setItems(A)
                break;
        } 
    }

    const SCard = ({props}) => {
        return (
            <div className="c_card">
                <Link className='card_link' to={props.link}>
                    <img src={props.img}  className='c_image' >
                    </img>
                    <div className="c_container">
                    <h4><b>{props.name}</b></h4>
                    <p>{props.text}</p>
                    </div>
                    <Button variant="success" size="sm">Request</Button>      
                </Link>
            </div>  
        )
    }
  
    return (
        <>
        <h1>Our Services</h1>
        <div className='c_grid-container'>
        <button onClick={()=>filter("Garden", 1)}>
            'G'
        </button>
        <button onClick={()=>filter("", 0)}>
            'G'
        </button>
            

            
                {items.map((p, i) => (
                        <SCard
                        key={i}
                        props={p}
                        
                    />
                   
                ))}
            
        
            
        </div>
        <br></br>
        <br></br>
        <br></br>

        </>

        
        
    );
};

export default Services;