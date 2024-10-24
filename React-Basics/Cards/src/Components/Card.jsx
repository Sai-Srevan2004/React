import React, { useState } from 'react'


const Card = (props) => {
   
    const [showMore,setShowMore]=useState(false)

    let desc=showMore?props.z.info:props.z.info.substring(0,190)
    return (
        <div class="card">
            <img src={props.z.image} alt="Card Image" class="card-image" />
            <div class="card-content">
                <div class="card-section">{props.z.price}</div>
                <div class="card-section">{props.z.name}</div>
                <div class="card-section">{desc}<span onClick={()=>setShowMore((prev)=>!prev)} style={{color:'blue',cursor:'pointer'}}>{showMore?'...showless':'...showmore'}</span></div>
                <button class="card-button">Not Interested</button>
            </div>
        </div>
    )
}

export default Card


