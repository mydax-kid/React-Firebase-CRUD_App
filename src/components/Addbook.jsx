import { useState, useEffect } from 'react'
import BookService from '../services/book_services'

const Addbook = ({editStatus, setEditStatus, book, setBook}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isAvailable, setIsAvailable] = useState(false)
  const [ID, setID] = useState('')

  useEffect(() => {
    if (book.length < 1) return;
    setTitle(book[0].title)
    setAuthor(book[0].author)
    setID(book[0].id)
    setBook([])
  }, [editStatus])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (title === '' || author === '') {
      alert('Please fill out all fields')
      return;
    }

    if (editStatus) {
      const updatedBook = {
        title,
        author,
        status: isAvailable
      } 
      try {
        await BookService.updateBook(ID, updatedBook)
        alert('Book updated successfully')
        setEditStatus(false)
        setTitle('')
        setAuthor('')
        setIsAvailable(false)
      } catch (e) {
        alert(e.message )
      }
      return;
    }

    const newBook = {
      title,
      author,
      status: isAvailable
    }

    try {
      await BookService.addBook(newBook)
      alert('New Book Added')
    }
    catch (e) {
      alert(e.message)
    }

    setTitle('')
    setAuthor('')
    setIsAvailable(false)
  }

        const handleCancel = () => {
          setTitle('')
          setAuthor('')
          setIsAvailable(false)
          setEditStatus(false)
        }
  
  return (
    <div className= 'add-container'>
      <form onSubmit = {handleSubmit}>
        <input 
          type= 'text' 
          placeholder= 'Enter book title..' 
          value= {title} 
          onChange= {(e) => setTitle(e.target.value)}
          />
        <br></br>
        <input 
          type= 'text' 
          placeholder= 'Enter author name..' 
          value= {author} 
          onChange= {(e) => setAuthor(e.target.value)}
          />
        <br></br>
        <div>
          <input 
            type= 'checkbox' 
            checked = {isAvailable}
            onChange= {(e) => setIsAvailable(e.target.checked)}
            />
          <label>Available</label>
        </div>
        <br></br>
        <button type= 'Submit'>{editStatus ? 'EDIT' : 'ADD'}</button> 
        {
          editStatus ? <button className= 'cancel' onClick = {handleCancel}>CANCEL</button> : null
        }
      </form>
    </div>
  )
}

export default Addbook;