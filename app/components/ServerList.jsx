import React from 'react';

function ServerList({ servers }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
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
            {servers.map((server) => (
              <tr key={server.id}>
                <td className="border px-4 py-2 text-sm md:text-base">{server.name}</td>
                <td className="border px-4 py-2 text-sm md:text-base">{server.ip}</td>
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
                <td className="border px-4 py-2 text-sm md:text-base">{server.responseTime}</td>
                <td className="border px-4 py-2 text-sm md:text-base">{server.uptime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServerList;
