import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {add,remove} from '../Redux/Slices'

const Card = ({dt}) => {

    const dispatch=useDispatch()
    const st=useSelector((state)=>state.cart)

    const handleAddToCart=(dt)=>{
         dispatch(add(dt))
    }

    const handleRemoveCart=(id)=>{
        dispatch(remove(id))
    }


  return (
    <div>
      <p>{dt.title}</p>
      <p>{dt.description}</p>
    <div className="img">
    <img src={dt.image} alt="" />
    </div>

    <div className="price-btn">
        <p>{dt.price}</p>
        { 
          !st.some((a)=>a.id===dt.id)?
            <button className="cart-btn" onClick={()=>handleAddToCart(dt)}>Add to cart</button>
            :<button className="cart-btn" onClick={()=>handleRemoveCart(dt.id)}>Remove from cart</button>
        }
    </div>

    </div>
  )
}

export default Card
