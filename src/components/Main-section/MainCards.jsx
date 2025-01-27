import React from 'react'
import './MainCards.css'
import MainCardData from './MainCardData'

const MainCards = () => {
  return (
    <div>

      <div className="card_parent">
          
             {     

MainCardData.map((elements,index,arr)=>{

     return(


      <div className="card">
      <img src={elements.cardImgs} alt="" />
      <h3> {elements.carttitle} </h3>
      <p> {elements.card_descrption} </p>
   </div>

     )


})   

                 
             }
           
        

           



      </div>

    </div>
  )
}

export default MainCards