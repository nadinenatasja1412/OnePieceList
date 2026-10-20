import { useState, useEffect } from 'react';

export function useBookmarks(token: string | null) {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // 1. Fetch bookmark dari backend saat komponen dimuat
  useEffect(() => {
    if (!token) return;

    const fetchBookmarks = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/bookmarks', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        setBookmarkedIds(data.map((item: { arcId: string }) => item.arcId));
      } catch (error) {
        console.error("Gagal mengambil bookmark dari server:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, [token]);

  // 2. Toggle bookmark (Post / Delete ke API Backend)
  const toggleBookmark = async (arcId: string) => {
    if (!token) {
      alert("Silakan login terlebih dahulu untuk menyimpan bookmark!");
      return;
    }

    const isBookmarked = bookmarkedIds.includes(arcId);

    // Optimistic UI Update (Update state dulu agar cepat, lalu sync ke server)
    setBookmarkedIds((prev) =>
      isBookmarked ? prev.filter((id) => id !== arcId) : [...prev, arcId]
    );

    try {
      if (isBookmarked) {
        await fetch(`http://localhost:5000/api/bookmarks/${arcId}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await fetch('http://localhost:5000/api/bookmarks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ arcId })
        });
      }
    } catch (error) {
      console.error("Gagal memperbarui bookmark di server:", error);
      // Revert state jika API gagal
    }
  };

  return { bookmarkedIds, toggleBookmark, loading };
}