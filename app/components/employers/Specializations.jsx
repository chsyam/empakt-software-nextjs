"use client";

import styles from "./../../../styles/Specializations.module.css";
import React from "react";
import Image from "next/image";

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
						<div className={styles.grid_container}>
							<div className={styles.specialization_card}>
								<Image
									src={"/images/specializations/information_technology.png"}
									alt="Information Technology"
									width={35}
									height={35}
									className="mx-[10px]"
								/>
								Information Technology
							</div>
							<div className={styles.specialization_card}>
								<Image
									src={"/images/specializations/banking-financial-services.png"}
									alt="Information Technology"
									width={35}
									height={35}
									className="mx-[10px]"
								/>
								Banking & Financial Services
							</div>
							<div className={styles.specialization_card}>
								<Image
									src={"/images/specializations/pharmaceuticals-healthcare.png"}
									alt="Information Technology"
									width={35}
									height={35}
									className="mx-[10px]"
								/>
								Pharmaceuticals & Healthcare
							</div>
							<div className={styles.specialization_card}>
								<Image
									src={"/images/specializations/telecom.png"}
									alt="Information Technology"
									width={35}
									height={35}
									className="mx-[10px]"
								/>
								Telecom
							</div>
							<div className={styles.specialization_card}>
								<Image
									src={"/images/specializations/automobile.png"}
									alt="Information Technology"
									width={35}
									height={35}
									className="mx-[10px]"
								/>
								Automobile
							</div>
							<div className={styles.specialization_card}>
								<Image
									src={"/images/specializations/manufacturing.png"}
									alt="Information Technology"
									width={35}
									height={35}
									className="mx-[10px]"
								/>
								Manufacturing
							</div>
							<div className={styles.specialization_card}>
								<Image
									src={"/images/specializations/engineering.png"}
									alt="Information Technology"
									width={35}
									height={35}
									className="mx-[10px]"
								/>
								Engineering
							</div>
							<div className={styles.specialization_card}>
								<Image
									src={"/images/specializations/construction.png"}
									alt="Information Technology"
									width={35}
									height={35}
									className="mx-[10px]"
								/>
								Construction
							</div>
							<div className={styles.specialization_card}>
								<Image
									src={"/images/specializations/semiconductor.png"}
									alt="Information Technology"
									width={35}
									height={35}
									className="mx-[10px]"
								/>
								Semiconductor
							</div>
							<div className={styles.specialization_card}>
								<Image
									src={"/images/specializations/e-commerce.png"}
									alt="Information Technology"
									width={35}
									height={35}
									className="mx-[10px]"
								/>
								E-commerce
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
