import React from 'react'

function InputShortener() {
  return (
    <div className='inputContainer'>
      <h1>URL <span>Shortener</span></h1>
      <div>
      <input type="text" placeholder='Place a link to shorten it' />
      <button>Shorten</button>
      </div>
    </div>
  )
}

export default InputShortener
