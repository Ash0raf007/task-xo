import React, { useState } from 'react';

function ServerList({ servers }) {
  const [filterText, setFilterText] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredServers = servers.filter(
    (server) =>
      server.name.toLowerCase().includes(filterText.toLowerCase()) ||
      server.ip.includes(filterText)
  );

  const sortedServers = [...filteredServers].sort((a, b) => {
    if (!sortKey) return 0; 

    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (typeof aValue === 'string') {
      return sortOrder === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === 'number') {
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Filter by name or IP..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/3"
        />
        <div className="ml-4">
          <label className="mr-2">Sort By:</label>
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="ip">IP Address</option>
            <option value="responseTime">Response Time</option>
            <option value="uptime">Uptime</option>
          </select>
          <button
            onClick={() =>
              setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
            }
            className="ml-2 px-4 py-2 rounded bg-blue-500 text-white"
          >
            {sortOrder === 'asc' ? 'Asc' : 'Desc'}
          </button>
        </div>
      </div>

      {/* Server Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-sm md:text-base">Name</th>
              <th className="border px-4 py-2 text-sm md:text-base">IP Address</th>
              <th className="border px-4 py-2 text-sm md:text-base">Status</th>
              <th className="border px-4 py-2 text-sm md:text-base">Response Time</th>
              <th className="border px-4 py-2 text-sm md:text-base">Uptime</th>
            </tr>
          </thead>
          <tbody>
            {sortedServers.map((server) => (
              <tr key={server.id}>
                <td className="border px-4 py-2 text-sm md:text-base">
                  {server.name}
                </td>
                <td className="border px-4 py-2 text-sm md:text-base">
                  {server.ip}
                </td>
                <td className="border px-4 py-2 text-sm md:text-base">
                  <span
                    className={`px-3 py-1 rounded-full text-xs text-white md:text-sm ${
                      server.status === 'Up'
                        ? 'bg-green-500'
                        : server.status === 'Down'
                        ? 'bg-red-500'
                        : 'bg-yellow-500'
                    }`}
                  >
                    {server.status}
                  </span>
                </td>
                <td className="border px-4 py-2 text-sm md:text-base">
                  {server.responseTime}
                </td>
                <td className="border px-4 py-2 text-sm md:text-base">
                  {server.uptime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServerList;
