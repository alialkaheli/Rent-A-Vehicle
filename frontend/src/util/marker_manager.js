export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }
    
     updateMarkers(posts) {

         const postsObj = {};
         posts.forEach(post => postsObj[post._id] = post);
        //  console.log(posts, 'postsObj');
         

        let otherPosts = posts
            .filter(post => !this.markers[post._id])
            .forEach(newPost => this.createMarkerFromPost(newPost, this.handleClick));
            // console.log(otherPosts, 'otherPosts');


        Object.keys(this.markers)
            .filter(postId => !postsObj[postId])
            .forEach((postId) => this.removeMarker(this.markers[postId]));

     }

     createMarkerFromPost(post) {
        //  console.log(post, 'this post is passed to createMarker');
        const position = new window.google.maps.LatLng(37.768990,-122.426743);
        // console.log('position is', position);
        const marker = new window.google.maps.Marker({
            position,
            map: this.map,
            postId: post._id
        });
        console.log(marker, `the marker is at ${marker.position} the post is ${marker.postId}`);
       

        marker.addListener('click', () => this.handleClick(post));
        this.markers[marker.postId] = marker;
        // console.log(this.markers);
     }
}