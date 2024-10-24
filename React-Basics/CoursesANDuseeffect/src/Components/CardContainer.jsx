import React from 'react'
import Card from './Card'


const CardContainer = ({courses,category}) => {
  
  let combinedData=[]

  Object.keys(courses).forEach(category => {
    courses[category].forEach(course => {
        combinedData.push({ ...course, category }); // Add category field dynamically
    });
});

 let filteredData=combinedData

 if(category!=="All"){
  filteredData=combinedData.filter((obj)=>{
    return obj.category===category
   })
 }

console.log(combinedData);

  return (
    <div className='card-container'>
        
      {

        filteredData.map((course)=>{
          return <Card key={course.id} course={course}></Card>
        })
      }
 
    </div>
  )
}

export default CardContainer
