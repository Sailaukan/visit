import React from 'react';
import styles from './BlogPage.module.css';

function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Blogs',
      summary: 'An introduction to React Hooks and how they can revolutionize your component development.',
      date: 'April 10, 2024'
    },
    {
        id: 1,
        title: 'Understanding React Hooks',
        summary: 'An introduction to React Hooks and how they can revolutionize your component development.',
        date: 'April 10, 2024'
      },
  ];

  return (
    <div className={styles.blogPage}>
      <h1 className={styles.title}>Blog Posts</h1>
      {blogPosts.map((post) => (
        <article key={post.id} className={styles.post}>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postDate}>{post.date}</p>
          <p className={styles.postSummary}>{post.summary}</p>
        </article>
      ))}
    </div>
  );
}

export default BlogPage;
