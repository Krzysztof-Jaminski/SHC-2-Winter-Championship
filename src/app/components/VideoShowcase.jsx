'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const VideoShowcase = ({ onVideoSectionChange }) => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isInVideoSection, setIsInVideoSection] = useState(false);
  const videoSectionRef = useRef(null);

  const videos = [
    {
      id: 'k5uTHgGaQGY'
    },
    {
      id: 'iBlTONO7UVc'
    },
    {
      id: 'ZXUFdy95YsM'
    },
    {
      id: 'QgBgqwCBMzk'
    }
  ];

  const getThumbnailUrl = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // Intersection Observer to detect when video section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInVideoSection(true);
            onVideoSectionChange?.(true);
          } else {
            setIsInVideoSection(false);
            onVideoSectionChange?.(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-100px 0px -100px 0px' // Smaller margin for better responsiveness
      }
    );

    const currentRef = videoSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [onVideoSectionChange]);


  return (
    <section ref={videoSectionRef} className="relative py-10 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Main Video Display */}
        <div className="mb-12">
          <div className="relative group">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videos[activeVideo].id}?autoplay=0&rel=0&modestbranding=1&vq=hd1080&iv_load_policy=3&fs=1&cc_load_policy=0&start=0&end=0&loop=0&controls=1&disablekb=0&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}&quality=hd1080&hd=1`}
                title="Tournament Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="eager"
              ></iframe>
            </div>
            
          </div>
        </div>

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`relative group cursor-pointer video-thumbnail ${
                activeVideo === index ? 'active' : ''
              }`}
              onClick={() => setActiveVideo(index)}
            >
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <Image
                  src={getThumbnailUrl(video.id)}
                  alt="Tournament Video"
                  width={480}
                  height={270}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center play-button">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Active Video Indicator */}
                {activeVideo === index && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center pulse-ring">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Don&apos;t miss out on the action! Subscribe to our channel for more epic content.
          </p>
          <a
            href="https://www.youtube.com/@Letonetma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
