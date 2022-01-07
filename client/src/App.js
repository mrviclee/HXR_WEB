import React from "react";
import ProfileCard from "./Components/ProfileCard";
import styles from "./App.module.css";
import Button from "@mui/material/Button";

const App = () => {
	return (
		<>
			<main>
				<div>
					<ProfileCard />
				</div>
				<div className={styles.text_section}>
					<h1>
						Howdy!
					</h1>
					<h2>
						My name is HuaHua XinXin'
					</h2>
					<div>
						<Button>Resume</Button>
						<Button>Projects</Button>
					</div>
					<div className={styles.description}>
						<p>
							I am an early career electrical engineer from Texas AM University.  My extensive expereience in various research during my undergraduate study provided many opportunities to gain numerous important skills.
						</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default App;
