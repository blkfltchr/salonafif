import styled from '@emotion/styled'

const SliderSection = styled.div`
  background-image: linear-gradient(rgba(255,255,255,0.33),rgba(255,255,255,0.33));
  .slick-slider .slick-list div {
    display: inline-block;
    width: 100%;
    height: calc(100vh - 100px);
  }
  .slick-slider .slick-arrow {
    display: none !important;
  }
  .slick-dots {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%,0);
    -webkit-transform: translate(-50%,0);
    -moz-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
  }
  .slick-slider {
    position: relative;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    padding: 5px;
    color: transparent;
    border: 0;
    outline: none;
    background: black;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 50%;
    background: darkgray;
  }
  .slick-dots li {
    display: inline-block;
    position: relative;
    margin: 0 5px;
    padding: 0;
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
  .slick-dots li.slick-active button {
    background: black;
  }
  .slick-list {
    overflow: hidden;
  }
  .site-Banner {
    width: 100%;
    position: relative;
  }
  .site-Banner .Banner-details {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    max-width: 90%;
    z-index: 1;
    text-align: center;
  }
  .site-Banner .Banner-details h1 {
    color: #000;
    margin: 0 auto 1em auto;
    font-size: 1.75em;
    @media screen and (min-width: 768px) {
      font-size: 2.5em;
      max-width: 700px;
    }
  }
  .slick-slider .slick-list div img {
    width: 100%;
    margin: 0;
  }
  .slick-slider .slick-list .site-Banner:before {
    content: "";
    background: #0000004a;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    height: calc(100% - 1px);
    background-image: linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3));
  }
  .site-Banner .Banner-details .sub-title {
    color: #fff;
    margin: 20px 0;
    font-size: 1.5em;
    display:  block;
  }
  .site-Banner .Banner-details a {
    background: ${props => props.theme.colors.accent};
    color: #fff;
    text-decoration: none;
    padding: 12px 25px;
    display: inline-block;
    text-decoration: none;
    transition: 0.2s;
    font-weight: 600;
    text-transform: uppercase;
  }
  .mobile-button {
    cursor: pointer;
    @media screen and (min-width: 541px) {
       display: none !important;
    }
  }
  .desktop-button {
    cursor: pointer;
    @media screen and (max-width: 540px) {
       display: none !important;
    }
  }
`

export default SliderSection
