const Post = ({ title, date, content }) => (
  <section>
    <h2>{title}</h2>
    <div>{date}</div>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </section>
);

export default Post;
