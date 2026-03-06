


import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/routes/AnimatedRoutes';

function App() {
  const [user, setUser] = React.useState(null);

  const [detections, setDetections] = React.useState([
    {
      id: 1,
      label: 'Customer: 87%',
      title: 'Aisle 3 - Customer Interaction',
      desc: 'Customer spending time near premium products section',
      time: 'Today, 10:45 AM',
      camera: 'Camera 3',
    },
    {
      id: 2,
      label: 'Queue: 5 people',
      title: 'Checkout Area - Queue Alert',
      desc: 'Queue length exceeds threshold, consider opening another register',
      time: 'Today, 12:30 PM',
      camera: 'Camera 1',
    },
    {
      id: 3,
      label: 'Empty Shelf: 92%',
      title: 'Aisle 5 - Stock Alert',
      desc: 'Popular product running low on shelf, consider restocking',
      time: 'Today, 09:15 AM',
      camera: 'Camera 2',
    },
  ]);

  const addDetection = (newDetection) => {
    setDetections([...detections, { id: Date.now(), ...newDetection }]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 sm:max-w-screen">
      {/* Navbar */}
      <Navbar user={user} setUser={setUser} />

      {/* Main content */}
      <main className="flex-grow pt-14">
        <AnimatedRoutes detections={detections} addDetection={addDetection} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
