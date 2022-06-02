import { Icon } from "components";

export const CurrentlyReading = ({ currentlyReading }) => {
  if (currentlyReading.length === 0) {
    return null;
  }

  return (
    <>
      <p>Currently reading: </p>
      <ul>
        {currentlyReading.map(({ title, lang, author }) => (
          <li key={title}>
            {lang === "hu" && <Icon src="/icons/flags/hu.png" />}
            {title} ({author})
          </li>
        ))}
      </ul>
    </>
  );
};
