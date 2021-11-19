import React from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { MdPlayArrow } from "react-icons/md";
import { Col } from "react-bootstrap";
import moment from "moment";
import StarRatings from "react-star-ratings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselCardsComponent.css";
export default function CarouselCardsComponent(props) {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 1000,
    slidesToShow: props.showItem,
    slidesToScroll: 6,
    // rtl: true,
    prevArrow: (
      <AiOutlineDoubleLeft className="click_color  color-primary-xlight" />
    ),
    nextArrow: (
      <AiOutlineDoubleRight className="click_color  color-primary-xlight" />
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: props.showItem,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="carousel_card small-carousel ">
      {props.isLoading ? (
        <div>ddd</div>
      ) : (
        <Slider {...settings}>
          {props.cards?.map((card) => (
            <Col xs={12} key={card.id} className="px-1">
              <div className="poster">
                <img
                  src={process.env.REACT_APP_MEDIA_URL + card?.poster_path}
                  className="w-100"
                  style={props.isTop ? { height: "155px" } : null}
                />
                <MdPlayArrow className="play_icon_carousel  " />
                <div className="carousel_data px-2 pb-3 d-none d-lg-block">
                  <div className=" carousel_icons">
                    <h6 className="text-white">{card?.title}</h6>
                    <StarRatings
                      rating={card.vote_average}
                      starRatedColor="#ffbf00"
                      numberOfStars={5}
                      name="rating"
                      className="rate"
                    />
                    <p className="text-cut-1">{card?.overview}</p>
                  </div>
                  <div className="movie-label my-1">
                    <span className="mx-1 ">
                      {moment(card.release_date).format("yyyy")}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Slider>
      )}
    </div>
  );
}
