import React from "react";

export default function CardComponent(props) {
  return (
    <div>
      {props.sendSearchState?.map((result) => (
        <div className="my-2 d-flex">
          <img
            src={process.env.REACT_APP_MEDIA_URL + result?.poster_path}
            alt={result?.poster_path}
            height="100px"
          />
          {result.title}
          {result.release_date.substring(0, 4)}
        </div>
      ))}
    </div>
  );
}
