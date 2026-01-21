import React, { use } from 'react'
import { MoneyContext } from '../FamailyTree/FamilyTree'

const Friend = () => {
    const [money] = use(MoneyContext);
  return (
    <div>
        <h3>Friend: {money}</h3>

    </div>
  )
}

export default Friend