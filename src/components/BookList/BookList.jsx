import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../redux/features/books/bookSlice";

const BookList = ({onHandleEdit}) => {
  const { books } = useSelector((state) => state.booksR);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (id)=> {
    onHandleEdit(id)
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-3"> List of Books </h1>
      {books && books.length > 0 ? (
        <ul>
          {books.map((book) => {
            return (
              <li key={book.id}>
                {book.title} by {book.author} $ {book.price} - {book.quantity}
                <span className="">
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="bg-gray-400 m-2 rounded p-1"
                  >
                    Delete
                  </button>
                  <button onClick={()=> handleEdit(book.id)} className="bg-gray-400 m-2 rounded p-1">Edit</button>
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Books exist</p>
      )}
    </>
  );
};
export default BookList;
