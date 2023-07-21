import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import { Link } from 'react-router-dom';

const SideNavigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  return (
    <Sidebar
      sidebar={
        <div>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/list-car">List Car</Link>
            </li>
          </ul>
        </div>
      }
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: 'white', width: '250px' } }}
    >
      <button onClick={() => onSetSidebarOpen(true)}>Buka Sidebar</button>
      <div>Ini adalah konten utama</div>
    </Sidebar>
  );
};

export default SideNavigation;
