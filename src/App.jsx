import './App.css'
import {useState} from 'react'
import Addbook from './components/Addbook.jsx'
import Showbooks from './components/Showbooks.jsx'

export default function App() {
  const [editStatus, setEditStatus] = useState(false)
  const [book, setBook] = useState([])

  
  const editBook = (newBook) => {
    setBook([...newBook])
    setEditStatus(true)
  }
  
  return (
    <>
      <Addbook 
        editStatus= {editStatus} 
        setEditStatus= {setEditStatus}
        book = {book} 
        setBook= {setBook}
      />
      <Showbooks editBook = {editBook} />
    </>
  )
}
