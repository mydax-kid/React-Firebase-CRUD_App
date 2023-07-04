import { db } from '../firebaseConfig.js'
import { collection, getDocs, getDoc,
        addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const colRef = collection(db, 'books')

class BookService {
  addBook = (newbook) => {
    return addDoc(colRef, newbook)
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "books", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(colRef);
  };

  getBook = (id) => {
    const docRef = doc(db, "books", id);
    return getDoc(docRef);
  };
}

export default new BookService();


// getAllBooks = () => {
//   const colRef = collection(db, 'books'); // Replace 'books' with your actual collection name
  
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onSnapshot(colRef, (snapshot) => {
//       const books = [];
      
//       snapshot.forEach((doc) => {
//         // Assuming each document contains a 'title' field
//         const book = {
//           id: doc.id,
//           title: doc.data().title
//         };
//         books.push(book);
//       });
      
//       resolve(books);
//     }, reject);
    
//     // Return the unsubscribe function to stop listening for changes
//     return unsubscribe;
//   });
// };
