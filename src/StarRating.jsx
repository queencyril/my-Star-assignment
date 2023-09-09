// import { range } from "./utils";

function StarRating({ rating }) {
  return (
    <div className="star-wrapper">
      {range(0, rating).map((ratingIndex) => {
        return (
          <Star />
        );
      })}
    </div>
  );
}

function Star() {
  return (
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
  );
}