import React from 'react';

function ServerList({ servers }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">IP Address</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Response Time</th>
            <th className="border px-4 py-2">Uptime</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((server) => (
            <tr key={server.id}>
              <td className="border px-4 py-2">{server.name}</td>
              <td className="border px-4 py-2">{server.ip}</td>
              <td className="border px-4 py-2">
                <span
                  className={`px-3 py-1 rounded-full ${
                    server.status === 'Up'
                      ? 'bg-green-500 text-white'
                      : server.status === 'Down'
                      ? 'bg-red-500 text-white'
                      : 'bg-yellow-500 text-white'
                  }`}
                >
                  {server.status}
                </span>
              </td>
              <td className="border px-4 py-2">{server.responseTime}</td>
              <td className="border px-4 py-2">{server.uptime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServerList;
