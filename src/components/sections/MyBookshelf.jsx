import Link from "next/link";

const CurrentlyReading = (currentlyReading) => {
  if (currentlyReading.length === 0) {
    return null;
  }

  return (
    <>
      <p>Currently reading: </p>
      <ul>
        {currentlyReading.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </>
  );
};

const MyBookshelf = ({ currentlyReading }) => (
  <section>
    <h2>My bookshelf</h2>
    <CurrentlyReading currentlyReading={currentlyReading} />
    <p>
      <Link href="/bookshelf">Check out my book reviews &rarr;</Link>
    </p>
  </section>
);

export { MyBookshelf };
