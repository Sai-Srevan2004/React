import React from 'react'

const Card = ({ course }) => {
  return (
    <div className='card'>
     
        <img className='img' src={course.image.url} />
      
      <div className="title">
        <p>{course.title}</p>
      </div>
      <div className="desc">
        <p>{course.description.substr(0,100)}...</p>
      </div>


    </div>
  )
}

export default Card
