import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

function LinkResult() {
  const[shortenLink,setShortenLink] = useState("Hello World")
  const[copied,setCopied] = useState(false)
  return (
    <div className='result'>
      <p>{shortenLink}</p>
      <CopyToClipboard text={shortenLink} onCopy={()=>setCopied(true)}>
      <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
      </CopyToClipboard>
    </div>
  )
}

export default LinkResult
