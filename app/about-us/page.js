import React from 'react'

const Page = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-3/4 px-8 rounded">
                <h1 className="text-4xl font-bold mb-4 text-center text-secondary">About Us</h1>
                <p className="mb-4 text-lg text-primary">Welcome to GoRSVP! We are dedicated to providing you with the best event management experience. Our platform is designed to make organizing and attending events as seamless as possible.</p>
                <h2 className="text-2xl font-semibold mb-2 text-secondary">Our Mission</h2>
                <p className="mb-4 text-primary">Our mission is to simplify event management and enhance the experience for both organizers and attendees. We strive to offer innovative solutions that cater to the diverse needs of our users.</p>
                <h2 className="text-2xl font-semibold mb-2 text-secondary">Our Team</h2>
                <p className="mb-4 text-primary">Our team is composed of passionate professionals with expertise in event management, technology, and customer service. We work tirelessly to ensure that our platform meets the highest standards of quality and reliability.</p>
                <h2 className="text-2xl font-semibold mb-2 text-secondary">Our Values</h2>
                <p className="mb-4 text-primary">We believe in transparency, integrity, and customer satisfaction. These values guide us in everything we do, from developing new features to providing support to our users.</p>
                <p className="text-center text-lg">Thank you for choosing GoRSVP!</p>
            </div>
        </div>
    );
};

export default Page;