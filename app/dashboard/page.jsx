"use client"
import ServerList from '../components/ServerList';

const mockServers = [
  { id: 1, name: 'Server 1', ip: '192.168.1.1', status: 'Up', responseTime: '120ms', uptime: '99.9%' },
  { id: 2, name: 'Server 2', ip: '192.168.1.2', status: 'Down', responseTime: 'N/A', uptime: '88.7%' },
  { id: 3, name: 'Server 3', ip: '192.168.1.3', status: 'Degraded', responseTime: '500ms', uptime: '75.4%' },
  { id: 4, name: 'Server 4', ip: '192.168.1.4', status: 'Up', responseTime: '80ms', uptime: '98.5%' },
  { id: 5, name: 'Server 5', ip: '192.168.1.5', status: 'Degraded', responseTime: '200ms', uptime: '92.3%' },
  { id: 6, name: 'Server 6', ip: '192.168.1.6', status: 'Up', responseTime: '100ms', uptime: '99.5%' },
  { id: 7, name: 'Server 7', ip: '192.168.1.7', status: 'Down', responseTime: 'N/A', uptime: '65.2%' },
  { id: 8, name: 'Server 8', ip: '192.168.1.8', status: 'Up', responseTime: '50ms', uptime: '99.8%' },
  { id: 9, name: 'Server 9', ip: '192.168.1.9', status: 'Degraded', responseTime: '300ms', uptime: '90.4%' },
  { id: 10, name: 'Server 10', ip: '192.168.1.10', status: 'Up', responseTime: '150ms', uptime: '97.1%' },
  { id: 11, name: 'Server 11', ip: '192.168.1.11', status: 'Down', responseTime: 'N/A', uptime: '50.0%' },
  { id: 12, name: 'Server 12', ip: '192.168.1.12', status: 'Degraded', responseTime: '600ms', uptime: '85.3%' },
  { id: 13, name: 'Server 13', ip: '192.168.1.13', status: 'Up', responseTime: '110ms', uptime: '99.0%' },
  { id: 14, name: 'Server 14', ip: '192.168.1.14', status: 'Up', responseTime: '95ms', uptime: '96.5%' },
  { id: 15, name: 'Server 15', ip: '192.168.1.15', status: 'Down', responseTime: 'N/A', uptime: '72.4%' },

];


const  Dashboard =async()=> {
let servers
try{
 servers = mockServers
}catch(error){
  console.log(error)
}
  

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
