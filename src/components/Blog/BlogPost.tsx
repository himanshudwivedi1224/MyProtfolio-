import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import './Blog.css'; // Assuming BlogPost will use similar styling

// Define interface for blog post data, including slug for routing
interface BlogPostData {
  id: number; // Keep id for key prop, though slug will be used for routing
  title: string;
  date: string;
  summary: string;
  slug: string; // Added slug for routing
  // link property is no longer needed as it will be constructed from slug
}

// Mock blog post data - in a real app, this would come from markdown files or an API
// This mock data is used here to provide metadata, but the content will be fetched.
const mockBlogPosts: BlogPostData[] = [
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

const BlogPost: React.FC = () => {
  // Get the slug from the URL parameters
  const { slug } = useParams<{ slug: string }>();
  const [postContent, setPostContent] = useState<string>('');
  const [postMetadata, setPostMetadata] = useState<BlogPostData | null>(null);

  useEffect(() => {
    // Find metadata for the current slug
    const foundPost = mockBlogPosts.find(p => p.slug === slug);
    setPostMetadata(foundPost || null);

    // Fetch the markdown file content
    // This assumes your markdown files are served statically at a path like /Content/Blog/{slug}.md
        const fetchMarkdown = async () => {
          try {
            // Adjust the path based on your project structure and how files are served
            // The base path '/MyPortfolio' needs to be included for static file fetching
            const response = await fetch(`/MyPortfolio/Content/Blog/${slug}.md`); // Corrected path to include base path
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const markdownText = await response.text();
            console.log("Fetched markdown content:", markdownText); // Log the fetched content
            setPostContent(markdownText);
          } catch (error) {
            console.error("Error fetching markdown:", error);
            setPostContent("Error loading blog post.");
          }
        };

    if (slug) {
      fetchMarkdown();
    }
  }, [slug]);

  if (!postMetadata) {
    return (
      <section className="blog-post-detail container">
        <h2>Blog Post Not Found</h2>
        <p>The requested blog post could not be found.</p>
      </section>
    );
  }

  return (
    <section className="blog-post-detail container">
      <h2>{postMetadata.title}</h2>
      <p className="blog-date">{postMetadata.date}</p>
      <div className="blog-content">
        {/* Render the full content of the blog post using ReactMarkdown */}
        <ReactMarkdown>{postContent}</ReactMarkdown>
      </div>
    </section>
  );
};

export default BlogPost;
