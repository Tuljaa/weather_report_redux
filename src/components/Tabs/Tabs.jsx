import React from 'react'
import TemperatureTab from './TemperatureTab'
import WindTab from './WindTab'
import '../../css/Tabs.css';
import useTabs from './hooks/useTabs'

const Tabs = () => { 
    const {
        tabKey,
        handleClick
    } = useTabs()

  return (
    <div className='TabContainer' onClick={handleClick}>
        <TemperatureTab isEnabled={tabKey === 'Temperature'} />
        <WindTab isEnabled={tabKey === 'Wind'} />
    </div>
  )
}

export default Tabs;
