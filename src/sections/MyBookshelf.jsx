import Link from "next/link";

const MyBookshelf = ({ currentlyReading }) => (
  <section>
    <h2>My bookshelf</h2>
    {currentlyReading.length !== 0 && (
      <>
        <p>Currently reading: </p>
        <ul>
          {currentlyReading.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </>
    )}
    <p>
      <Link href="/bookshelf">Check out my book reviews &rarr;</Link>
    </p>
  </section>
);

export default MyBookshelf;
