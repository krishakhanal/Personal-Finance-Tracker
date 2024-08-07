import React, { useState } from 'react';

const Settings = () => {
  // State to manage form data
  const [preferences, setPreferences] = useState({
    theme: 'light', // Example preference
    notifications: true, // Example preference
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreferences(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to save preferences
    console.log('Preferences saved:', preferences);
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Theme:
            <select
              name="theme"
              value={preferences.theme}
              onChange={handleChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Enable Notifications:
            <input
              type="checkbox"
              name="notifications"
              checked={preferences.notifications}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
