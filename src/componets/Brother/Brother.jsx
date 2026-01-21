import React, { use } from 'react'
import { MoneyContext } from '../FamailyTree/FamilyTree'

const Brother = () => {
    const[money,setMoney] = use(MoneyContext)
  return (
    <div>
        <h3>Brother</h3>
        <button onClick={()=>setMoney(money+100)}>add 100 tk</button>
    </div>
  )
}

export default Brother