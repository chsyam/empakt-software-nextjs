"use client";

import Image from "next/image";
import styles from "./../../../styles/RegisterJobVacancy.module.css";
import PhoneNumberInput from "../contact-us/PhoneNumberInput";
import React, { useEffect, useState } from "react";

export default function RegisterJobVacancy() {
	const [submitStatus, setSubmitStatus] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitStatus(true);
	};

	useEffect(() => {
		if (submitStatus) {
			const timeout = setTimeout(() => {
				setSubmitStatus(false);
			}, 2000);
			return () => clearTimeout(timeout);
		}
	}, [submitStatus]);

	return (
		<div className={styles.container}>
			<div className={styles.pageContainer}>
				<div id="register-job-vacancy" className={styles.jobVacancyContainer}>
					<div className={styles.form_block}>
						<div className={styles.form_title}>Register a Job Vacancy</div>
						<div className={styles.description}>
							Looking for the perfect talent for your company? Post a job now
							and connect with skilled, passionate candidates ready to excel in
							your role.
						</div>
						<form onSubmit={handleSubmit} className={styles.form}>
							<p className="text-sm my-1 pl-2 text-red-600 font-medium">
								All fields are required
								<span className="text-md pl-1">*</span>
							</p>
							<div className={styles.form_element}>
								<input placeholder="Please enter name" required />
							</div>
							<div className={styles.form_element}>
								<input placeholder="Please enter email" required />
							</div>
							<div className={styles.form_element}>
								<PhoneNumberInput
									placeholder="Enter your phone"
									color="#c7c7c7"
								/>
							</div>
							<div className={styles.form_element}>
								<textarea
									placeholder="Any Questions / Comments"
									type="text"
									rows={3}
									required
								/>
							</div>
							<button className={styles.submit_button} type="submit">
								{submitStatus ? (
									<div className="h-7 w-7 rounded-full animate-spin border-4 border-[#FFFFFF] border-t-transparent mx-auto" />
								) : (
									"Submit"
								)}
							</button>
						</form>
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
