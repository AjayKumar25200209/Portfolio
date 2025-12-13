const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div className="relative bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Value Proposition</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="text-blue-600 font-bold">✓</span>
                                <p className="text-gray-600">I build fast, scalable applications using Python, FastAPI/Flask, React, and ML—giving customers quick delivery, smart features, and smooth performance.</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-blue-600 font-bold">✓</span>
                                <p className="text-gray-600">With Power Automate, REST APIs, and agentic workflows, I automate processes and integrate systems—reducing errors, effort, and operational costs for customers.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        I am an AI and Data Integration Consultant with a passion for building intelligent systems. My expertise lies in bridging the gap between complex data and actionable insights using modern technologies like Python, React, and GenAI.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        In my recent roles, I have developed document-centric AI platforms, automated Sales Order processing for SAP S/4HANA, and built GenAI assistants for organizational automation. I strive to deliver solutions that not only solve technical challenges but also drive tangible business value.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

