import { useState } from 'react'

export default function useTabs() {
    const [tabKey, setTabKey] = useState('Temperature')

    const handleClick = (event) => {
        setTabKey(event.target.id)
    };

  return {
    tabKey,
    handleClick
  }
}
