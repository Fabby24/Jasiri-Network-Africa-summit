import React  from "react";
import summitImage from '../components/assests/images/Summit-Theme.webp'
import '../styles/theme.css';

const Theme = () => {
    return (
        <section className="summit-sections">
            <div className="summit-container">
                <div className="summit-text">
                    <h4 className="summit-subtitle">Summit Theme</h4>
                    <h2 className="summit-title">
                        Bridging Borders, Empowering Careers, Investments, and Entrepreneurship
                    </h2>
                    <p>
                        Join us for Jasiri Network 2025, where professionals, entrepreneurs, and thought leaders come together to explore opportunities and build connections across borders.
                    </p>
                    <p>
                        With this year's theme, <strong>"Bridging Borders: Empowering Careers, Investments, and Entrepreneurship,"</strong> we'll delve into the unique challenges and opportunities faced by Africans and how we can leverage the African diaspora professionals and entrepreneurs for growth and impact.
                    </p>
                    <a href="#" className="summit-link"> <span className="arrow-circle">&#8593;</span> Buy Ticket</a>
                </div>
                <div className="summit-image">
                    <img src={summitImage} alt="Jasiri Summit" />
                </div>

            </div>
        </section>
    );
};

export default Theme;