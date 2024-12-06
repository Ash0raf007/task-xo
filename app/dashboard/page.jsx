"use client"
import { useEffect, useState } from 'react';
import ServerList from '../components/ServerList';

const mockServers = [
  { id: 1, name: 'Server 1', ip: '192.168.1.1', status: 'Up', responseTime: '120ms', uptime: '99.9%' },
  { id: 2, name: 'Server 2', ip: '192.168.1.2', status: 'Down', responseTime: 'N/A', uptime: '88.7%' },
  { id: 3, name: 'Server 3', ip: '192.168.1.3', status: 'Degraded', responseTime: '500ms', uptime: '75.4%' },
];

function Dashboard() {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    // Simulate API Fetch
    setServers(mockServers);
  }, []);

  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Server Status Dashboard</h1>

      </div>
      <ServerList servers={servers} />
    </div>
  );
}

export default Dashboard;
