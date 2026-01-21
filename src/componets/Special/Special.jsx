import React, { useContext } from 'react'
import { AssetContext } from '../FamailyTree/FamilyTree'

const Special = ({asset,name}) => {
   const newAsset = useContext(AssetContext);
    console.log('gold',newAsset)
  return (
    <div>
       <p>Special : {name}</p>
       <p>Assest : {asset}</p>
       <p> New Assest : {newAsset}</p>
    </div>
  )
}

export default Special