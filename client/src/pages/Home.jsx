import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostComp from "../components/PostComp";
import { getPosts } from "../store/slices/postSlice";

export default function Home() {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  console.log(posts);
  return (
    <>
      <div className="container">
        {posts.map((post) => (
          <PostComp key={post._id} post={post}></PostComp>
        ))}
      </div>
    </>
  );
}
