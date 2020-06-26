import React, { Component } from 'react'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import SliderSection from './SliderSection'
import logo from '../../static/images/logo-nobg.png';

var settings = {
  dots: true,
  speed: 500,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: 'Book an appointment'
    }
  }
  showPhoneNumber = () => this.setState({ buttonText: 'Call 416-488-2161' })
  render() {
    const { bannerData } = this.props
    return (
      <SliderSection>
        <Slider {...settings}>
          {bannerData.map((items, i) => (
            <div key={i} className="item">
              <div className="site-Banner">
                <Img sizes={items.node.image.fluid} />
                <div className="Banner-details">
                  <div>
                    <img src={logo} alt="Salon Afif logo" style={{ height: '100px', width: 'auto', margin: '0 auto 20px auto' }} />
                    <a href="tel:416-488-2161" className="mobile-button">{this.state.buttonText}</a>
                    <a onClick={this.showPhoneNumber} className="desktop-button">{this.state.buttonText}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </SliderSection>
    );
  }
}
