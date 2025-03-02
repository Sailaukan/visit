import React, { useEffect, useState } from "react";
import styles from "./BlogPage.module.css";
import supabase from "../../client.js";
import Modal from "./Modal/Modal.js";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setLoading(true);
      const { data, error } = await supabase.from("Posts").select("*").order('created_at', { ascending: false });
      if (error) throw error;
      if (data != null) {
        setPosts(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.blogPage}>
      <h1 className={styles.title}>Blog Posts</h1>
      
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
        </div>
      ) : posts.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No blog posts available yet.</p>
        </div>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{ borderLeft: `4px solid ${post.color || "#000"}` }}
            className={styles.post}
            onClick={() => openModal(post)}
          >
            <div className={styles.postTitle}>{post.title}</div>
            <div className={styles.postDate}>
              {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>
          </div>
        ))
      )}
      
      {isOpen && selectedPost && (
        <Modal title={selectedPost.title} content={selectedPost.content} closeModal={closeModal} />
      )}
    </div>
  );
}

export default BlogPage;
