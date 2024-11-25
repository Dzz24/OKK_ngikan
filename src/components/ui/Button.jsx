import React from 'react'

export default function Button({
    label,
    color,
    opacity,
    
}) {


  return (
    <>
      <button className={`${color} px-8 py-2 rounded-sm bg-opacity-${opacity} text-white `}>{label}</button>
    </>
  )
}
