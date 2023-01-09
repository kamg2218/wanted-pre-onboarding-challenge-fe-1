import { Navigate, Route, Routes } from 'react-router'

import SignUp from './pages/SignUp'
import SignIn from './pages/SingIn'

import './assets/reset.css'

function App() {
  return (
    <Routes>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/' element={<Navigate to={'/signin'} />} />
      <Route path='*' element={<Navigate to={'/signin'} />} />
    </Routes>
  )
}

export default App
