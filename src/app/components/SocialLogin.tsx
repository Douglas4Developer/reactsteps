import facebookIcon from "@/assets/face.png";
import googleIcon from "@/assets/google.png";
import styles from "../styles/login.module.css";
import Image from 'next/image';

export default function SocialLogin() {
  return (
    <div className={styles.socialLogin}>
      <button className={styles.socialButton}>
      <Image src="/path/to/image.png" alt="Descrição" width={50} height={50} />
      </button>
      <button className={styles.socialButton}>
      <Image src="/path/to/image.png" alt="Descrição" width={50} height={50} />
      </button>
    </div>
  );
}
