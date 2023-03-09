/* eslint-disable react/jsx-key */
import React from "react";
import Link from "next/link";

const blog = ({ blogs }) => {
  return (
    <div className="row">
      {blogs.map((blog, key) => (
        <div key={blog.id} className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{blog.title.slice(0, 10)}</h5>
              <p className="card-text">{blog.body.slice(0, 20) + "....."}</p>

              <Link href={`/blog/${blog.id}`} className="card-link">
                Lire cette article
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default blog;

export async function getStaticProps() {
  const url = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await url.json();
  return {
    props: {
      blogs,
    },
  };
}
