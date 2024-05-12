import React, { useEffect, useState } from "react";
import styles from "./BlogPage.module.css";
import supabase from "../../client.js";
import Modal from "./Modal/Modal.js";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPost(null);
  };

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const { data, error } = await supabase.from("Posts").select("*");
      if (error) throw error;
      if (data != null) {
        setPosts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className={styles.blogPage}>
      <h1 className={styles.title}>Blog Posts</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ borderLeft: `4px solid ${post.color}` }}
          className={styles.post}
          onClick={() => openModal(post)}
        >
          <h1 style={{fontSize: 25}}>{post.title}</h1>
          <h1 style={{fontSize: 15, fontWeight: 400}}>
            {
              post.created_at.substring(0, 10)
            }
          </h1>
        </div>
      ))}
      {isOpen && selectedPost && (
        <Modal title={selectedPost.title} content={selectedPost.content} closeModal={closeModal} />
      )}
    </div>
  );
}

export default BlogPage;
