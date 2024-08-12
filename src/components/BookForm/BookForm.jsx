import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../../redux/features/books/bookSlice";

const BookForm = ({ bookToEdit, onCancel }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [bookToEdit]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(bookToEdit){
      dispatch(updateBook(book))
    }else{
      dispatch(addBook({ ...book, id: nanoid() }));
    }
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form Input</h1>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="title"
          className="border-2"
          required
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="author"
          className="border-2 ml-2"
          required
        />
        <br />
        <input
          type="number"
          name="price"
          value={book.price}
          onChange={handleChange}
          placeholder="price"
          className="border-2"
          required
        />
        <input
          type="number"
          name="quantity"
          value={book.quantity}
          onChange={handleChange}
          placeholder="quantity"
          className="border-2 ml-2"
          required
        />{" "}
        <br />
        <button type="submit" className="bg-gray-400 m-2 rounded p-1">
          {bookToEdit ? "Update Book" : "Add Book"}
        </button>
        {bookToEdit && <button onClick={onCancel} className="bg-gray-400 m-2 rounded p-1">Cancel</button>}
      </form>
    </>
  );
};
export default BookForm;
