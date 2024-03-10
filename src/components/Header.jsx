import React from 'react'

const Header = () => {
  return (
    <div className='h-16 px-5 border-b border-black items-center flex justify-between text-xl'>
    <h2>LearnGit</h2>
    <div className='flex gap-4 mr-5'> 
      <h3>Bounty</h3>
      <h3>Devs</h3>
      <h3>Docs</h3>
      <h3>About</h3>
    </div>
    </div>
  )
}

export default Header
