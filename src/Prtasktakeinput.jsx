import React from 'react'

const Prtasktakeinput = (props) => {
  return (
    <div>{props.value.map((currentVal, index)=>{
        return <div key={index}>{`${currentVal} --> ${index}`} </div>
    })}</div>
  )
}

export default Prtasktakeinput