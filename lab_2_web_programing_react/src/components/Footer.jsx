import { useEffect, useState } from 'react';

export default function Footer() {
  const [info, setInfo] = useState({ platform: '', userAgent: '' });

  useEffect(() => {
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);

    setInfo({
      userAgent: localStorage.getItem('userAgent') || '',
      platform: localStorage.getItem('platform') || '',
    });
  }, []);

  return (
    <footer className="p-4 text-center text-sm text-parchment-muted dark:text-dark-muted border-t border-parchment-border dark:border-dark-border space-y-1">
      <p>&copy; 2026 Карагяур Карина</p>
      
      {info.platform && (
        <p className="text-xs opacity-80">
          ОС/Платформа: {info.platform}
        </p>
      )}
      {info.userAgent && (
        <p className="text-xs opacity-70 break-all max-w-2xl mx-auto">
          Браузер: {info.userAgent}
        </p>
      )}
    </footer>
  );
}