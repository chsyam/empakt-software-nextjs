"use client";

import styles from "./../../../styles/PromotionalInfo.module.css";
import React from "react";

export default function PromotionalInfo() {
	return (
		<div className={styles.container}>
			<div className={styles.pageContainer}>
				<div className={styles.promotionalInfoContainer}>
					<div className="my-[20px] text-[22px] sm:text-4xl md:text-5xl text-center font-semibold tracking-wide leading-9 sm:leading-10 md:leading-18">
						Empakt is a leading staffing agency that assures quality
						<span className="text-[#2AC2BC] pl-3">
							staffing solutions to employers.
						</span>
					</div>
					<div className="text-justify my-[20px] font-medium text-[#454545] tracking-wide text-[18px] sm:text-[20px] md:text-[22px]">
						For the growth of a business, employees play a significant role.
						Every employer wants talented and proficient workers for the
						organization. At Empakt, we fulfill your wish with meticulousness.
						With more than 15 years of experience in this field, we guarantee
						top-quality staffing solutions.
					</div>
				</div>
			</div>
		</div>
	);
}
