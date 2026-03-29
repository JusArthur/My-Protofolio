// app/books/page.js
import BookCard from '@/components/BookCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { booksData } from '../data/booksData'; // Import your data

export default function BooksPage() {
  // Logic to group books by year
  const groupedBooks = booksData.reduce((acc, book) => {
    if (!acc[book.yearRead]) {
      acc[book.yearRead] = [];
    }
    acc[book.yearRead].push(book);
    return acc;
  }, {});

  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(groupedBooks).sort((a, b) => b - a);

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-10 px-10 flex flex-col items-center">
      <div className="w-full max-w-6xl relative">
        
        {/* Return to Home Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-16 text-left">Library</h1>
        
        {/* Render each year group */}
        {sortedYears.map((year) => (
          <div key={year} className="mb-16 w-full">
            <h2 className="text-2xl font-mono font-semibold text-slate-300 mb-8 border-b border-slate-800 pb-2">
              {year}
            </h2>
            
            <div className="flex flex-wrap gap-12 justify-start">
              {groupedBooks[year].map((book) => (
                <BookCard 
                  key={book.id} 
                  title={book.title} 
                  author={book.author} 
                  coverUrl={book.coverUrl} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}