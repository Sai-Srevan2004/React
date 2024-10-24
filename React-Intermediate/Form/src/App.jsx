import React, { useState } from 'react'

const App = () => {

  const [data,setData]=useState({namee:"",email:"",isOk:false,mode:'',favCar:''})

  function submitHandler(e)
  { e.preventDefault()
    console.log(data)
  }

  // function changeHandler(e){
  //     setData((prev)=>{
  //       return {
  //         ...prev,[e.target.name]:e.target.value
  //       }
  //     })
  // }


  function changeHandler(e){
    const {name,value,checked,type}=e.target
    setData((prev)=>{
      return {
        ...prev,[name]:type==='checkbox'?checked:value
      }
    })
}

  return (
    <div>
      <h1>Form</h1>
      <br />
      <br />
        <form  onSubmit={submitHandler}>
          name
            <input onChange={changeHandler} type="text" placeholder='name' name='namee' value={data.namee} />
            <br />
            <br />
            email
            <input onChange={changeHandler} type="text" placeholder='email'  name='email' value={data.email}/>
            <br />
            <br />
            is it ok?<input name='isOk' onChange={changeHandler} checked={data.isOk} type="checkbox" />
            <br />
            <br />
           <fieldset>
             <legend style={{textAlign:'center'}}>Mode:</legend>
             online
            <input onChange={changeHandler} value='online' name='mode' type="radio" checked={data.mode==='online'} />
            offline
            <input onChange={changeHandler} value='offline' name='mode' type="radio" checked={data.mode==='offline'} />

           </fieldset>
           
           <select name="favCar"  onChange={changeHandler} value={data.favCar}>
            <option >Swift</option>
            <option >Baleno</option>
            <option >city</option>
            <option >verna</option>
           </select>

           <button>Submit</button>
        </form>
    </div>
  )
}

export default App
