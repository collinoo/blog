import Layout from "./../../components/Layout";
import Post from "../../components/post/post";

const postTwo = () => {
  return (
    <Layout>
      <Post title={title} codeBlock={codeBlock} description={description} />
    </Layout>
  );
};

const title = "bash security";
const description =
  "Here we use a solid principle of 'locking' the doors behind as they say.";
const codeBlock = `
#!/bin/bash
echo "Hello World"

$ chmod a+x helloworld.sh
`;

export default postTwo;
