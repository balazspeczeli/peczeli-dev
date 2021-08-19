import { Fragment } from "react";
import { Layout, Book, Introduction } from "components";
import { getBooks } from "lib/books";

const BookshelfPage = ({ books }) => {
  return (
    <Layout title="My bookshelf">
      <div>
        <h2>My bookshelf</h2>
        {books.map((book) => (
          <Fragment key={book.title}>
            <hr />
            <Book {...book} />
          </Fragment>
        ))}
        <hr />
        <Introduction />
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const books = getBooks();

  return {
    props: {
      books,
    },
  };
}

export default BookshelfPage;
