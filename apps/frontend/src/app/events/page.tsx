'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Filter } from 'lucide-react';

/**
 * Groups of Events Page
 *
 * Displays a list of event groups with filtering, search, and pagination
 */
export default function EventsPage() {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 5;
  const totalGroups = 4;

  // Sample event data - replace with actual API call
  const events = [
    {
      id: 1,
      name: 'CS Quarterly Awards',
      createdDate: '12 Dec 2024',
      thumbnail: '/credential/image_720.png',
      hasBadge: true,
    },
    {
      id: 2,
      name: 'CS Quarterly Awards',
      createdDate: '08 Dec 2024',
      thumbnail: '/credential/image_720.png',
      hasBadge: true,
    },
    {
      id: 3,
      name: 'CS Quarterly Awards',
      createdDate: '12 Dec 2024',
      thumbnail: '/credential/image_720.png',
      hasBadge: true,
    },
    {
      id: 4,
      name: 'CS Quarterly Awards',
      createdDate: '08 Dec 2024',
      thumbnail: '/credential/image_720.png',
      hasBadge: true,
    },
  ];

  return (
    <div className="space-y-2">
      {/* Header and Filter Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 divide-y dark:divide-gray-700">
        {/* Header Section */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Groups of Events</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{totalGroups} Groups</p>
          </div>
          <button className="btn-primary">Add New Events</button>
        </div>

        {/* Filter and Search Section */}
        <div className="flex flex-wrap items-center gap-4 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <details className="relative">
            <summary className="cursor-pointer flex items-center gap-2 px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 list-none">
              <Filter className="w-4 h-4" />
              Filter by Events
            </summary>
            <div className="absolute z-10 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow p-3">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Select Events</p>
              <label className="flex items-center gap-2 py-1 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                Course Completion
              </label>
              <label className="flex items-center gap-2 py-1 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                Top Performer
              </label>
              <label className="flex items-center gap-2 py-1 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                Participation
              </label>
              <label className="flex items-center gap-2 py-1 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                Achievement
              </label>
            </div>
          </details>
          <div className="ml-auto">
            <input
              type="text"
              placeholder="Search Event by name..."
              className="w-48 px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-500 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              {events.map((event) => (
                <tr
                  key={event.id}
                  className="border-b border-gray-200 dark:border-gray-600"
                >
                  <td className="p-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={event.thumbnail}
                        alt="Badge"
                        className="w-20 md:w-20 max-w-full shadow-md"
                      />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {event.name}
                        </div>
                        <div className="text-xs text-gray-500 flex gap-2">
                          <span className="capitalize py-0.5 rounded">
                            Created on: {event.createdDate}
                          </span>
                        </div>
                        {event.hasBadge && (
                          <div className="text-xs text-gray-500 mt-1 flex gap-2">
                            <span className="capitalize bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium px-1.5 py-0.5 rounded dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400">
                              Badge
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-1 text-right">
                    <div className="flex justify-end gap-1">
                      <Link
                        href="/credential"
                        title="Preview"
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M2.5 12S6.5 5 12 5s9.5 7 9.5 7-4 7-9.5 7-9.5-7-9.5-7z"
                          />
                        </svg>
                        <span>View Credential</span>
                      </Link>
                      <button
                        title="Edit"
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <span>Issue Credential</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation example" className="flex justify-end p-4">
        <ul className="flex -space-x-px text-sm">
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-3 h-9 text-sm font-medium bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-300"
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page}>
              <button
                onClick={() => setCurrentPage(page)}
                aria-current={currentPage === page ? 'page' : undefined}
                className={`flex items-center justify-center w-9 h-9 text-sm border border-gray-300 dark:border-gray-600 ${
                  currentPage === page
                    ? 'font-medium text-blue-600 bg-gray-200 dark:bg-gray-600 dark:text-blue-400'
                    : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center px-3 h-9 text-sm font-medium bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-300"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
