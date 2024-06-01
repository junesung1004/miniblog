import React, { useContext, useEffect, useReducer, useState } from "react";
import "./PostListPage.css";
import { Link, useLocation, useOutletContext } from "react-router-dom";

export default function PostListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <>
      <div className="post-list-container">
        {posts.length > 0 ? (
          posts.map((post, idx) => (
            <div key={idx}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>글 목록이 없습니다.</p>
        )}
      </div>
    </>
  );
}
