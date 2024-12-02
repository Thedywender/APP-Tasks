import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import AddTodo from './pages/AddTodo'
import TodoList from './pages/TodoList'

function App() {

  return (
    <>
      <Routes>
        <Route path="/todo/add" element={<AddTodo />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
