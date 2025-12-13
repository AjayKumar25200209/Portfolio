import { ArrowRight, Download } from 'lucide-react';
import profileImage from '../assets/Ajay kumar image.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        Consultant – AI and Data Integration
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Building Fast, Scalable <span className="text-blue-600">AI Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        I specialize in Python, FastAPI, React, and GenAI to build intelligent document-centric platforms and automate complex workflows.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                            View Work <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition flex items-center gap-2">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="relative hidden md:block flex justify-center">
                    {/* Abstract Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    <div className="relative">
                        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto">
                            <img
                                src={profileImage}
                                alt="Ajay Kumar"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
