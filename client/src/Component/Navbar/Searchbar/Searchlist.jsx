import React from 'react'
import { FaSearch } from "react-icons/fa"
import './Searchlist.css'

const Searchlist = ({Titlearray,setsearchquery}) => {
  return (
    <>
        <div className="Container-SearchList">
            {Titlearray.map(m=>{
                return <p key={m} onClick={e=>setsearchquery(m)} className='titleitem'>
                    <FaSearch/>{m}
                </p>
            })
            }
        </div>
    </>
  )
}

export default Searchlist
