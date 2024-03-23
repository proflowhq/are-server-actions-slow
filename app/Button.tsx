'use client'

import { demoAction } from './_actions'

export function Button() {
  const handleClick = async (event: any) => {
    event.preventDefault()
    await demoAction()
  }

  return (
    <button onClick={handleClick} className="rounded-md bg-blue-500 px-4 py-2 text-white">
      Run a Server Action
    </button>
  )
}
