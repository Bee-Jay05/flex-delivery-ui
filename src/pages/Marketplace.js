import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const data = Array.from({length: 10}).map((_,i)=>({
  id: i+1,
  seller: i===0 ? 'Justin Igwe' : 'Bright Eyegbeheme',
  title: i%2? 'Used iPhone XR' : 'Used Curtains',
  location: 'Egbeda',
  price: '₦8,000',
  status: 'Pending',
  date: '12th Oct, 2025'
}));

export default function Marketplace(){
  const heroImg = '/assets/marketplace.png';
  return (
    <div className="page marketplace">
      <div className="market-header">
        <h2>Marketplace</h2>
        <div className="overview">Overview • Total created: 107 • Active: 70</div>
      </div>

      <Card className="filter-card">
        <div style={{display:"flex",justifyContent:"center",marginBottom:12}}><img src={heroImg} alt="market hero" style={{maxWidth:"100%",height:160,objectFit:"cover",borderRadius:8}}/></div>
        <div className="filter-row">
          <input placeholder="Search assets" className="search" />
          <div className="filter-controls">
            <button className="btn">Reset</button>
            <button className="btn primary">Advanced filter</button>
            <button className="btn">Select Columns</button>
          </div>
        </div>

        <div className="advanced-filters">
          <div className="filter-grid">
            <select><option>Item Title</option></select>
            <select><option>Location</option></select>
            <select><option>Ad Selling Mode</option></select>
            <select><option>Status</option></select>
            <input placeholder="From: Minimum Amount" />
            <input placeholder="To: Maximum Amount" />
            <input placeholder="Creation date from" />
            <input placeholder="To" />
          </div>
          <div className="filter-actions">
            <button className="btn">Reset</button>
            <button className="btn primary">Apply filter</button>
          </div>
        </div>
      </Card>

      <Card className="table-card">
        <div className="table-head">
          <div className="th">#</div>
          <div className="th">Seller Name</div>
          <div className="th">Asking Price</div>
          <div className="th">Item Location</div>
          <div className="th">Selling Mode</div>
          <div className="th">Ad Title</div>
          <div className="th">Creation Date</div>
          <div className="th">Status</div>
          <div className="th">Actions</div>
        </div>
        <div className="table-body">
          {data.map(row=>(
            <div className="tr" key={row.id}>
              <div className="td">{row.id}</div>
              <div className="td">{row.seller}</div>
              <div className="td">{row.price}</div>
              <div className="td">{row.location}</div>
              <div className="td">P. Protection, D. Contact</div>
              <div className="td">{row.title}</div>
              <div className="td">{row.date}</div>
              <div className="td status">{row.status}</div>
              <div className="td">
                <Link to={`/delivery/${row.id}`} className="btn small">MORE</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          Items per page
          <select defaultValue="10"><option>10</option><option>25</option><option>100</option></select>
          <div className="pager">1 - 10 of 50 &nbsp; <button className="btn">First</button> <button className="btn">Last</button></div>
        </div>
      </Card>
    </div>
  );
}
