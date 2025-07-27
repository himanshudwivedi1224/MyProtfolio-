import React from 'react';
import './Blog.css';

const Blog: React.FC = () => {
  interface BlogPost {
    id: number;
    title: string;
    date: string;
    summary: string;
    link: string;
  }

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      date: 'July 20, 2025',
      summary: 'Exploring how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user interfaces.',
      link: '#'
    },
    {
      id: 2,
      title: 'Mastering Microservices with .NET Core',
      date: 'June 15, 2025',
      summary: 'A deep dive into building scalable and resilient microservices using .NET Core, covering best practices and common pitfalls.',
      link: '#'
    },
    {
      id: 3,
      title: 'React Hooks: A Comprehensive Guide',
      date: 'May 10, 2025',
      summary: 'An in-depth guide to React Hooks, demonstrating how to write cleaner and more functional React components.',
      link: '#'
    },
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2>Blog</h2>
        <div className="blog-list">
          {blogPosts.map((post: BlogPost) => (
            <div className="blog-post" key={post.id}>
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p>{post.summary}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
