import styles from "./post.module.css";

const Post = ({ title, codeBlock, description }) => {
  return (
    <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-100 md:text-3xl">
        {title}
      </h1>
      <p className={styles.font}>{description}</p>
      <figure className={styles.code}>
        <table>
          <tbody>
            <tr>
              <td name="code" style={{ paddingBottom: "1rem" }}>
                <pre>{codeBlock}</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
  );
};

export default Post;
