import { useState } from "react";
import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";

function App() {
  const [bookToEdit, setBookToEdit] = useState(null)

  const handleEdit = (book) => {
    setBookToEdit(book)
  }
  const handleCancelEdit = () => {
    setBookToEdit(null)
  }

  return (
    <>
      <div className="mx-auto">
        <BookForm bookToEdit={bookToEdit} onCancel={handleCancelEdit}/>
        <BookList onHandleEdit = {handleEdit}/>
      </div>
    </>
  );
}

export default App;
