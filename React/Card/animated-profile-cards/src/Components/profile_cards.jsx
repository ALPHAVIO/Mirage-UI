import "./profile_card.css";
import profileImg from "../assets/profile_img.png";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <div className="profile-image">
          <img src={profileImg} alt="profile"></img>
        </div>
      </div>
      <div className="profile-details">
        <div className="name">Aanchal Rakheja</div>
        <div className="post">MEMBER</div>
      </div>
      <div className="links">
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </div>
  );
}
export default ProfileCard;
