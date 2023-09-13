const Book = (props) => {
    let {img, title, author, number} = props;
    return(
        <article className='book'>
            <span>{`#${number + 1}`}</span>
            <img
                src={img}
                alt='Avatar'
            />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
};
export default Book