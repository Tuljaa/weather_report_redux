import { useState } from 'react'

export default function useTabs() {
    const [tabKey, setTabKey] = useState('Temperature')

    const handleClick = (event) => {
        if (event.target.id) {
          setTabKey(event.target.id)
        }
    };

  return {
    tabKey,
    handleClick
  }
}
