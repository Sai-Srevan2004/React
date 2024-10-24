import React from 'react'

const Filterdiv = (props) => {
  return (
    <div className='filter-data'>
       {
        props.filterData.map((btn)=>{
          return <button onClick={()=>props.setCategory(btn.title)} key={btn.id} className={`filter-btn ${props.category===btn.title?'active':''}`}>{btn.title}</button>
        })
       }
    </div>
  )
}

export default Filterdiv
