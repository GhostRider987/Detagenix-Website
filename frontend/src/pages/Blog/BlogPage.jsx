import React from "react";
import BlogList from "../../components/Blogs/BlogList.jsx";
import { useEffect } from "react";

const BlogPage = () => {
     useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div >
      <BlogList />
    </div>
  );
};

export default BlogPage;
