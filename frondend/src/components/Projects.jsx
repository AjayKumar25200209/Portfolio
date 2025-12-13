import { Bot, FileText, ShoppingCart, Users, FolderKanban, Layout } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'NoblQ AI Assistant',
            icon: <Bot className="w-10 h-10 text-blue-500" />,
            description: 'Document-centric AI platform using Python, FastAPI, and FAISS for semantic indexing, summarization, and Q&A. Integrated real-time audio interactions and AI webinar support.',
            tags: ['Python', 'FastAPI', 'FAISS', 'GenAI']
        },
        {
            title: 'Sales Order Automation',
            icon: <ShoppingCart className="w-10 h-10 text-green-500" />,
            description: 'Automated Sales Order creation in SAP S/4HANA using Power Automate, GenAI, and ML. Triggers on emails, extracts details, and posts to SAP.',
            tags: ['Power Automate', 'SAP S/4HANA', 'GenAI', 'ML']
        },
        {
            title: 'Agent Nob',
            icon: <Bot className="w-10 h-10 text-indigo-500" />,
            description: 'GenAI-powered assistant for S/4HANA Org Structure design and month-end closing automation using RPA, reducing hours of work to minutes.',
            tags: ['GenAI', 'SAP', 'RPA', 'Automation']
        },
        {
            title: 'Vendor Portal for SAP ByDesign',
            icon: <Users className="w-10 h-10 text-purple-500" />,
            description: 'Vendor portal with Admin/Supplier access. Added auto-supplier onboarding and a GenAI assistant to explain PO status and structured data.',
            tags: ['SAP ByDesign', 'GenAI', 'Web Portal']
        },
        {
            title: 'ServiceNow Catalog Assistant',
            icon: <FolderKanban className="w-10 h-10 text-orange-500" />,
            description: 'Assistant portal using LangGraph and ServiceNow REST APIs to guide users in creating catalog items with React-based input cards.',
            tags: ['LangGraph', 'ServiceNow', 'React', 'REST API']
        },
        {
            title: 'Payanam Frontend',
            icon: <Layout className="w-10 h-10 text-pink-500" />,
            description: 'Designed and developed the frontend user interface using React, ensuring responsive, user-friendly layouts and seamless user experience.',
            tags: ['React', 'Frontend', 'UI/UX']
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white shadow-sm hover:-translate-y-1">
                            <div className="mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {project.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flexflex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mr-2 mb-2 inline-block">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
