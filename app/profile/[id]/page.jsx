"use client";
import { useState, useEffect } from "react";
import Profile from "./Profile";
import { useSearchParams } from "next/navigation";

const UserProfile = ({ params }) => {
  const seachParams = useSearchParams();
  const userName = seachParams.get("name");
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${params?.id}/posts`);
      const data = await res.json();

      setUserPosts(data);
    };
    if (params?.id) fetchPosts();
  }, [params?.id]);
  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
