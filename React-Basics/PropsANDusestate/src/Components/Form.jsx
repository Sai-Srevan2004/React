import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const [newtitle,setTitle]=useState('')
    const [newdate,setDate]=useState('')

    function titlehandler(e){
        setTitle(e.target.value)
        console.log(e.target.value)
    }

    function datehandler(e){
        setDate(e.target.value)
        console.log(e.target.value)
    }

    function submithandler(e){
        e.preventDefault()
        
        let data={
            title:newtitle,
            date:newdate
        }
        
        //example for child to parent communication via prop functions
        props.printdata(data)

        setTitle('')
        setDate('')
    }
  return (
    <form onSubmit={submithandler} >
        <input onChange={titlehandler} type="text" placeholder='Enter product name' value={newtitle}/>
        <input onChange={datehandler} type="date" value={newdate}/>
        <input type="submit" />
    </form>
  )
}

export default Form
