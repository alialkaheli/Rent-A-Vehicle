import React from 'react';
// import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import '../../css_styling/00reset.scss';
import '../../css_styling/map.scss';
import MarkerManager from '../../util/marker_manager';
import '../../css_styling/search.scss';


class PostsMap extends React.Component {
   
    componentDidMount() {
        // this.loadScript();
        // const map = this.initMap();
        this.map = new window.google.maps.Map(document.getElementById("map-container"), {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13
        });
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.posts);
        
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.posts)
        
    }

    // initMap() {
    //     const map = new window.google.maps.Map(document.getElementById("map-container"), {
    //         center: { lat: 37.7758, lng: -122.435},
    //         zoom: 13
    //     });

    //     this.MarkerManager = new MarkerManager(this.map);
    //     console.log(this.MarkerManager);
    //     return map;
    // }

    // loadScript() {
    //     let scriptEl = this.createMapScript();
    //     let scriptsOnPage = document.getElementsByTagName("script");
    //     let script = scriptsOnPage[0];
    //     script.parentNode.insertBefore(scriptEl, script);
    //     // window.initMap= this.initMap;
    // }

    // createMapScript() {
    //     let mapScript = document.createElement('script');
    //     const API_KEY = "AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U";
    //     mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    //     // mapScript.async = true;
    //     // mapScript.defer = true;
    //     return mapScript;
    // }

    render() {
        return(
            <div id="map-container" ref="map">This is where the map goes</div>
        )
    }
}

export default withRouter(PostsMap);