import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Heart, MessageCircle, Share, RefreshCw } from 'lucide-react';
import { fetchInstagramPosts } from '../config/instagram';

const Updates = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Instagram Basic Display API integration
  useEffect(() => {
    const loadInstagramPosts = async () => {
      try {
        setLoading(true);
        
        // Fetch posts from Instagram API or fallback to sample data
        const instagramData = await fetchInstagramPosts();

        // Process the data
        const processedPosts = instagramData.map(post => ({
          id: post.id,
          image: post.media_url,
          caption: post.caption,
          permalink: post.permalink,
          timestamp: formatTimestamp(post.timestamp),
          likes: Math.floor(Math.random() * 200) + 50, // Random likes for demo
          comments: Math.floor(Math.random() * 50) + 5 // Random comments for demo
        }));

        setPosts(processedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load posts');
        setLoading(false);
      }
    };

    loadInstagramPosts();
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return '1 week ago';
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const refreshPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch fresh posts from Instagram API
      const instagramData = await fetchInstagramPosts();

      // Process the data
      const processedPosts = instagramData.map(post => ({
        id: post.id,
        image: post.media_url,
        caption: post.caption,
        permalink: post.permalink,
        timestamp: formatTimestamp(post.timestamp),
        likes: Math.floor(Math.random() * 200) + 50, // Random likes for demo
        comments: Math.floor(Math.random() * 50) + 5 // Random comments for demo
      }));

      setPosts(processedPosts);
      setLoading(false);
    } catch (err) {
      console.error('Error refreshing Instagram posts:', err);
      setError('Failed to refresh posts');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <RefreshCw className="w-8 h-8 text-primary-400" />
            </motion.div>
            <p className="text-gray-300 mt-4">Loading latest updates...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-red-400 mb-4">{error}</p>
            <motion.button
              onClick={refreshPosts}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors duration-300"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </motion.button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cosmic-text">
            Latest Updates
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Follow our journey in space biology research, behind-the-scenes moments, 
            and the latest updates from Penn Bioastronautics.
          </p>
          
          {/* Follow Button */}
          <motion.a
            href="https://www.instagram.com/upenn_bioastronautics/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow @upenn_bioastronautics</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-6 text-white">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-6 h-6" />
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Instagram className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-white text-sm">upenn_bioastronautics</span>
                  </div>
                  <span className="text-gray-400 text-xs">{post.timestamp}</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">{post.comments}</span>
                    </div>
                    <Share className="w-4 h-4" />
                  </div>
                  
                  <motion.a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-6">
              Don't miss out on our latest research updates, behind-the-scenes content, 
              and space biology discoveries. Follow us on Instagram for daily insights!
            </p>
            <motion.a
              href="https://www.instagram.com/upenn_bioastronautics/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
              <span>Follow Us on Instagram</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Updates; 