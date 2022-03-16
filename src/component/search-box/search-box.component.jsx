import React from 'react'
import './search-box.styles.scss'

const SearchBox = ({placeholder,handleChange}) => {
    return (
        <div>
            <input className="search-box" placeholder= {placeholder} onChange={handleChange}></input>
        </div>
    )
}

export default SearchBox