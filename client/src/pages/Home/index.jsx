import styles from "./styles.module.css";
import React, { useState } from 'react';
function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};
	const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
	return(
		<div className={styles.container}>
			<h1 className={styles.heading}>Compose Mail</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/profile.jpg" alt="login" />
				</div>
				
				<div className={styles.right}>
				<form onSubmit={handleSubmit}>
					<h2 className={styles.from_heading}>Profile</h2>
					<img
						src={user.picture}
						alt="profile"
						className={styles.profile_img}
					/>
					<br/>
					<input
						type="email"
						defaultValue={user.email}
						className={styles.input}
						placeholder="Email"
					/>
					<input
						type="email"
						className={styles.input}
						placeholder="To address"
						required
					/>
					<input
						type="text"
						className={styles.input}
						placeholder="Subject"
					/>
					<input
						type="textarea"
						className={styles.input}
						placeholder="Body"
						required
					/><br/>
					<button type="submit" className={styles.btn}>
      					Submit
    				</button>
					<button className={styles.butn} onClick={logout}>
						Logout
					</button>
					
					</form>
					{formSubmitted && (
        <p className={styles.successMessage}>Form submitted successfully!</p>
      )}
				</div>
				
			</div>
		</div>
	);
};
export default Home;
