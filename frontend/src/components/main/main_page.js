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
            </div>
        );
    }
}

export default MainPage;