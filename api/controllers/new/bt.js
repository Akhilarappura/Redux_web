import React, { useState } from 'react'

const bt = () => {

    const[color,setcolor]=useState()
    color='orange'
        function handle(){
            setcolor
        }
     
  return (
    <div>

        <button onChange={handle}>button</button>
    </div>
  )
}

export default bt