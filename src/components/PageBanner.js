import React, { Component } from 'react'
import Img from 'gatsby-image'
import SliderSection from './SliderSection'

export default class Banner extends Component {
  render() {
    const { banner, title } = this.props;
    return (
      <SliderSection>
            <div className="item">
              <div className="site-Banner">
                <Img sizes={banner.fluid} style={{ height: '200px', opacity: '0.6' }} />
                <div className="Banner-details">
                  <h1 style={{ marginTop: '-100px', color: '#fff' }}>{title}</h1>
                </div>
              </div>
            </div>
      </SliderSection>
    );
  }
}
