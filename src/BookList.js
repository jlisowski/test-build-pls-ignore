import metadata from './metadata.js';
import Book from './Book.js';

const BookList = () => {
    return (
        <><h1 className="bookListTitle">Best Sellers!</h1>
        <section className="bookList">
            {
                metadata.map((book, index) => {
                    return <Book {...book} key={'book'+book.id} number={index} />
                })
            }
        </section></>
    )
};

export default BookList