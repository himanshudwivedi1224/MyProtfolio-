import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Blog.css';

const Blog: React.FC = () => {
  interface BlogPost {
    id: number;
    title: string;
    date: string;
    summary: string;
    link: string; // This will be updated to be the route path
  }

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      date: 'July 20, 2025',
      summary: 'Exploring how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user interfaces.',
      link: '/MyPortfolio/blog/1' // Updated link to route with /MyPortfolio
    },
    {
      id: 2,
      title: 'Mastering Microservices with .NET Core',
      date: 'June 15, 2025',
      summary: 'A deep dive into building scalable and resilient microservices using .NET Core, covering best practices and common pitfalls.',
      link: '/MyPortfolio/blog/2' // Updated link to route with /MyPortfolio
    },
    {
      id: 3,
      title: 'React Hooks: A Comprehensive Guide',
      date: 'May 10, 2025',
      summary: 'An in-depth guide to React Hooks, demonstrating how to write cleaner and more functional React components.',
      link: '/MyPortfolio/blog/3' // Updated link to route with /MyPortfolio
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
              {/* Use Link component for navigation */}
              <Link to={post.link}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
