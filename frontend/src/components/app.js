import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

// import PostsContainer from './posts/posts_container';
import PostComposeContainer from './posts/post_compose_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import SearchContainer from './search/search_container';

import EditPost from "./posts/post_edit_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/posts" component={SearchContainer} />
        {/* <ProtectedRoute exact path="/search" component={SearchContainer} /> */}
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/posts/new_post" component={PostComposeContainer} />
        <ProtectedRoute exact path="/posts/:id" component={EditPost} />
    </Switch>
    </div>
      
);

export default App;