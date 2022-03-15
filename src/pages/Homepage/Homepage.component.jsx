import React,{useState} from 'react'
import SearchBox from '../../component/search-box/search-box.component'
import Data from '../../data/data'
import UserItem from '../../component/users/users.component'


const Homepage = () => {
    const [ users, setUsers ] = useState(Data.items);

    return (
        <div>   
            <SearchBox placeholder="Search" />
            <div>
                {users.map(({title,imageUrl,id,size}) => (
                    <UserItem
                        key={ id }
                        title={ title }
                        imageUrl={imageUrl}
                        />
                    ))}
                    
            </div>

        </div>
    )
}

export default Homepage