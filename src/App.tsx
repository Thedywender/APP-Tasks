import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import AddTodo from './pages/AddTodo'

function App() {

  return (
    <>
      <Routes>
        <Route path="/todo/add" element={<AddTodo />} />
        <Route path="/todo" element={<AddTodo />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
