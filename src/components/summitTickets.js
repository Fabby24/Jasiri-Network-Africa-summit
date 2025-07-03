import React from 'react';
import '../styles/Tickets.css';

const SummitTickets = () => {
    const tickets = [
        {
            type: 'Mixer Ticket',
            price: 'KES 1,000',
            period: 'Super Early Bird – Valid until 31st July 2025',
            includes: [
                '3rd Dec 2025 - Pre-summit mixer: Welcome drinks and bitings',
                '11th Dec 2025 - Summit Day: Full day summit: panels, networking, presentations, exhibitions',
                'Breakfast, lunch and refreshments',
                'Live streaming: Virtual access to the summit',
                'After party Summit Day: Welcome drinks and bitings'
            ],
            color: '#007f5f',
            buyOptions: [
                { label: 'Early Bird: Aug – Sep 2025', price: 'KES 1,500' },
                { label: 'Standard: Nov 2025', price: 'KES 2,500' },
                { label: 'Last Minute: Dec 2025', price: 'KES 3,500' }
            ]
        },
        {
            type: 'Basic Ticket',
            price: 'KES 5,000',
            period: 'Super Early Bird – Valid until 31st July 2025',
            includes: [
                '3rd Dec 2025 - Pre-summit mixer: Welcome drinks and bitings',
                '11th Dec 2025 - Summit Day: Full day summit: panels, networking, presentations, exhibitions',
                'Breakfast, lunch and refreshments',
                'Live streaming: Virtual access to the summit',
                'After party Summit Day: Welcome drinks and bitings'
            ],
            color: '#d90429',
            buyOptions: [
                { label: 'Early Bird: Aug – Sep 2025', price: 'KES 7,500' },
                { label: 'Standard: Nov 2025', price: 'KES 8,500' },
                { label: 'Last Minute: Dec 2025', price: 'KES 11,500' }
            ]
        },
        {
            type: 'Premium Ticket',
            price: 'KES 7,200',
            period: 'Super Early Bird – Valid until 31st July 2025',
            discount: '20% OFF',
            includes: [
                '3rd Dec 2025 - Pre-summit mixer: Welcome drinks and bitings',
                '11th Dec 2025 - Summit Day: Full day summit: panels, networking, presentations, exhibitions',
                'Breakfast, lunch and refreshments',
                'Live streaming: Virtual access to the summit',
                'After party Summit Day: Welcome drinks and bitings'
            ],
            color: '#023e8a',
            buyOptions: [
                { label: 'Early Bird: Aug – Sep 2025', price: 'KES 10,280' },
                { label: 'Standard: Nov 2025', price: 'KES 12,000' },
                { label: 'Last Minute: Dec 2025', price: 'KES 15,400' }
            ]
        },
        {
            type: 'Virtual Ticket',
            price: 'KES 500',
            period: 'Super Early Bird – Valid until 31st July 2025',
            includes: [
                '3rd Dec 2025 - Pre-summit mixer: Welcome drinks and bitings',
                '11th Dec 2025 - Summit Day: Full day summit: panels, networking, presentations, exhibitions',
                'Breakfast, lunch and refreshments',
                'Live streaming: Virtual access to the summit'
            ],
            color: '#007f5f',
            buyOptions: [
                { label: 'Early Bird: Aug – Sep 2025', price: 'KES 600' },
                { label: 'Standard: Nov 2025', price: 'KES 700' },
                { label: 'Last Minute: Dec 2025', price: 'KES 800' }
            ]
        },
        {
            type: 'After Party Ticket',
            price: 'KES 2,500',
            period: 'Super Early Bird – Valid until 31st July 2025',
            includes: [
                '11th Dec 2025 - After party Summit Day: Welcome drinks and bitings'
            ],
            color: '#d90429',
            buyOptions: [
                { label: 'Early Bird: Aug – Sep 2025', price: 'KES 3,000' },
                { label: 'Standard: Nov 2025', price: 'KES 3,500' },
                { label: 'Last Minute: Dec 2025', price: 'KES 4,000' }
            ]
        },
        {
            type: 'Group Ticket - 5 Tickets',
            price: 'KES 31,500',
            period: 'Super Early Bird – Valid until 31st July 2025',
            discount: '20% OFF',
            includes: [
                '3rd Dec 2025 - Pre-summit mixer: Welcome drinks and bitings',
                '11th Dec 2025 - Summit Day: Full day summit: panels, networking, presentations, exhibitions',
                'Breakfast, lunch and refreshments',
                'Live streaming: Virtual access to the summit'
            ],
            color: '#023e8a',
            buyOptions: [
                { label: 'Early Bird: Aug – Sep 2025', price: 'KES 37,800' },
                { label: 'Standard: Nov 2025', price: 'KES 42,000' },
                { label: 'Last Minute: Dec 2025', price: 'KES 52,500' }
            ]
        }
    ];

    return (
        <section className='summit-section'>
            <h2 className='summit-header'>Get your <br></br><span>Summit Tickets</span></h2>
            <p className='summit-lead'>
                Whether you’re a young professional, thought leader, Executive, seasoned entrepreneur, or investor, this event offers inspiring panel discussions, impactful networking opportunities, and practical advice to help you achieve your goals. Venues to be announced soon! Secure your ticket today and be part of a transformative experience!
            </p>
            <div className='ticket-container'>
                {tickets.map((ticket, index) => (
                    <div className='ticket-card' key={index} style={{ borderLeft: `10px solid ${ticket.color}` }}>
                        <div className='ticket-header'>
                            <button className='buy-now-btn'>
                                BUY NOW
                            </button>
                            <h3>{ticket.type}</h3>
                            <p className='price'>{ticket.price}</p>
                            <p className='validity'>{ticket.period}</p>
                        </div>
                        <hr className='separator' />
                        <p className='includes-title'>Includes:</p>
                        <ul className='includes'>
                            {ticket.includes.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <div className='buy-options'>
                            {ticket.buyOptions.map((opt, i) => (
                                <button key={i} className='buy-btn'>
                                    {opt.label} - {opt.price}
                                </button>
                            ))}
                        </div>
                        {ticket.discount && <span className='discount-badge'>{ticket.discount}</span>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SummitTickets;