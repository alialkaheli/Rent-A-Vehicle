import Geocode from 'react-geocode';


export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }
    
     updateMarkers(posts) {

         const postsObj = {};
         posts.forEach(post => postsObj[post._id] = post);
        //  console.log(posts, 'postsObj');
         

        posts
            .filter(post => !this.markers[post._id])
            .forEach(newPost => this.createMarkerFromPost(newPost, this.handleClick));
            


        Object.keys(this.markers)
            .filter(postId => !postsObj[postId])
            .forEach((postId) => this.removeMarker(this.markers[postId]));

     }

     createMarkerFromPost(post) {
         post.pickup = "University of California San Francisco";
         Geocode.setApiKey("AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U");
            let latitude;
            let longitude;
            Geocode.fromAddress(post.pickup).then(
             response => {
               const {
                     lat,
                     lng
                 } = response.results[0].geometry.location;
                 latitude = lat;
                 longitude = lng;
                 console.log(post);
                 console.log(lat, lng, latitude, longitude, 'these are the coordinates');
                const position = new window.google.maps.LatLng(latitude, longitude);
                const marker = new window.google.maps.Marker({
                    position,
                    map: this.map,
                    postId: post._id
                });
                this.markers[marker.postId] = marker;
             },
             error => {
                 console.error(error);
             }
         );
         
        //  console.log(addy, 'this is the address');
        // console.log('the latitude', latitude, longitude);
        //  console.log(post, 'this post is passed to createMarker');
        // const position = new window.google.maps.LatLng(latitude, longitude);
        // console.log('position is', position);
        // const marker = new window.google.maps.Marker({
        //     position,
        //     map: this.map,
        //     postId: post._id
        // });
        // console.log(marker, `the marker is at ${marker.position} the post is ${marker.postId}`);
       

        // marker.addListener('click', () => this.handleClick(post));
        // this.markers[marker.postId] = marker;
        // console.log(this.markers);
     }
}