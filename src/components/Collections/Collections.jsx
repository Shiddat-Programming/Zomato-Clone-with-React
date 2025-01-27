import React from 'react'
import './Collections.css'

import CollectionData from './CollectionData'
import { Link } from 'react-router-dom'

const Collections = () => {
  return (
    <div>
   
    <h1 className='Colllection_heading'> Collections </h1>
     <div className="collectionDescr">
        <p>Explore curated lists of top restaurants, ca
            fes, pubs, and bars in Pune, based on trends</p>
            <Link>  All Locations in Pune    </Link>
     </div>

     <div className="collection_cards">
        {
CollectionData.map((elements)=>{

    return(

        <div className="collection_card">
        <img src={elements.colleImg} alt="" />
        <p> {elements.colleTitle}  </p>
        <p> {elements.collectPlaces} </p>
     </div>

    )
})

        }

         

        

        
           
     </div>



    </div>
  )
}

export default Collections