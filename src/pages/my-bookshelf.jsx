import { Fragment } from "react";
import { BackToHome, Book, HorizontalLine, Icon, Layout } from "components";
import { getBooksRead, groupBooksByCategory } from "lib/books";
import categories from "content/bookshelf/categories.json";

const CategoryNavigation = ({ bookCategories }) => {
  if (bookCategories.length == 1) {
    return null;
  }

  return (
    <>
      Categories:{" "}
      {bookCategories.map((c, i) => (
        <Fragment key={c}>
          <a href={"#" + c}>{categories[c]}</a>
          {i < bookCategories.length - 1 ? ", " : "."}
        </Fragment>
      ))}
    </>
  );
};

const BookshelfPage = ({ booksByCategory }) => {
  const bookCategories = Object.keys(booksByCategory).sort();

  return (
    <Layout title="My bookshelf">
      <h2>My bookshelf</h2>
      <p>
        I have decided to have a public list of the books I read so that I can
        share my reviews and recommendations in one place and friends,
        colleagues, and maybe even random visitors will suggest me new ones to
        read.
      </p>
      <p>
        So, scroll through the list to have an idea of what I read and drop me a
        message with the titles you think I might like.
      </p>
      <p>
        The Hungarian flag <Icon src="icons/flags/hu.png" /> indicates that the
        book is written in Hungarian or that I have read a Hungarian
        translation.
      </p>
      <CategoryNavigation bookCategories={bookCategories} />
      {bookCategories.map((category) => (
        <Fragment key={category}>
          <h3 id={category}>{categories[category]}</h3>
          {booksByCategory[category].map((book) => (
            <Fragment key={book.title}>
              <HorizontalLine />
              <Book {...book} />
            </Fragment>
          ))}
        </Fragment>
      ))}
      <HorizontalLine />
      <BackToHome />
    </Layout>
  );
};

export async function getStaticProps() {
  const books = getBooksRead();
  const booksByCategory = groupBooksByCategory(books);

  return {
    props: {
      booksByCategory,
    },
  };
}

export default BookshelfPage;
