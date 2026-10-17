import { useState, useEffect } from 'react';

export function useBookmarks() {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('onepiece_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Gagal memuat bookmark dari localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('onepiece_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (error) {
      console.error("Gagal menyimpan bookmark ke localStorage", error);
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return { bookmarkedIds, toggleBookmark };
}