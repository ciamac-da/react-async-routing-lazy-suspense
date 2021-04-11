import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
//import Posts from '../components/Posts';
//import User from '../components/User';
//import Welcome from '../components/Welcome';
const Welcome = React.lazy(()=>import("../components/Welcome.js"))
const Posts   = React.lazy(()=>import("../components/Posts.js"))
const User    = React.lazy(()=>import("../components/User.js"))


class App extends Component {
 /*  state={
    showPosts:false
  }
 */
  /* modeHandler=()=>{
    this.setState(prevState=>{
      return {showPosts: !prevState.showPosts}
    })
  } */
  render() {
    return (
   /*    <React.Fragment>
      <button onClick={this.modeHandler}>Toggle Mode</button>
      {this.state.showPostsow ? ( <Suspense fallback={<div>Loading Posts...</div>}>
      <Posts />
    </Suspense>): <User />}
      </React.Fragment> */
       <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user">User Page</NavLink> &nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route 
          path="/" 
          exact 
          //component={Welcome} 
          render={()=>(
            <Suspense fallback={<div>Loading is in progress...!</div>}>
              <Welcome />
            </Suspense>
          )}
          />
          <Route 
          path="/user" 
          //component={User}
          render={()=>(
            <Suspense fallback={<div>Loading Users...</div>}>
              <User />
            </Suspense>
          )} 
          />
          <Route 
          path="/posts" 
          //component={Posts} 
          render={()=> (
          <Suspense fallback={<div>Loading Posts...</div>}>
            <Posts />
          </Suspense>
          )}
          />
        </React.Fragment>
      </BrowserRouter>  
    );
  }
}

export default App;
