import { useState } from 'react';
import { Mail, Linkedin, Github, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://127.0.0.1:8000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000); // Reset status after 3 seconds
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                <p className="text-xl text-gray-600 mb-12">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="flex justify-center gap-8 mb-12">
                    <a href="mailto:ajayjeyapal@gmail.com" className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Mail className="w-8 h-8" />
                        </div>
                        <span className="text-gray-600 font-medium">Email Me</span>
                    </a>
                    <a href="#" className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Linkedin className="w-8 h-8" />
                        </div>
                        <span className="text-gray-600 font-medium">LinkedIn</span>
                    </a>
                </div>

                <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 text-left">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="How can I help you?"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`w-full font-bold py-4 rounded-lg transition flex items-center justify-center gap-2 ${status === 'loading' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                            </>
                        ) : status === 'success' ? (
                            'Message Sent!'
                        ) : status === 'error' ? (
                            'Failed to Send. Try Again.'
                        ) : (
                            'Send Message'
                        )}
                    </button>
                    {status === 'success' && <p className="text-green-600 text-center mt-2">Thank you! I'll get back to you soon.</p>}
                    {status === 'error' && <p className="text-red-600 text-center mt-2">Something went wrong. Please email directly.</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
