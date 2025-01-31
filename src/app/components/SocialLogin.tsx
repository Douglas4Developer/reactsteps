import facebookIcon from "@/assets/face.png";
import googleIcon from "@/assets/google.png";
import styles from "../styles/login.module.css";

export default function SocialLogin() {
  return (
    <div className={styles.socialLogin}>
      <button className={styles.socialButton}>
        <img src={facebookIcon.src} alt="Facebook" width={70} height={20} /> 
      </button>
      <button className={styles.socialButton}>
        <img src={googleIcon.src} alt="Google" width={70} height={20} /> 
      </button>
    </div>
  );
}
