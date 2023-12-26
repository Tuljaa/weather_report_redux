import React from 'react'
import GraphComp from './GraphComp'

export default function WindTab({isEnabled}) {
  return (
    <>
      <div className={isEnabled ? '': 'disableTab'}> 
        <p className='tempWind' id='Wind'>Wind</p>
      </div>
      { isEnabled && <GraphComp tabSelected='wind' /> }
    </>
  )
}
