import React,{useState} from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPages/LoginPages.component'
import Homepage from './pages/Homepage/Homepage.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth=null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        }, () => {
          console.log(this.state)
        }); 
       
      }
      this.setState({ currentUser: userAuth });
    })
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render(){
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>

      {/* <LoginPage /> */}
      
    </div>
    );
  }
}

export default App;
