import React from 'react';
import '../styles/FocusAreas.css';

import careerIcon from '../components/assests/images/career.svg';
import entrepreneurshipIcon from '../components/assests/images/entrepreneurship.svg';
import investmentsIcon from '../components/assests/images/investments.svg';

const FocusAreas = () => {
    return (
        <div className='areaSection'>
            <h2 className='areaContainer'>Key Focus Areas</h2>
            <div className='Container'>
                <div className='area-box careers'>
                    <div className='icon'>
                        <img src= {careerIcon} alt=""></img>
                    </div>
                    <h3>Empowering Careers</h3>
                    <p>Insights, Strategies, and guidance for starting your career journey
                        and thriving in your chosen field.
                    </p>
                </div>
                <div className='area-box entrepreneurship'>
                    <div className='icon'>
                        <img src= {entrepreneurshipIcon} alt=''></img>
                    </div>
                    <h3>Entrepreneurship</h3>
                    <p>Discover pathways to global success and explore opportunities in international markets.</p>
                </div>
                <div className='area-box investments'>
                    <div className='icon'>
                        <img src= {investmentsIcon} alt=''></img>
                    </div>
                    <h3>Investments</h3>
                    <p>Learn how to establish and grow ventures that transcend geographical boundaries.</p>
                </div>
            </div>
        </div>
    );
};

export default FocusAreas;