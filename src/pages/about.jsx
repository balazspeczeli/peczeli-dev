import { Icon, Layout, HorizontalLine, BackToHome, Polaroid } from "components";
import accounts from "content/accounts.json";

const AboutPage = () => {
  return (
    <Layout title="About">
      <h2>About</h2>
      <p>
        I was born in 1987 in <Icon src="icons/flags/hu.png" />
        Hungary, a small country in Central Europe. Like many in my generation,
        I have started my journey into computer programming by making websites
        and simple video games during high school. Although I did a Liberal Arts
        degree at the University of Debrecen (Debrecen is Hungary's
        second-largest city), software development became my profession.
      </p>
      <p>
        This site was created to share my personal interests and hobby projects.
        My stack is mainly made up of web technologies (the triad of
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
      <h2>Some photos of me</h2>
      <Polaroid
        src="/images/about/photo-1.jpg"
        caption="In my natural habitat"
        rotateBy="0.5"
      />
      <Polaroid
        src="/images/about/photo-2.jpg"
        caption="Moments before dying of exhaustion during a 10k run"
        rotateBy="-0.5"
      />
      <Polaroid
        src="/images/about/photo-3.jpg"
        caption="In front of one of my previous workplaces*"
        rotateBy="0.5"
      />
      <p>
        * Taken at{" "}
        <a
          href="https://www.google.com/maps/@47.5239994,19.0383778,3a,75y,10.96h,84.19t/data=!3m6!1e1!3m4!1sUPLmJqARfXETwhYGV6u24g!2e0!7i16384!8i8192"
          target="_blank"
        >
          Óbuda Gate
        </a>
        when the building was temporarily used for shooting an episode of a
        television series
      </p>
      <HorizontalLine />
      <BackToHome />
    </Layout>
  );
};

export default AboutPage;
