import React from 'react'

import Data from '../../data/data'
const UserItem = ({title,imageUrl }) => {
    return (
        <div>
          <img src={imageUrl}></img>
            <h1>{ title}</h1>
        </div>
    )
}
export default UserItem