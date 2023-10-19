import React from 'react'

export default function Button(props) {
  const {label, type} = props;

  return (
    <button className='p-3 bg-neutral-500 rounded-xl px-6 text-white font-bold'
    type={type}
    >
      {label}
  </button>
  )
}
