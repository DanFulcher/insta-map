import React from 'react';
import {connect} from 'react-redux';
import Map from './components/Map';

import {selectPost} from './actions/mapActions';
import './App.css';

const App = ({selectedPost, selectPost}) => (
  <div className="App">
    <Map 
      selectedPost={selectedPost} 
      selectPost={selectPost}
    />
  </div>
)

const mapStateToProps = state => ({
  selectedPost: state.selectedPost,
}); 
const mapDispatchToProps = dispatch => ({
  selectPost: (id) => { dispatch(selectPost(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
