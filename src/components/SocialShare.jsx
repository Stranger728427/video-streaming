import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'; // Corrected from XIcon to TwitterIcon
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialShare = () => {
    const icons = [
        {
            href: 'https://facebook.com',
            icon: <FacebookIcon />,
            color: 'text-blue-600',
            label: 'Facebook'
        },
        {
            href: 'https://twitter.com',
            icon: <TwitterIcon />,
            color: 'text-blue-400',
            label: 'Twitter'
        },
        {
            href: 'https://linkedin.com',
            icon: <LinkedInIcon />,
            color: 'text-blue-700',
            label: 'LinkedIn'
        }
    ];

    return (
        <section className="my-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Share this Platform</h2>
            <div className="flex justify-center space-x-6">
                {icons.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        className={`flex items-center justify-center p-2 rounded-full transition-transform transform hover:scale-110 hover:shadow-lg ${social.color}`}
                        aria-label={`Share on ${social.label}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {React.cloneElement(social.icon, { style: { fontSize: 32 } })}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default SocialShare;
