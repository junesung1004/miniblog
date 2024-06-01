import React from "react";
import "./PostDetailPage.css";
import { useOutletContext } from "react-router-dom";

export default function PostDetailPage() {
  const { postContent, setPostContent, viewContent, setViewContent } = useOutletContext();

  console.log(postContent);

  return (
    <>
      <div className="post-detail-container">
        <h1>{viewContent.title}</h1>
        <p>{viewContent.content}</p>
      </div>
    </>
  );
}
