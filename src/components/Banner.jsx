import "./Banner.scss";

export default function Banner({ text, image }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {text ? <h1 className="banner__title">{text}</h1> : null}
    </div>
  );
}
