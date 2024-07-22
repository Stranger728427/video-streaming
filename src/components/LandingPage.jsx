// src/components/LandingPage.jsx
import React from 'react';
import Features from './Features';
import Pricing from './Pricing';
import VideoPlayer from './VideoPlayer';
import Testimonials from './Testimonials';
import Blog from './Blog';
import SocialShare from './SocialShare';


const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
            <header className="text-center py-12">
                <h1 className="text-4xl font-bold">Welcome to Our Video Streaming Platform</h1>
                <p className="mt-4">High-quality streaming, Custom video player, Affordable pricing, Multi-device support</p>
            </header>
            <main className="container mx-auto px-4">
                <section className="my-12">
                    <VideoPlayer />
                </section>

                <Pricing/>
                <Testimonials />
                <Blog />
                <section className='="flex'>
                <Features/>
                <SocialShare />
                </section>
                
            </main>
            <footer className="text-center py-6">
                <p>&copy; 2024 Video Streaming Platform. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
