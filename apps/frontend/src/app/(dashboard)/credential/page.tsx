'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';
import Link from 'next/link';

/**
 * Credential Page
 *
 * Displays a list of credentials with filtering, search, and pagination
 */
export default function CredentialPage() {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 5;
  const totalCredentials = 4;

  // Sample credential data - replace with actual API call
  const credentials = [
    {
      id: 1,
      name: 'Divanshu',
      email: 'neil.sims@flowbite.com',
      event: 'Award Name',
      issueDate: 'June 12 2025',
      status: '--',
    },
    {
      id: 2,
      name: 'Divanshu',
      email: 'neil.sims@flowbite.com',
      event: 'Award Name',
      issueDate: 'June 12 2025',
      status: '--',
    },
    {
      id: 3,
      name: 'Raj',
      email: 'raj@flowbite.com',
      event: 'Award Name',
      issueDate: 'June 12 2025',
      status: '--',
    },
    {
      id: 4,
      name: 'Aashish',
      email: 'Aashish@flowbite.com',
      event: 'Award Name',
      issueDate: 'June 12 2025',
      status: '--',
    },
  ];

  return (
    <div className="space-y-2">
      {/* Header and Filter Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Header Section */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Credential</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{totalCredentials} credentials</p>
          </div>
          <button className="btn-primary">Issuer Credential</button>
        </div>


        {/* Filter and Search Section */}
        <div className="flex flex-wrap items-center gap-4 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <details className="relative">
            <summary className="cursor-pointer flex items-center gap-2 px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 list-none">
              <Filter className="w-4 h-4" />
              Filter by Events
            </summary>
            <div className="absolute z-10 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow p-3">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Select Events</p>
              <label className="flex items-center gap-2 py-1 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                Events 1
              </label>
              <label className="flex items-center gap-2 py-1 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                Events-2
              </label>
              <label className="flex items-center gap-2 py-1 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                Events-3
              </label>
              <label className="flex items-center gap-2 py-1 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                Events-4
              </label>
            </div>
          </details>
          <div className="ml-auto">
            <input
              type="text"
              placeholder="Search by name..."
              className="form-input-field w-48 px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-500 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Credentials Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
            <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-900 dark:text-white">Name</th>
                <th className="px-6 py-3 font-medium text-gray-900 dark:text-white">Email</th>
                <th className="px-6 py-3 font-medium text-gray-900 dark:text-white">Events</th>
                <th className="px-6 py-3 font-medium text-gray-900 dark:text-white">Issue Date</th>
                <th className="px-6 py-3 font-medium text-gray-900 dark:text-white">Status</th>
                <th className="px-6 py-3 font-medium text-gray-900 dark:text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {credentials.map((credential) => (
                <tr
                  key={credential.id}
                  className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-2 dark:text-white">{credential.name}</td>
                  <td className="px-6 py-2 dark:text-gray-300">{credential.email}</td>
                  <td className="px-6 py-2 dark:text-gray-300">{credential.event}</td>
                  <td className="px-6 py-2 dark:text-gray-300">{credential.issueDate}</td>
                  <td className="px-6 py-2 text-gray-500 dark:text-gray-400">{credential.status}</td>
                  <td className="px-6 py-2">
                    <Link href="/credential" className="text-blue-600 hover:underline dark:text-blue-400">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-end px-4 py-3 border-t border-gray-200 dark:border-gray-700">
        <ul className="flex text-sm">
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-3 h-9 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page}>
              <button
                onClick={() => setCurrentPage(page)}
                className={`flex items-center justify-center px-3 h-9 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  currentPage === page
                    ? 'bg-gray-200 dark:bg-gray-600 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
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
              className="flex items-center justify-center px-3 h-9 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
