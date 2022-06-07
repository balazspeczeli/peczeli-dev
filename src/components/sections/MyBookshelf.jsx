import Link from "next/link";
import { CurrentlyReading } from "components";

export const MyBookshelf = ({ currentlyReading }) => (
  <section>
    <h2>My bookshelf</h2>
    <CurrentlyReading currentlyReading={currentlyReading} />
    <p>
      <Link href="/my-bookshelf">Check out my book reviews &rarr;</Link>
    </p>
  </section>
);
