import React from 'react';
import Card from '../components/Card';

export default function DeliveryDetails(){
  const deliveryImg = '/assets/delivery.png';
  return (
    <div className="page delivery-details">
      <div className="page-header">
        <h2>Delivery Details</h2>
      </div>

      <Card className="delivery-top">
        <div className="top-grid">
          <div className="image-col">
            <div className="box-image"><img src={deliveryImg} alt="package" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:8}}/></div>
            <div className="thumbs">
              <div className="thumb" />
              <div className="thumb" />
              <div className="thumb" />
              <div className="thumb" />
            </div>
          </div>

          <div className="pickup-col">
            <h3>Pick up & Delivery Details</h3>
            <div className="kv">
              <div><strong>Created at</strong><div>25th Aug 2025</div></div>
              <div><strong>Ad Expiry date</strong><div>25th Aug 2027</div></div>
              <div><strong>Pickup Type</strong><div>From Sender's location</div></div>
              <div><strong>Delivery Type</strong><div>PP, Direct Contact</div></div>
            </div>

            <div className="pick-up-details">
              <div><strong>Name:</strong> Adebayo Ojoba</div>
              <div><strong>Address:</strong> 24 Akinwunmi Road, Egbeda, Alimoso</div>
              <div><strong>Phone Number:</strong> +2348037456908</div>
            </div>
          </div>

          <div className="package-col">
            <h3>Package Details</h3>
            <div className="kv-col">
              <div><strong>Title</strong><div>New Samsung Galaxy S10</div></div>
              <div><strong>Category</strong><div>Electronics</div></div>
              <div><strong>Package Weight</strong><div>5kg</div></div>
              <div><strong>Monetary Worth</strong><div>60,000</div></div>
              <div><strong>Pickup preference</strong><div>No Vehicle</div></div>
              <div><strong>Delivery Fee Invoice Recipient</strong><div>Sender</div></div>
            </div>
          </div>
        </div>
      </Card>

      <div className="lower-row">
        <Card className="small-card">
          <div className="user-box">
            <div className="avatar" />
            <div>
              <div className="name">Bright Azu - Sender</div>
              <div className="rating">⭐ 4.8</div>
            </div>
          </div>
        </Card>

        <Card className="small-card">
          <div className="user-box">
            <div className="avatar" />
            <div>
              <div className="name">Bright Azu - Receiver</div>
              <div className="rating">⭐ 4.6</div>
              <div>Purchase Date: 25th Aug 2025</div>
            </div>
          </div>
        </Card>

        <Card className="small-card empty">
        </Card>
      </div>

      <Card className="views-card">
        <div className="views-title">Views</div>
      </Card>

    </div>
  );
}
