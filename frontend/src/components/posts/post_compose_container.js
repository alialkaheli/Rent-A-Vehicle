import { connect } from 'react-redux';
import { composePost, fetchPost } from "../../actions/post_actions";
import PostCompose from './post_compose';

const mapStateToProps = (state) => {
    let post = {
        type: "",
        price: "",
        startdate: "",
        enddate: "",
        description: "",
        pickup: "" };
    return {
        currentUser: state.session.user,
        post: post,
        formType: "Create a Post"
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id)),
        action: data => dispatch(composePost(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCompose);