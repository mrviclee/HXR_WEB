import styles from "./ProfileCard.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "../profile.png";

const ProfileCard = () => {
	return (
		<div className={styles.body}>
			<div className={styles.card}>
				<img src={profile} className={styles.img} />
			</div>
            <div className={styles.text}>
					<h1>HuaHua XinXin'</h1>
					<h2>Electrical Engineer</h2>
				</div>
			<div className={styles.footer}>
				<a href="https://www.linkedin.com/in/huaxing-ren-b2909b1a2/">
					<LinkedInIcon fontSize="large" />
				</a>
			</div>
		</div>
	);
};

export default ProfileCard;
