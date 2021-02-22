import Layout from "../../components/Layout";
import styles from "./index.module.css";
import BlogList from "../../components/blog/blogList";
import db from "./../../components/db/db";

import React, { Component } from "react";

export default class Blog extends Component {
  // async componentDidMount() {
  //   await fetch("/data.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return this.setState({ posts: data });
  //     });
  // }

  render() {
    const blogPost = db.map((p) => {
      return <BlogList key={p.id} title={p.title} route={p.route} />;
    });
    return (
      <Layout>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <div className="flex flex-col items-center justify-center mx-auto text-center">
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-300 md:text-5xl ">
              Featured Write-up
            </h1>
            <pre>
              <code className={styles.code}>function hello()</code>
            </pre>
            <p></p>
          </div>
          <ul className="flex flex-col w-full p-4 mx-auto mt-12">{blogPost}</ul>
        </div>
      </Layout>
    );
  }
}
