import styles from "./profile.module.css";

const Profile = ({children, profilepic}) => {
  return (
    <div id={styles.profile}> 
      <img src={profilepic} alt="" />
      <p>{children}</p>
    </div>
  );
};

export default Profile;
