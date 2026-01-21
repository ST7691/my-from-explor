import React from 'react'
import Cousin from '../Cousin/Cousin'

const Uncle = () => {
  return (
    <div>
        <h3>Uncle</h3>
        <section className='flex'>
            <Cousin name={'jo joo'}></Cousin>
            <Cousin name={'tom joo'}></Cousin>
            <Cousin name={'jary'}></Cousin>
        </section>
    </div>
  )
}

export default Uncle