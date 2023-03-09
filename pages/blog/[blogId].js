import React from "react";
import blog from ".";

const blogId = ({ blogs }) => {
  console.log(blogs);
  return (
    <div class="card">
      <div class="card-header">{blogs.title}</div>
      <div class="card-body">
        <h5 class="card-title">name: {blogs.userId}</h5>
        <p class="card-text">{blogs.body}</p>
      </div>
    </div>
  );
};

export default blogId;

export async function getStaticProps(context) {
  const id = context.params.blogId;

  const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blogs = await url.json();

  return {
    props: {
      blogs,
    },
  };
}

export async function getStaticPaths() {
  const url = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await url.json();
  const paths = await blogs.map((blog) => ({
    params: { blogId: blog.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
