import { useState } from 'react'
import { DarkIcon, LightIcon } from '../../assets'

const Toggle = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <button
      type="button"
      onClick={() => {
        setEnabled(!enabled)
      }}
      className="flex items-center justify-center group w-full h-16 mt-auto bg-gray-200 dark:bg-gray-800 hover:text-darkPrimary dark:hover:bg-darkPrimary dark:hover:text-primary hover:bg-primary"
    >
      <span className="sr-only">Use setting</span>
      {enabled ? <LightIcon /> : <DarkIcon />}
      <span className="sidebar-tooltip group-hover:scale-100">{enabled ? "Dark" : "Light"  }</span>
    </button>
  )
}

export default Toggle
