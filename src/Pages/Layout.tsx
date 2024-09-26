const Layout = (): JSX.Element => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-green-500 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-gray-200">Logout</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto p-4 flex flex-col md:flex-row gap-4 mt-4">
                {/* Sidebar */}
                <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow">
                    <ul>
                        <li className="mb-2"><a href="#" className="block p-2 bg-blue-100 rounded hover:bg-blue-200">Dashboard</a></li>
                        <li className="mb-2"><a href="#" className="block p-2 bg-blue-100 rounded hover:bg-blue-200">Settings</a></li>
                        <li className="mb-2"><a href="#" className="block p-2 bg-blue-100 rounded hover:bg-blue-200">Profile</a></li>
                    </ul>
                </aside>

                {/* Main Content Area */}
                <section className="w-full md:w-3/4 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-4">Main Content</h2>
                    <p>
                        This is where the main content of the page will go. The layout is responsive, and the sidebar will stack under the main content on smaller screens.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Layout;
