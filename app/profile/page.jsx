"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  //EDIT
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  //DELETE
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete this creative idea?`
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => {
          return p._id !== post._id;
        });
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user?.id}/posts`);
      const data = await res.json();
      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);
  console.log(session?.user?.id);
  return (
    <Profile
      name="My"
      desc="Welcome to your imaginative creations page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
