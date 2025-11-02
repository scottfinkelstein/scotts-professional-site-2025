import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <About />
        <Work />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
