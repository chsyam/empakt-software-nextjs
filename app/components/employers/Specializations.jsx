"use client";

import styles from "./../../../styles/Specializations.module.css";
import React from "react";

export default function Specializations() {
	return (
		<div className={styles.container}>
			<div className={styles.pageContainer}>
				<div id="specializations" className={styles.howItWorksContainer}>
					<div className={styles.form_block}>
						<div className={styles.title}>Specializations</div>
						<div className={styles.description}>
							We specialize in top-quality IT staffing services. We have been
							serving the leading IT companies and many startups for the last 15
							years. During our professional endeavor, we have come across
							different requirements for recruitment services from various IT
							businesses. With an incredible client retention record, we have
							emerged as one of the best recruitment services that operate
							globally.
							<br />
							<br />
							Do you want your business to touch a new height of success with
							the right workforce? Have a look at our proven record from this
							vast list of industry specializarion below:
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
