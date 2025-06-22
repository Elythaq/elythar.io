'use client';

export default function Footer() {
  return (
    <footer className="mt-32 pt-10 pb-6 border-t border-teal-500/10 bg-gradient-to-t from-[#0a0c1b] to-transparent text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-green-200 font-semibold tracking-widest">Elythar.io</div>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Elythar. Built with ancient wisdom and modern code.
        </p>
        <div className="space-x-4">
          <a href="/privacy" className="hover:text-teal-300 underline">Privacy</a>
          <a href="/terms" className="hover:text-teal-300 underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
