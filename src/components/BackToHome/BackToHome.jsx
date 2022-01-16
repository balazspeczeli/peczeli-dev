import Link from "next/link";

export const BackToHome = () => {
  return (
    <div>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
  );
};
