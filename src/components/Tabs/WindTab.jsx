import React from 'react'
import GraphComp from './GraphComp'

export default function WindTab({isEnabled}) {
  return (
    <div className='tabPanes'>
      <div className={isEnabled ? '' : 'disableTab'} id='Wind'> 
        Wind 
        <div className='borderBottomLine'></div>
      </div>
      { isEnabled && <GraphComp tabSelected='wind' /> }
    </div>
  )
}
