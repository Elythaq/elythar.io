// src/app/page.tsx

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-white text-gray-900 dark:bg-[#141a23] dark:text-gray-100 transition-colors">
      <h1 className="text-3xl font-bold mb-6 dark:text-green-300">Welcome to Elythar.io!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
        Your hub for software, plugins, automation scripts, 3D assets, and more.
      </p>
      <div className="flex gap-4">
        <a
          className="rounded bg-blue-700 px-4 py-2 text-white font-medium hover:bg-blue-900 transition"
          href="products"
        >
          Browse Products
        </a>
        <a
          className="rounded border border-blue-700 px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-white dark:border-blue-300 dark:text-blue-300 dark:hover:bg-blue-900 transition"
          href="dashboard"
        >
          Go to Dashboard
        </a>
      </div>
      {/* Add other sections, hero images, etc. here */}
    </div>
  );
}
