export default function Header() {
  return (
    <header className="p-8 border-t-5 border-[#f1c232]">
      <h1 className="text-3xl font-bold text-parchment-dark dark:text-dark-text mb-1">
        Карагяур Карина
      </h1>
      <p className="text-base text-parchment-muted dark:text-dark-muted mb-6">
        Студентка кафедри кібербезпеки та захисту інформації
      </p>

      <section 
        id="contacts" 
        className="bg-[#f2e5c7]/60 dark:bg-dark-card border-l-4 border-[#f1c232] p-4 rounded-xs border-y border-r border-parchment-border dark:border-dark-border"
      >
        <h2 className="text-lg font-semibold text-parchment-dark dark:text-dark-text mt-0 mb-3">
          Контактна інформація
        </h2>
        <ul className="flex flex-wrap gap-4 text-sm text-parchment-text dark:text-dark-text">
          <li><strong>Місто:</strong> Львів</li>
          <li>
            <strong>Ел. пошта:</strong>{" "}
            <a href="mailto:karyna.karahiaur.kb.2025@lpnu.ua" className="text-blue-600 dark:text-[#f1c232] hover:underline">
              karyna.karahiaur.kb.2025@lpnu.ua
            </a>
          </li>
          <li>
            <strong>Телефон:</strong>{" "}
            <a href="tel:+380685594071" className="text-blue-600 dark:text-[#f1c232] hover:underline">
              +38 (068) 559-40-71
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
}