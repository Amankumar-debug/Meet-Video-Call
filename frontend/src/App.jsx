
import './App.css'
import Home from './pages/Home'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Authentication from './pages/Authentication'
import { AuthProvider } from './contexts/Authcontext'
import VideoMeet from './pages/VideoMeet'
import History from './pages/History'

function App(){
  return (
    <>
      <Router>

      <AuthProvider>

        <Routes>
          
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/auth' element={<Authentication/>}/>
       <Route path='/home' element={<Home/>}/>
      
       <Route path='/history' element={<History/>}/>
       <Route path='/:url' element={<VideoMeet/>}/>
        </Routes>
        
        </AuthProvider>
      </Router>
    </>
  )
}


export default App
