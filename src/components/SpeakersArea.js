import React from 'react';
import '../styles/SpeakersArea.css';
import panelist1 from '../components/assests/images/panelist-1.webp';
import panelist2 from '../components/assests/images/panelist-2.webp';
import panelist3 from '../components/assests/images/panelist-3.webp';
import panelist4 from '../components/assests/images/panelist-4.webp';
import panelist5 from '../components/assests/images/panelist-5.webp';
import panelist6 from '../components/assests/images/panelist-6.webp';

const SpeakersArea = () => {
    return (
        <section className='speakers-section'>
            <h2 className='heading'>Previous <span>Speakers</span></h2>
            <div className='container'>
                <div className='panelist-card panelist-blue'>
                    <img src={panelist1} alt='' className='panelist-image'></img>
                    <div className='panelist-details'>
                        <p className='panelist-role'>Panelist</p>
                        <h3 className='panelist-name'>Alice Njoroge</h3>
                        <p className='panelist-title'>Insights and analytics Professional</p>
                        <a href='#' className='view-profile'>View Profile &rarr;</a>
                    </div>
                </div>
                <div className='panelist-card panelist-green'>
                    <img src={panelist2} alt='' className='panelist-image'></img>
                    <div className='panelist-details'>
                        <p className='panelist-role'>Panelist</p>
                        <h3 className='panelist-name'>Luther Hinga</h3>
                        <p className='panelist-title'>Recylability Consultant - CIRCPACK</p>
                        <a href='#' className='view-profile'>View profile &rarr;</a>
                    </div>
                </div>
                <div className='panelist-card panelist-red'>
                    <img src={panelist3} alt='' className='panelist-image'></img>
                    <div className='panelist-details'>
                        <p className='panelist-role'>Panelist</p>
                        <h3 className='panelist-name'>Makenzi Muthusi</h3>
                        <p className='panelist-title'>Partner, Deal Advisory and Strategy KPMG East Africa</p>
                        <a href='#' className='view-profile'>View profile &rarr;</a>
                    </div>
                </div>
                <div className='panelist-card panelist-green'>
                    <img src={panelist4} alt='' className='panleist-image'></img>
                    <div className='panelist-details'>
                        <p className='panelist-role'>Panelist</p>
                        <h3 className='panelist-name'>Juliet Odhiambo</h3>
                        <p className='panelist-title'>Personal Finance Trainer and Money Coach</p>
                        <a href='#' className='view-profile'>View profile &rarr;</a>
                    </div>
                </div>
                <div className='panelist-card panelist-red'>
                    <img src={panelist5} alt='' className='panelist-image'></img>
                    <div className='panelist-details'>
                        <p className='panelist-role'>Panelist</p>
                        <h3 className='panelist-name'>James Kiriamiti</h3>
                        <p className='panelist-title'>Head of Marketing & Communications, Global Offerings - cloud & infrastructure DXC Technology</p>
                        <a href='#' className='view-profile'>View profile &rarr;</a>
                    </div>
                </div>
                <div className='panelist-card panelist-blue'>
                    <img src={panelist6} alt='' className='panelist-image'></img>
                    <div className='panelist-details'>
                        <p className='panelist-role'>Panelist</p>
                        <h3 className='panelist-name'>Marjorie Kivuva</h3>
                        <p className='panelist-title'>Co-founder and Partner Torra Agility Africa</p>
                        <a href='#' className='view-profile'>View Profile &rarr;</a>
                    </div>
                </div>
            </div> <br />
            <div className='view-all'>
                <a href='#' className='view'><span className='arrow'>&#8594;</span>View All</a>
            </div>
        </section>
       
    )
};
export default SpeakersArea;