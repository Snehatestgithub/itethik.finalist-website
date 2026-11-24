import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { CheckCircle2, LoaderCircle, ShieldCheck, Trash2, XCircle } from 'lucide-react';

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(() => localStorage.getItem('itethik-admin-key') || '');
  const [error, setError] = useState('');
  const [activeImage, setActiveImage] = useState(null);

  const apiBaseUrl = useMemo(() => {
    return import.meta.env.VITE_API_URL || (import.meta.env.PROD ? 'https://itethik-backend-1.onrender.com' : 'http://localhost:5000');
  }, []);

  const loadReviews = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${apiBaseUrl}/api/admin/reviews`, {
        headers: {
          'x-admin-key': password,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to load reviews');
      }

      setReviews(data.reviews || []);
      localStorage.setItem('itethik-admin-key', password);
    } catch (err) {
      setError(err.message || 'Unable to load reviews');
    } finally {
      setLoading(false);
    }
  }, [apiBaseUrl, password]);

  useEffect(() => {
    if (!password) return;
    let cancelled = false;
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`${apiBaseUrl}/api/admin/reviews`, {
          headers: {
            'x-admin-key': password,
          },
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Unable to load reviews');
        }

        if (!cancelled) {
          setReviews(data.reviews || []);
          localStorage.setItem('itethik-admin-key', password);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Unable to load reviews');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      cancelled = true;
    };
  }, [apiBaseUrl, password]);

  const handleAction = async (id, status) => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/admin/reviews/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': password,
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Action failed');
      }

      setReviews((prev) => prev.map((review) => (review._id === id ? data.review : review)));
    } catch (err) {
      setError(err.message || 'Unable to update review');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/admin/reviews/${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-key': password,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Delete failed');
      }

      setReviews((prev) => prev.filter((review) => review._id !== id));
    } catch (err) {
      setError(err.message || 'Unable to delete review');
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_40px_rgba(6,182,212,0.08)] backdrop-blur-xl md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              <ShieldCheck size={16} /> Admin Dashboard
            </div>
            <h1 className="text-3xl font-bold">Customer Reviews</h1>
            <p className="mt-2 text-sm text-gray-400">Approve, reject, or delete customer submissions from the public testimonials section.</p>
          </div>

          <div className="flex flex-col gap-2 md:min-w-[280px]">
            <label className="text-sm text-gray-400">Admin access key</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-2xl border border-white/10 bg-[#030b1d] px-4 py-3 text-sm text-white outline-none ring-0"
              placeholder="Enter admin key"
            />
            <button
              onClick={loadReviews}
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Load reviews
            </button>
          </div>
        </div>

        {error ? <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</div> : null}

        {loading ? (
          <div className="flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-10 text-cyan-400">
            <LoaderCircle className="mr-3 animate-spin" size={20} /> Loading reviews...
          </div>
        ) : null}

        {!loading && reviews.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-10 text-center text-gray-400">
            No reviews have been submitted yet.
          </div>
        ) : null}

        <div className="grid gap-6">
          {reviews.map((review) => (
            <div key={review._id} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_25px_rgba(6,182,212,0.06)] backdrop-blur-xl">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-semibold text-white">{review.name}</h2>
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-400">{review.status}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">{review.email}</p>
                  <p className="mt-4 text-gray-300">{review.message}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleAction(review._id, 'Approved')}
                    className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
                  >
                    <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Approve</span>
                  </button>
                  <button
                    onClick={() => handleAction(review._id, 'Rejected')}
                    className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-500/20"
                  >
                    <span className="flex items-center gap-2"><XCircle size={16} /> Reject</span>
                  </button>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/20"
                  >
                    <span className="flex items-center gap-2"><Trash2 size={16} /> Delete</span>
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <span>Rating: {review.rating}/5</span>
                <span>•</span>
                <span>Submitted: {new Date(review.createdAt).toLocaleString()}</span>
              </div>

              {review.photos?.length ? (
                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {review.photos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(photo)}
                      className="overflow-hidden rounded-2xl border border-white/10"
                    >
                      <img src={photo.startsWith('http') ? photo : `${apiBaseUrl}${photo}`} alt={`Review photo ${index + 1}`} className="h-28 w-full object-cover" />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8" onClick={() => setActiveImage(null)}>
          <div className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#020617] p-2" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveImage(null)} className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white">
              <XCircle size={20} />
            </button>
            <img src={activeImage.startsWith('http') ? activeImage : `${apiBaseUrl}${activeImage}`} alt="Review preview" className="max-h-[80vh] w-full rounded-2xl object-contain" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AdminReviews;
