import React from 'react'
import TemperatureTab from './TemperatureTab'
import PercipitationTab from './PercipitationTab'
import WindTab from './WindTab'
import '../../css/Tabs.css';
import useTabs from './hooks/useTabs'

export default function Tabs() { 
    const {
        tabKey,
        handleClick
    } = useTabs()
    console.log(tabKey);
    
  return (
    <div className='TabContainer' onClick={handleClick}>
        <TemperatureTab isEnabled={tabKey === 'Temperature'} />
        <PercipitationTab isEnabled={tabKey === 'Percipitation'} />
        <WindTab isEnabled={tabKey === 'Wind'} />
    </div>
  )
}
