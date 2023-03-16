import React from 'react';
import './ErrorsIndicator.css';

export default function ErrorsIndicator() {
  return (
    <div className='error-indicator'>
      <span className='boom' >BOOM</span>
      <span>something went terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  )
}

