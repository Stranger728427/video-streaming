import React from 'react';

const Blog = () => {
    return (
        <section className="my-10 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CTUNyGRs20_VflHc1DaeU7lYjUDek0erRw&s"
                        alt="Blog Post 1"
                        className="w-full h-32 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">The Future of Web Development</h3>
                        <p className="text-gray-600">
                            Discover the latest trends in web development and how technologies like React, Angular, and Vue are shaping the future of the industry.
                            This blog explores emerging trends and provides insights into what developers should focus on in the coming years.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HBZOgWxYOgQGxJmVKHIKuorTrhMfQYCPo82kbqb4yQe5t6BqsqxDSrmloTgN2Zy5r2M&usqp=CAU"
                        alt="Blog Post 2"
                        className="w-full h-32 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">How to Optimize Your Website for SEO</h3>
                        <p className="text-gray-600">
                            Search Engine Optimization (SEO) is crucial for increasing your website's visibility and driving traffic. This blog provides actionable tips and best practices to improve your SEO strategy, from keyword research to on-page optimization and link building.
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Blog;
