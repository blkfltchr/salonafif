import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';
import { useSiteMetadata } from '../hooks/use-site-metadata'

const MapWrapper = styled.div`
    width: 130px;
    padding: 10px;
    margin-left: 10px;
    background-color: white;
    border-radius: 10px;
    font-size: 11px;
    p {
      &:first-of-type {
        font-weight: 700;
      }
    }
    a {
      color: ${props => props.theme.colors.highlight};
    }
`

const SimpleMap = () =>
  <MapWrapper>
    <p>Salon Afif</p>
    <p>2485 Yonge St</p>
    <p>Toronto, ON, M4P 2H6</p>
    <a
      href="https://www.google.com/maps/place/Afif+Salon+Hair+%26+Beauty/@43.7117614,-79.4013035,17z/data=!3m1!4b1!4m5!3m4!1s0x882b3323c5483b5f:0x32adfb4af53dfef2!8m2!3d43.7117614!4d-79.3991148?hl=en"
      target="_blank"
      rel="noopener noreferrer"
    >
      View larger map
    </a>
  </MapWrapper>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 43.71177,
      lng: -79.39917
    },
    zoom: 14
  };

  render() {
    const { googleMapsApiKey } = useSiteMetadata()
    return (
      <div style={{ height: '400px', width: '100%', marginBottom: '3rem' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsApiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <SimpleMap
            lat={43.71177}
            lng={-79.39917}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
