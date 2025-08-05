import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Blog.css';

const Blog: React.FC = () => {
  // Define interface for blog post data, including slug for routing
  interface BlogPost {
    id: number; // Keep id for key prop, though slug will be used for routing
    title: string;
    date: string;
    summary: string;
    slug: string; // Added slug for routing
    // link property is no longer needed as it will be constructed from slug
  }

  // Mock blog post data - in a real app, this would come from markdown files or an API
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      date: 'July 20, 2025',
      summary: 'Exploring how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user interfaces.',
      slug: 'ai-web-development', // Slug for the AI blog post
    },
    {
      id: 2,
      title: 'Mastering Microservices with .NET Core',
      date: 'June 15, 2025',
      summary: 'A deep dive into building scalable and resilient microservices using .NET Core, covering best practices and common pitfalls.',
      slug: 'mastering-dotnetcore-microservice', // Slug for the microservices blog post
    },
    {
      id: 3,
      title: 'React Hooks: A Comprehensive Guide',
      date: 'May 10, 2025',
      summary: 'An in-depth guide to React Hooks, demonstrating how to write cleaner and more functional React components.',
      slug: 'react-webhooks', // Slug for the React Hooks blog post
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
              {/* Use Link component for navigation with slug */}
              <Link to={`/MyPortfolio/blog/${post.slug}`}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
