"use client";

import Image from "next/image";
import styles from "./../../../styles/HowDoesItWorks.module.css";
import React from "react";

export default function HowDoesItWorks() {
	return (
		<div className={styles.container}>
			<div className={styles.pageContainer}>
				<div id="how-does-it-work" className={styles.howItWorksContainer}>
					<div className={styles.form_block}>
						<div className={styles.form_title}>How does it Works?</div>
						<div className={styles.description}>
							At Empakt, we endorse simple and hassle-free recruitment for
							employers. You can hire top candidates to meet your organization's
							goals and requirements. We listen to the requirements of employers
							with preciseness and put efforts into providing the most
							satisfactory recruitment solution.
							<br />
							<br />
							Attract the best talent to your company and stay ahead in
							competition with the top-notch recruitment service from Empakt. We
							believe in ethical business policies. Thus, there will be no
							hidden terms and conditions for the employers. You get the service
							that you exactly need, and you can enjoy a long-term association
							with our company for quality recruitment service.
						</div>
					</div>
					<div className={styles.form_block}>
						<Image
							src="/images/hiring.png"
							alt="Register a Vacancy"
							width={600}
							height={600}
							className="aspect-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
