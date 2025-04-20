import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="text-2xl font-bold text-blue-600">
                    <Link href="/">MySite</Link>
                </div>
                <div className="flex gap-6">
                    <Link 
                        href="/" 
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                        About
                    </Link>
                    <Link 
                        href="/blogs" 
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                        Blogs
                    </Link>
                </div>
            </nav>
        </header>
    );
}
