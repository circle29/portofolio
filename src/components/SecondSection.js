import profile from "../image/adi photo.png";

function SecondSection() {
  return (
    <div id="second">
      <img
        className="secondpict"
        src={profile}
        height="500px"
        width="500px"
        alt="picture"
      />
      <div>
        <p className="About">About Me</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
export default SecondSection;
