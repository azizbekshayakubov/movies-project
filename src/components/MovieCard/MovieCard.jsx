// eslint-disable-next-line react/prop-types
const MovieCard = ({ title, rating, date, img }) => {
  return (
    <div className=" m-4 gap-3  bg-blue-200 ">
      {/* https://www.themoviedb.org/t/p/w220_and_h330_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg */}
      <img src={img} alt="" />
      <h2>{title}</h2>
      <span>{rating}</span>
      <span>{date}</span>
    </div>
  );
};

export default MovieCard;
