import '../styles/banner.scss';

function Banner({ image, text }) {
  return (
    <div className="container-banner">
      <img src={image} alt="Banner" className="container-banner__image" />
      <p className="container-banner__text">{text}</p>
    </div>
  );
}

export default Banner;