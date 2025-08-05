import React from 'react';
import { useParams } from 'react-router-dom';
import './Blog.css'; // Assuming BlogPost will use similar styling

interface BlogPostData {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string; // Added content field for the full blog post
  link: string; // This might not be needed here, but keeping for consistency with Blog.tsx
}

// Mock blog post data - in a real app, this would come from an API or a more robust data management system
const mockBlogPosts: BlogPostData[] = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    date: 'July 20, 2025',
    summary: 'Exploring how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user interfaces.',
    content: 'Artificial intelligence (AI) is rapidly transforming the landscape of web development. From enhancing developer productivity with AI-powered coding assistants to creating more dynamic and personalized user experiences, AI is becoming an indispensable tool. This post delves into the various ways AI is being integrated into the web development workflow, including automated testing, intelligent debugging, and the creation of adaptive user interfaces. We will also explore the ethical considerations and future potential of AI in this field.',
    link: '#'
  },
  {
    id: 2,
    title: 'Mastering Microservices with .NET Core',
    date: 'June 15, 2025',
    summary: 'A deep dive into building scalable and resilient microservices using .NET Core, covering best practices and common pitfalls.',
    content: '.NET Core provides a robust framework for building microservices, offering high performance and cross-platform compatibility. This article explores the architectural patterns for microservices, such as the API Gateway and Service Discovery. We will discuss strategies for inter-service communication, data management in a distributed system, and containerization using Docker and Kubernetes. Learn how to design, develop, and deploy microservices effectively with .NET Core.',
    link: '#'
  },
  {
    id: 3,
    title: 'React Hooks: A Comprehensive Guide',
    date: 'May 10, 2025',
    summary: 'An in-depth guide to React Hooks, demonstrating how to write cleaner and more functional React components.',
    content: 'React Hooks have revolutionized the way we write stateful logic in functional components. This guide provides a comprehensive overview of essential hooks like useState, useEffect, useContext, and custom hooks. We will walk through practical examples to illustrate how hooks simplify component logic, improve reusability, and make code more readable. Understand the benefits of hooks and how to leverage them effectively in your React applications.',
    link: '#'
  },
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the id from the URL parameters
  const postId = parseInt(id!, 10); // Convert id to a number, asserting it's not undefined

  // Find the blog post that matches the id
  const post = mockBlogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <section className="blog-post-detail container">
        <h2>Blog Post Not Found</h2>
        <p>The requested blog post could not be found.</p>
      </section>
    );
  }

  return (
    <section className="blog-post-detail container">
      <h2>{post.title}</h2>
      <p className="blog-date">{post.date}</p>
      <div className="blog-content">
        {/* Render the full content of the blog post */}
        {post.content.split('\\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </section>
  );
};

export default BlogPost;
