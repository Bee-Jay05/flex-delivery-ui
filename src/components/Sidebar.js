import React from 'react';

const Sidebar = () => {
  const items = [
    'Dashboard','Users','All Listings','Delivery Jobs','Delivery Offers','Marketplace',
    'Flex Reward','Disputes','Transactions','User Support Ticket','Settings','Blog & Broadcast','Templates','Audit Logs'
  ];
  return (
    <aside className="sidebar">
      <div className="logo">FLEX<span>Delivery</span></div>
      <nav className="nav">
        {items.map((it, i) => (
          <div key={i} className={`nav-item ${it==='Marketplace' ? 'active' : ''}`}>
            {it}
          </div>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="dev-pill">Dev v2.0</div>
      </div>
    </aside>
  );
};

export default Sidebar;
