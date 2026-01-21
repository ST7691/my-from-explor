import React from 'react'
import Special from '../Special/Special'
import Friend from '../Friend/Friend'

const Cousin = ({name,asset}) => {
  return (
    <div>
        <h3>{name}</h3>
        {
            name === 'rafsan'&& <Special asset={asset}></Special>
        }
        {
            name === 'jary' && <Friend></Friend>
        }
    </div>
  )
}

export default Cousin