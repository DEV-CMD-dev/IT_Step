import React from 'react'

const Artist = ({info}) => {
  return (
    <>
      <div className='artist'>
        <img src={info.imageUrl}></img>
        <hr></hr>
        <h2>{info.name ?? "NoName"}</h2>
        <p>Year: {info.year ?? "NoName"}</p>
      </div>
    </>
  )
}

export default Artist