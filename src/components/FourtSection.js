import piala from "../image/Piala.png";

function FourthSection() {
  return (
    <div id="third">
      <div className="card">
        <img
          src={piala}
          height="200px"
          width="200px"
          alt="piala"
          className="image"
        />
      </div>
      <div className="card">
        <img
          src={piala}
          height="200px"
          width="200px"
          alt="piala"
          className="image"
        />
      </div>
      <div className="card">
        <img
          src={piala}
          height="200px"
          width="200px"
          alt="piala"
          className="image"
        />
      </div>
    </div>
  );
}

export default FourthSection;
