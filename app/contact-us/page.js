import React from 'react'

const page = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-lg px-8 rounded">
                <h1 className="text-4xl font-bold mb-4 text-center text-primary">Contact Us</h1>
                <p className="mb-4 text-lg text-center">We would love to hear from you!<br></br>Please fill out the form below to get in touch with us.</p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-lg font-medium text-primary" htmlFor="name">Name</label>
                        <input className="w-full px-4 py-2 border rounded" type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-primary" htmlFor="email">Email</label>
                        <input className="w-full px-4 py-2 border rounded" type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-primary" htmlFor="message">Message</label>
                        <textarea className="w-full resize-none px-4 py-2 border rounded" id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button className="px-6 py-2 text-white bg-primary rounded hover:bg-secondary" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default page;