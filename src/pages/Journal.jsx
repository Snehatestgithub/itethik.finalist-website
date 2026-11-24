import { ArrowLeft, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Journal() {
  return (
    <div className="min-h-[70vh] bg-[#f7f9fc] px-5 py-20 text-[#172b43] sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1f5a85] hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <header className="mt-12 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">ItEthik Journal</p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#142b45] sm:text-6xl">The ItEthik Journal</h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Technology, ideas and practical insights to help you stay one step ahead.
          </p>
        </header>

        <section
          aria-labelledby="journal-empty-heading"
          className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(19,43,69,0.06)] sm:p-12"
        >
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e6eff6] text-[#1f5a85]" aria-hidden="true">
            <BookOpen size={25} strokeWidth={1.6} />
          </div>
          <h2 id="journal-empty-heading" className="mt-6 text-2xl font-semibold text-[#172b43] sm:text-3xl">
            The first articles are in preparation.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            There are no published articles yet. Approved articles, cover images and publication details will appear here when they are ready.
          </p>
          <p className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
            No published articles
          </p>
        </section>
      </div>
    </div>
  );
}
