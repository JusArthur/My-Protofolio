import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-background text-text mb-0">
      <div className="font-mono max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-primary text-2xl font-bold hover:text-secondary"
            >
              JustinCase
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/experience" className="hover:text-primary">
              Experience
            </Link>
            <Link href="/projects" className="hover:text-primary">
              Projects
            </Link>
            <Link href="/skills" className="hover:text-primary">
              Skills
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-background px-4 py-2 rounded-full hover:bg-secondary"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
