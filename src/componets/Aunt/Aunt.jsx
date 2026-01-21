import React from 'react'
import Cousin from '../Cousin/Cousin'

const Aunt = ({asset}) => {
  return (
    <div>
        <h3>Aunt</h3>
        <section className='flex'>
            <Cousin asset={asset} name={'rafsan'}></Cousin>
            <Cousin name={'hasan'}></Cousin>
        </section>
    </div>
  )
}

export default Aunt