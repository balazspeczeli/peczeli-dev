import { Fragment } from "react";
import { BackToHome, Book, HorizontalLine, Icon, Layout } from "components";
import { getBooks } from "lib/books";

const BookshelfPage = ({ books }) => {
  return (
    <Layout title="My bookshelf">
      <>
        <h2>My bookshelf</h2>
        <p>
          I have decided to have a public list of the books I read so that I can
          share my reviews and recommendations in one place and friends,
          colleagues, and maybe even random visitors will suggest me new ones to
          read.
        </p>
        <p>
          So, scroll through the list to have an idea of what I read and drop me
          a message with the titles you think I might like.
        </p>
        <p>
          The Hungarian flag <Icon src="icons/flags/hu.png" /> indicates that
          the book is written in Hungarian or that I have read a Hungarian
          translation.
        </p>
        {books.map((book) => (
          <Fragment key={book.title}>
            <HorizontalLine />
            <Book {...book} />
          </Fragment>
        ))}
        <HorizontalLine />
        <BackToHome />
      </>
    </Layout>
  );
};

export async function getStaticProps() {
  const books = getBooks();

  return {
    props: {
      books,
    },
  };
}

export default BookshelfPage;
