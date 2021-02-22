import Layout from "./../../components/Layout";
import Post from "../../components/post/post";

const postOne = () => {
  return (
    <Layout>
      <Post title={title} codeBlock={codeBlock} description={description} />
    </Layout>
  );
};

const title = "Hello World";
const codeBlock = `
function helloWorld(name) {
  console.log("Hello my name is " + name)
}

helloWorld("Steven")
`;

const description =
  "This is a sample post where I created a helloWorld function to log my name to the console";

export default postOne;
