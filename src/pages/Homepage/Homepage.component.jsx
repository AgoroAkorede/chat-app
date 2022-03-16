import React,{useState,useEffect} from 'react'
import SearchBox from '../../component/search-box/search-box.component'
import Data from '../../data/data'
import UserItem from '../../component/users/users.component'

import CustomButton from '../../component/custom-button/custom-button'
import CircleButton from '../../component/circlebutton/circle-button'
import CreateChat from '../../component/create-chat/create-chat.component'
import FormInput from '../../component/form-input/form-input.component'
import Chat from '../../component/chat/chat.component'

// import WithSpinner from '../'

import './Homepage.styles.scss'

const Homepage = ({ isLoaded }) => {
    useEffect(() => {
        // fetchPage()
    },[])
    const [ users, setUsers ] = useState(Data.items);
    const [usersDefault,setUsersDefault]=useState()
    const [ search, setSearch ] = useState("");
    const [chat, setChat]=useState(false)
    const handleClick = () => {
        setChat(false)
        
    }

    const fetchData = async () => {
        return await fetch(Data)
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                setUsersDefault(data)
            });
    }

    const updateInput = async (search) => {
          const filterUsers=users.filter((user)=>{
            user.title.toLowerCase().includes(search.toLowerCase())       
          })
          setSearch(search);
          console.log(search);
        setUsersDefault(filterUsers);
    }
    // console.log(Data);

    useEffect(() => { fetchData() }, []);

    
    return (
        <div className="homepage"> 
        <div className="peoples-section">   
            <h1>Chat App</h1>
            <SearchBox placeholder="Search..." onSearchChange={ updateInput } />
           
            <div>
                {users.map(({title,imageUrl,id}) => (
                    <UserItem
                        users={users}
                        key={ id }
                        title={ title }
                        imageUrl={ imageUrl }
                    />
                    
                    ))}
                    
                </div>
                <div className="footer">
                <FormInput placeholder="Start a chat.." />
                    <CircleButton onClick={ handleClick }>+ </CircleButton>
             </div>
            </div>
            <div className="chats-section">
                <h1>emmanuel</h1>
                
                 <Chat /> 
              
            </div>

        </div>
    )
}

export default Homepage;