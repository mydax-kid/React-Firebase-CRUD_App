import { useEffect, useState} from 'react'
import BookService from '../services/book_services'

const Showbooks = ({editBook}) => {
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    getBooks()
  }, [])

  async function getBooks() {
    try {
      const res = await BookService.getAllBooks()
      setBooks(res.docs.map(item => ({...item.data(), id: item.id}) ))
      console.log('book fetch successful')
    }
    catch (e) {
      alert(e.message)
    }
  }

  async function handleEdit(id) {
    const newBook = books.filter(book => book.id === id)
    editBook(newBook)
  }

  
  async function handleDelete(id) {
    try {
      await BookService.deleteBook(id)
      console.log('book succefully deleted')
      getBooks()
    } catch (e) {
      alert(e.message)
    }
  }
  
  return(
    <div className= 'show-container'>
      <div class= 'refresh'>
        <button  onClick= {getBooks}>REFRESH</button>
      </div>
      <ul>
        {
          books.map((book, index) => (
            <li key= {book.id}>
              <p><span>Title: </span>{book.title}</p>
              <p><span>Author: </span>{book.author}</p>
              <p><span>Available: </span>{book.status ? 'true' : 'false'}</p>
              <div>
                <button onClick = {() => handleEdit(book.id)}>Edit</button>
                <button onClick = {() => handleDelete(book.id)}>Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Showbooks;