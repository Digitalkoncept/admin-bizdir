import React from "react";
import Slider from "react-slick";

function Service_Slider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="container">
    <div className="plac-hom-all-pla hom-more-modu">
    <Slider {...settings}>
          <div className="plac-hom-box">
            <div className="plac-hom-box-im">
              <img src="/user/3.jpg" className="b-lazy" alt=""/>
              <div className="inn-text">
                <h4>Explore your travel destination</h4>
                <a href="places/" tabIndex={-1}>Explore Travel <i className="material-icons">arrow_forward</i></a>
              </div>
            </div>
          </div>
          <div className="plac-hom-box">
            <div className="plac-hom-box-im">
              <img src="/user/expert1.jpg" className="b-lazy" alt=""/>
              <div className="inn-text">
                <h4>Find your service experts for your needs</h4>
                <a href="service-experts/" tabIndex={-1}>Book Expert Now <i className="material-icons">arrow_forward</i></a>
              </div>
            </div>
          </div>
          <div className="plac-hom-box">
            <div className="plac-hom-box-im">
              <img src="/user/209891.jpg" className="b-lazy" alt=""/>
              <div className="inn-text">
                <h4>All news updates in one place</h4>
                <a href="news/" tabIndex={-1}>News &amp; Magazines <i className="material-icons">arrow_forward</i></a>
              </div>
            </div>
          </div>
          <div className="plac-hom-box">
            <div className="plac-hom-box-im">
              <img src="/user/11588home2-hand.jpg" className="b-lazy b-loaded" alt=""/>
              <div className="inn-text">
                <h4>Start finding your dream job now</h4>
                <a href="jobs/" tabIndex={-1}>Start finding <i className="material-icons">arrow_forward</i></a>
              </div>
            </div>
          </div>
          <div className="plac-hom-box">
            <div className="plac-hom-box-im">
              <img src="/user/start-selling.jpg" className="b-lazy b-loaded" alt=""/>
              <div className="inn-text">
                <h4>Start selling your products online</h4>
                <a href="all-products" tabIndex={0}>Start selling <i className="material-icons">arrow_forward</i></a>
              </div>
            </div>
          </div>
          <div className="plac-hom-box">
            <div className="plac-hom-box-im">
              <img src="/user/coupon-deals.jpg" className="b-lazy b-loaded" alt=""/>
              <div className="inn-text">
                <h4>Coupon and deals for your shopping</h4>
                <a href="coupons" tabIndex={0}>Coupons <i className="material-icons">arrow_forward</i></a>
              </div>
            </div>
          </div>
    </Slider>
    </div>
    </div>
  );
}

export default Service_Slider;
