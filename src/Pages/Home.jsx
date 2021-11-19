import React, { useEffect } from "react";
import { connect } from "react-redux";
import CarouselCardsComponent from "../Components/CarouselCardsComponent/CarouselCardsComponent";
import { getMostPopular } from "../redux/MostPopular/MostPopular.Action";
import { getTopRated } from "../redux/TopRated/TopRated.Action";
import axios from "axios";
function Home(props) {
  useEffect(() => {
    props.getMostPopular();
    props.getTopRated();
  }, []);
  return (
    <div>
      {props.isLoadingMostPopular ? null : (
        <CarouselCardsComponent
          showItem={1.7}
          cards={props.mostPopularMovies}
          isLoading={props.isLoadingMostPopular}
          isTop={true}
        />
      )}
      {props.isLoadingTopRated ? null : (
        <CarouselCardsComponent
          showItem={6}
          cards={props.topRated}
          isLoading={props.isLoadingTopRated}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoadingMostPopular: state.mostPopularMovies.isFetchingMostPopularMovies,
    mostPopularMovies: state.mostPopularMovies.mostPopularMovies,
    isLoadingTopRated: state.topRated.isFetchingtopRated,
    topRated: state.topRated.topRated,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getMostPopular: () => dispatch(getMostPopular()),
  getTopRated: () => dispatch(getTopRated()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
