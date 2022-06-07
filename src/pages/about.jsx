import { Icon, Layout, HorizontalLine, BackToHome } from "components";
import accounts from "content/accounts.json";

const AboutPage = () => {
  return (
    <Layout title="About">
      <div>
        <h2>About</h2>
        <p>
          I was born in 1987 in <Icon src="icons/flags/hu.png" />
          Hungary, a small country in Central Europe. Like many in my
          generation, I have started my journey into computer programming by
          making websites and simple video games during high school. Although I
          have did a Liberal Arts degree at the University of Debrecen (Debrecen
          is Hungary's second-largest city), software development became my
          profession.
        </p>
        <p>
          This site was created to share my personal interests and hobby
          projects. My stack is mainly made up of web technologies (the triad of
          HTML-CSS-JavaScript), but in recent years I also got acquainted with
          Java, Python, and DevOps tools. For details on my experience and work
          history, please visit my <Icon src="icons/github.svg" />
          <a href={accounts.github.href} target="_blank">
            GitHub
          </a>{" "}
          and <Icon src="icons/linkedin.svg" />
          <a href={accounts.linkedin.href} target="_blank">
            LinkedIn
          </a>{" "}
          profiles.
        </p>
        <p>
          When not sitting in front of a computer, I enjoy cooking, hiking, and
          spending time with my family.
        </p>
        <p>
          Should you want to send me a message, feel free to reach out to me via
          email at <a href={accounts.email.href}>{accounts.email.text}</a>.
        </p>
        <HorizontalLine />
        <BackToHome />
      </div>
    </Layout>
  );
};

export default AboutPage;
