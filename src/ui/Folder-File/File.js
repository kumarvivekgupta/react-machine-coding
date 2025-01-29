import React from 'react'
import './folders.css';

const File = ({item}) => {
  return (
    <div className='file'>📄 {item.name}</div>
  )
}

export default File