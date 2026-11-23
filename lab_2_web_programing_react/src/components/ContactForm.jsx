import { useEffect, useState } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-parchment-dark/50 dark:bg-black/70 backdrop-blur-xs p-4">
      <div className="relative w-full max-w-md bg-parchment-base dark:bg-dark-card border border-parchment-border dark:border-dark-border p-6 shadow-2xl rounded-xs space-y-4">
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-parchment-muted dark:text-dark-muted hover:text-parchment-dark dark:hover:text-dark-text font-semibold text-sm transition-colors cursor-pointer"
          aria-label="Закрити"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold text-parchment-dark dark:text-dark-text pb-2 border-b-2 border-parchment-border dark:border-dark-border">
          Зворотний зв'язок
        </h3>

        <form action="https://formspree.io/f/mjyydokw" method="POST" className="space-y-3">
          <div>
            <input 
              type="text" 
              name="name" 
              placeholder="Ім'я" 
              required 
              className="w-full px-3 py-2 text-sm bg-white/70 dark:bg-dark-base border border-parchment-border dark:border-dark-border rounded-xs text-parchment-dark dark:text-dark-text placeholder-parchment-muted dark:placeholder-dark-muted focus:outline-hidden focus:ring-2 focus:ring-parchment-muted"
            />
          </div>

          <div>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className="w-full px-3 py-2 text-sm bg-white/70 dark:bg-dark-base border border-parchment-border dark:border-dark-border rounded-xs text-parchment-dark dark:text-dark-text placeholder-parchment-muted dark:placeholder-dark-muted focus:outline-hidden focus:ring-2 focus:ring-parchment-muted"
            />
          </div>

          <div>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Телефон" 
              required 
              className="w-full px-3 py-2 text-sm bg-white/70 dark:bg-dark-base border border-parchment-border dark:border-dark-border rounded-xs text-parchment-dark dark:text-dark-text placeholder-parchment-muted dark:placeholder-dark-muted focus:outline-hidden focus:ring-2 focus:ring-parchment-muted"
            />
          </div>

          <div>
            <textarea 
              name="message" 
              placeholder="Повідомлення" 
              rows="4" 
              required 
              className="w-full px-3 py-2 text-sm bg-white/70 dark:bg-dark-base border border-parchment-border dark:border-dark-border rounded-xs text-parchment-dark dark:text-dark-text placeholder-parchment-muted dark:placeholder-dark-muted focus:outline-hidden focus:ring-2 focus:ring-parchment-muted resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 px-4 bg-parchment-muted dark:bg-dark-border hover:bg-[#5c4a32] dark:hover:bg-[#5c4a32] text-parchment-base font-medium text-sm rounded-xs transition-colors shadow-sm cursor-pointer"
          >
            Надіслати
          </button>
        </form>

      </div>
    </div>
  );
}