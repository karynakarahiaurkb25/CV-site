import { useEffect, useState } from 'react';
import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Reviews from "./components/Review";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
  }, []);

useEffect(() => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed py-10 px-4 transition-colors duration-300"
      style={{ backgroundImage: "url('/background_pic3.jpg')" }}
    >
      <div className="max-w-[960px] mx-auto flex justify-end mb-4">
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 text-sm font-medium bg-[#fbf2dc] dark:bg-[#221c17] text-[#382b1d] dark:text-[#f2e5c7] border border-[#d8c39d] dark:border-[#4a3b2c] rounded-xs shadow-md transition-colors cursor-pointer"
        >
          {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
        </button>
      </div>
      <div className="max-w-[960px] mx-auto torn-paper-wrapper">
        <div className="torn-paper divide-y divide-[#d8c39d] dark:divide-[#4a3b2c]">
          
          <Header />
          
          <main className="p-8 space-y-6">
            <Summary />
            <Education />
            <Skills />
            <Reviews />
          </main>
          
          <Footer />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}