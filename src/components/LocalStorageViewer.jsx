// import React from 'react';
import '../styles/LocalStorageViewer.css';

const LocalStorageViewer = () => {
  const localStorageData = Object.entries(localStorage).map(([key, value]) => {
    return { key, value: JSON.parse(value) };
  });

  return (
    <div className="local-storage-viewer">
      <h2>Local Storage Data</h2>
      <ul>
        {localStorageData.map((item, index) => (
          <li key={index}>
            <strong>{item.key}:</strong> {JSON.stringify(item.value, null, 2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalStorageViewer;