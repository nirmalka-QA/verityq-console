import React, { useState } from 'react';

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [premiumImpact, setPremiumImpact] = useState(0);

  const addVehicle = () => {
    if (vehicles.length < 3) {
      const newVehicle = { id: vehicles.length + 1, name: '', premiumImpact: 0 };
      setVehicles([...vehicles, newVehicle]);
    } else {
      alert('You can only add up to three vehicles.');
    }
  };

  const editVehicle = (id, updatedVehicle) => {
    const updatedVehicles = vehicles.map(vehicle =>
      vehicle.id === id ? { ...vehicle, ...updatedVehicle } : vehicle
    );
    setVehicles(updatedVehicles);
  };

  const removeVehicle = (id) => {
    const updatedVehicles = vehicles.filter(vehicle => vehicle.id !== id);
    setVehicles(updatedVehicles);
  };

  const calculatePremiumImpact = () => {
    let totalImpact = vehicles.reduce((acc, vehicle) => acc + vehicle.premiumImpact, 0);
    if (vehicles.length >= 2) {
      totalImpact *= 0.9; // Apply 10% discount
    }
    setPremiumImpact(totalImpact);
  };

  return (
    <div>
      <h2>Manage Your Vehicles</h2>
      <button onClick={addVehicle}>Add Vehicle</button>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            <input
              type="text"
              placeholder="Vehicle Name"
              value={vehicle.name}
              onChange={(e) => editVehicle(vehicle.id, { name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Premium Impact"
              value={vehicle.premiumImpact}
              onChange={(e) => editVehicle(vehicle.id, { premiumImpact: parseFloat(e.target.value) })}
            />
            <button onClick={() => removeVehicle(vehicle.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={calculatePremiumImpact}>Calculate Premium Impact</button>
      <p>Total Premium Impact: ${premiumImpact.toFixed(2)}</p>
    </div>
  );
};

export default VehicleManagement;