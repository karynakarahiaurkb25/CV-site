import { useEffect, useState } from 'react';

const VARIANT = 12;

export default function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-parchment-dark dark:text-dark-text pb-2 mb-3 border-b-2 border-parchment-border dark:border-dark-border">
        Відгуки
      </h2>
      <div className="space-y-3">
        {comments.map(c => (
          <article 
            key={c.id} 
            className="p-4 bg-parchment-base/40 dark:bg-dark-card border border-parchment-border/60 dark:border-dark-border rounded-xs transition-colors hover:bg-parchment-base/80 dark:hover:bg-[#322921]"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
              <h4 className="font-semibold text-sm text-parchment-dark dark:text-dark-text capitalize">
                {c.name}
              </h4>
              <small className="text-xs text-parchment-muted dark:text-dark-muted font-medium">
                {c.email}
              </small>
            </div>
            <p className="text-sm text-parchment-text dark:text-dark-text leading-relaxed">
              {c.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}