
const Skills = () => {
    const skills = [
        { category: 'Languages & Frameworks', items: ['Python', 'FastAPI', 'Flask', 'React JS', 'HTML/CSS/JS'] },
        { category: 'AI & Automation', items: ['Machine Learning', 'GenAI', 'LangGraph', 'Power Automate', 'RPA'] },
        { category: 'Tools & Integrations', items: ['REST APIs', 'Postman', 'SAP S/4HANA', 'ServiceNow', 'FAISS'] },
    ];

    const certifications = [
        'Python Programming Course, Guvi (2023)',
        'Ai For India 2.0 Event, Skill India & Guvi (2023)',
        'Mastering Microsoft Power Automate 2025',
        'IEEEPROEXPO’23 – National Level Project Exhibition (2023)'
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Certifications</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A comprehensive toolset for building scalable AI solutions and automated workflows.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Skills Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Expertise</h3>
                        {skills.map((skillGroup, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-lg font-semibold text-blue-600 mb-4">{skillGroup.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item) => (
                                        <span key={item} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-100">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications</h3>
                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-green-500 shrink-0"></div>
                                    <p className="text-gray-700 font-medium">{cert}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-blue-600 p-8 rounded-2xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Value Proposition</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <span>✓</span>
                                    <p>Build fast, scalable applications using Python, FastAPI/Flask, React, and ML.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span>✓</span>
                                    <p>Automate processes with Power Automate and Agentic workflows to reduce validation errors and costs.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
