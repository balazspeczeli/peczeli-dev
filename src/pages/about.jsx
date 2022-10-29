import { Icon, Layout, HorizontalLine, BackToHome, Polaroid } from "components";
import accounts from "content/accounts.json";

const AboutPage = () => {
  return (
    <Layout title="About">
      <h2>About</h2>
      <Polaroid src="/images/about/photo-1.jpg" />
      <p>
        I was born in 1987 in <Icon src="icons/flags/hu.png" />
        Hungary, a small country in Central Europe. Like many in my generation,
        I have started my journey into computer programming by making websites
        and simple video games during high school. Although I did a Liberal Arts
        degree at the University of Debrecen, my interest in figuring out how
        things work and my love of tinkering eventually resulted in me becoming
        a software developer.
      </p>
      <p>
        This site was created to share my personal interests and hobby projects.
        My stack is mainly made up of web technologies (the triad of
        HTML-CSS-JavaScript), but in recent years I also got acquainted with
        Java, Python, and DevOps tools. For details on my experience and work
        history, please visit my <Icon src="icons/linkedin.svg" />
        <a href={accounts.linkedin.href} target="_blank">
          LinkedIn
        </a>{" "}
        profile.
      </p>
      <p>
        When not sitting in front of a computer, I enjoy cooking, hiking, and
        spending time with my family.
      </p>
      <HorizontalLine />
      <BackToHome />
    </Layout>
  );
};

export default AboutPage;
