import profile from "../image/adi photo.png";

function FirstSection() {
  return (
    <div id="first">
      <div>
        <img
          className="firstpict"
          src={profile}
          alt=""
          height="250px"
          width="250px"
        />
      </div>
      <div className="opening">
        <p className="a">
          <b>Hello Everyone !</b>
        </p>
        <p className="b">
          <b>Alexius Adi Nugroho Pratama</b>
        </p>
        <p className="c">
          <b>I'm a Full Stack Web Development</b>
        </p>
        <a href="#second">
          <button>About me</button>
        </a>
      </div>
    </div>
  );
}

export default FirstSection;
