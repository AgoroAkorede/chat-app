import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPages/LoginPages.component'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
      </Routes>

      {/* <LoginPage /> */}
      
    </div>
  );
}

export default App;
