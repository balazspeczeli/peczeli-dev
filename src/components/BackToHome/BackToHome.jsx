import Link from "next/link";

const BackToHome = () => {
  return (
    <div>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
  );
};

export default BackToHome;
