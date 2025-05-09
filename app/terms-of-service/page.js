import React from 'react'


const Page = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-3/4 px-8 rounded">
                <h1 className="text-4xl font-bold mb-4 text-center text-secondary">Terms of Service</h1>
                <p className="mb-4 text-lg text-primary">Welcome to GoRSVP. These terms and conditions outline the rules and regulations for the use of our website.</p>
                <h2 className="text-2xl font-semibold mb-2 text-secondary">Acceptance of Terms</h2>
                <p className="mb-4 text-primary">By accessing this website, we assume you accept these terms and conditions. Do not continue to use GoRSVP if you do not agree to all of the terms and conditions stated on this Page.</p>
                <h2 className="text-2xl font-semibold mb-2 text-secondary">License</h2>
                <p className="mb-4 text-primary">Unless otherwise stated, GoRSVP and/or its licensors own the intellectual property rights for all material on GoRSVP. All intellectual property rights are reserved. You may access this from GoRSVP for your own personal use subjected to restrictions set in these terms and conditions.</p>
                <h2 className="text-2xl font-semibold mb-2 text-secondary">User Responsibilities</h2>
                <p className="mb-4 text-primary">You must not:</p>
                <ul className="text-primary list-disc list-inside mb-4">
                    <li>Republish material from GoRSVP</li>
                    <li>Sell, rent, or sub-license material from GoRSVP</li>
                    <li>Reproduce, duplicate, or copy material from GoRSVP</li>
                    <li>Redistribute content from GoRSVP</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2 text-secondary">Limitation of Liability</h2>
                <p className="mb-4 text-primary">In no event shall GoRSVP, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.</p>
                <h2 className="text-2xl font-semibold mb-2 text-secondary">Changes to Terms</h2>
                <p className="mb-4 text-primary">GoRSVP reserves the right to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.</p>
                <p className="text-sm text-gray-600">These terms are effective as of December 2024.</p>
            </div>
        </div>
    );
};

export default Page;