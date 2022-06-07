import Link from "next/link";

export const BackToHome = () => {
  return (
    <div>
      <Link href="/">
        <a>← Back to Home</a>
      </Link>
    </div>
  );
};
