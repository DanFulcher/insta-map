import React, {Component} from 'react';
import styled from 'styled-components';
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl';
import axios from 'axios';

import Polaroid from '../Polaroid';

class Map extends Component {

    state = {
      viewport: {
        width: '100vw',
        height: '95vh',
        latitude: 51.5074,
        longitude: 0.1278,
        zoom: 6
      },
      posts: []
    };

    componentDidMount () {
      let token = '1430778726.8345c8a.1f256888c4654233b7fe840f6288323e';

      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token)
        .then(res => {
          this.setState({ posts: res.data.data });
        })
        .catch(err => {
            console.log(err)
        })

    }
  
    render() {
      const NavContainer = styled.div`
        position:absolute;
        bottom:15px;
        right:15px;
      `;
      return (
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/fulch1408/cjzrkwgts3vs11cnm1t7xbod3"
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          <NavContainer>
            <NavigationControl />
          </NavContainer>
          
              
          {this.state.posts.map((post, index) => ( 
            <Marker key={index} latitude={post.location.latitude} longitude={post.location.longitude}>
              <Polaroid 
                img={post.images.thumbnail.url} 
                loc={post.location.name}
                date={post.created_time}
              />
            </Marker>
          ))}
        </ReactMapGL>
      );
    }
  }


export default Map;