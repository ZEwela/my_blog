"use client";

import Link from "next/link";

function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-rose-800 dark:text-rose-300">
          {" "}
          There was a problem
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {error.message || "Something went wrong"}
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Please try again later or contact support if the problem persists.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 opacity-75 rounded "
            onClick={reset}
          >
            Try again
          </button>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 opacity-75 rounded"
            href="/"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GlobalError;
