import React from 'react';
import '../../css_styling/splash.scss';

class MainPage extends React.Component {

    render() {
        return (
            <div className="splash-wrapper">
                <div className="splash-image-container">
                    <div className="splash-image">
                        <div className="splash-text">
                            <h1 className="splash-text-upper">Get the transportation you need</h1>
                            <h2 className="splash-text-lower">To reach your destination</h2>
                        </div>
                    </div>
                </div>

                <div className="splash-info-wrapper">
                    <div className="splash-info-container">
                        <div className="splash-info-section">
                            <div className="first-pic"></div>
                            <p className="splash-info-text">Request a vehicle</p>
                        </div>

                        < div className = "splash-info-section" >
                            <div className="second-pic"></div>
                            <p className = "splash-info-text"> Get approved < /p>
                        </div>

                        < div className = "splash-info-section" >
                            <div className="third-pic"></div>
                            <p className = "splash-info-text"> Enjoy your ride! < /p>
                        </div>
                    </div>
                </div>

                <div className="splash-rental-wrapper">
                    <div className="splash-rental-text-container">
                        <h1 className = "splash-rental-text-header" > Get < span className = "text-special" > what < /span> you need, to get <span className="text-special">where</span > you need < /h1>
                        <h2 className="splash-rental-text-lower">Check out the latest rides</h2>
                    </div>

                    <div className="splash-rental-pics-wrapper">
                        <div className="rental-pic-container">
                            <div className="rental-img first"></div>
                        </div>

                        <div className="rental-pic-container">
                            < div className = "rental-img second"></div>
                        </div>

                        <div className="rental-pic-container">
                            <div className = "rental-img third"></div>
                        </div>

                        <div className="rental-pic-container">
                            <div className = "rental-img fourth"></div>
                        </div>
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default MainPage;