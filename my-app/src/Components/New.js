import React, { useEffect, useState } from 'react'

const New = () => {

    const [search,setSearch]=useState("")
    const [display,setDisplay]=useState("")


    const fetch=(input)=>{
      return new Promise((resolve)=>{
resolve(input)
      },1000)
    }

    useEffect(()=>{
        const Time=setTimeout(()=>{
            if(search){
                fetch(search)
                .then((result)=>{
                  setDisplay(result)
                })
                .catch((err)=>{
                  console.log(err)
                })
            }
        },500)
        return()=>{
          clearTimeout(Time)
        }
    },[search])
  return (
    <div>
      <h1>Debouncing Search</h1>
      <input placeholder='Search here' type='text' onChange={((e)=>{
        setSearch(e.target.value)
      })}></input>

      <p>Search Output={display}</p>
    </div>
  )
}

export default New
