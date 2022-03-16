import React from 'react'
import './user.styles.scss'

import Data from '../../data/data'
const UserItem = ({title,imageUrl, size }) => {
    return (
        <div>
            <button className="contact-container">
          <img className="contact-image" src={imageUrl} width={size}></img>
                <h2 className="contact-name">{ title }</h2>
                </button>
        </div>
    )
}
export default UserItem