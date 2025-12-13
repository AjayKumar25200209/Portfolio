
const Footer = () => {
    return (
        <footer className="bg-gray-50 py-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Ajay Kumar. All rights reserved.
                </p>
                <div className="flex gap-6 text-gray-500 text-sm">
                    <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-600">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
