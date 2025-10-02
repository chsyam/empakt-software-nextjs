"use client";

import Image from "next/image";
import styles from "./../../../styles/EmpaktSoftwareAdvantages.module.css";
import React from "react";

export default function EmpaktSoftwareAdvantages() {
	return (
		<div className={styles.container}>
			<div className={styles.pageContainer}>
				<div id="advantages" className={styles.form_title}>
					Advantages of Choosing Empakt Software
				</div>
				<div className={styles.advantagesContainer}>
					<div className={styles.form_block}>
						<Image
							src="/images/empakt-software-advantages.png"
							alt="Register a Vacancy"
							width={600}
							height={600}
							className="aspect-auto"
						/>
					</div>
					<div className={styles.form_block}>
						<div className={styles.description}>
							We have a large network that connects immensely talented
							executives and managers working successfully in the IT industry
							for years. As a professional staffing company, we prove to be
							advantageous for many reasons. Find the advantages below.
						</div>
						<ul className={styles.list_items}>
							<li>Rapid, high-quality staffing solutions</li>
							<li>Access to well-trained and skilled candidates</li>
							<li>Flexible hiring for both short-term and long-term needs</li>
							<li>Contract-based recruitment for project-specific roles</li>
							<li>Rigorous multi-layer screening to ensure top talent</li>
							<li>Cost-effective staffing solutions</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
