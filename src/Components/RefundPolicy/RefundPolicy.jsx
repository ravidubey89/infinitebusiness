import React from 'react'
import "./RefundPolicy.css"
const RefundPolicy = () => {

  return (
    <div className='commonContents'>
      <div className='container'>
        <h3>Refund Policy</h3>
        {/* <h5 className='sub-heading'>Privacy Policy for Infinite Epicenter

        </h5> */}

        <p> At Infinite Epicenter, we strive to provide high-quality services that meet the expectations of our clients. However, we understand that there may be instances where refunds or cancellations are required. Please carefully read our policy outlined below:
        </p>
        <div className='privacy-policy-repeat'>
          <strong>Cancellation of Services</strong>
          <p>Customers may request the cancellation of services within [specify time period, e.g., 24 hours] after placing an order.
          </p>
          <p>To cancel a service, please contact our customer support team at [email/contact number].
          </p>
          <p>If the service has already commenced or has been fully provided, cancellation may not be possible.
          </p>
        </div>


        <div className='privacy-policy-repeat'>
          <strong>Refund Eligibility</strong>
          <b>Refunds will be provided under the following circumstances:</b>
          <p>The service was not delivered as per the agreed terms.
            The service delivery was delayed beyond the specified timeframe due to reasons within our control.
          </p>
          <p>A written refund request is submitted within [specify timeframe, e.g., 7 days] from the date of purchase.
          </p>
          <b>
            Refunds will not be granted for:
          </b>
          <ul>
            <li>Change of mind after the service has been provided.</li>
            <li>Misuse or mishandling of the service by the customer.</li>
            <li>Services already in progress or completed at the time of the refund request.</li>
          </ul>
        </div>

        <div className='privacy-policy-repeat'>
          <strong>Refund Process</strong>
          <p>Refunds will be processed within [specify timeframe, e.g., 7-14 business days] from the date of approval.</p>
          <p>Refunds will be credited to the original payment method used for the transaction.
            In the event of a delay, please allow additional time for your bank or credit card provider to process the refund.
          </p>

        </div>

        <div className='privacy-policy-repeat'>
          <strong>Non-Refundable Services</strong>
          <b>Certain services are non-refundable, including but not limited to:</b>
          <ul>
            <li>Custom consulting services</li>
            <li>One-time project fees</li>
            <li>Digital marketing campaigns already launched</li>
          </ul>
        </div>

        <div className='privacy-policy-repeat'>
          <strong>Disputes</strong>
          <p>In case of any disputes regarding cancellations or refunds, we encourage customers to reach out to our support team. We will make every effort to resolve the issue promptly.
          </p>
        </div>



      </div>
    </div>
  )
}

export default RefundPolicy