"use client";
import React, { useEffect, useState } from "react";
import PhoneNumberInput from "../contact-us/PhoneNumberInput";
import styles from "./../../../styles/ReferFriendForm.module.css";
import Image from "next/image";

export default function ReferFriendForm() {
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
				<div className={styles.referFriendContainer}>
					<form onSubmit={handleSubmit} className={styles.form_block}>
						<p className="text-sm my-1 pl-2 text-red-600 font-medium">
							All fields are required
							<span className="text-md pl-1">*</span>
						</p>
						<div className={styles.form_group}>
							<div className={styles.form_element}>
								<input placeholder="Your First Name" type="text" required />
							</div>
							<div className={styles.form_element}>
								<input placeholder="Your Last Name" type="text" required />
							</div>
						</div>
						<div className={styles.form_group}>
							<div className={styles.form_element}>
								<input placeholder="Your Email" type="email" required />
							</div>
							<div className={styles.form_element}>
								<PhoneNumberInput placeholder="Your Phone" color="#c7c7c7" />
							</div>
						</div>
						<div className="text-xl font-medium my-3">
							Please enter your buddy's details
						</div>
						<div className={styles.form_group}>
							<div className={styles.form_element}>
								<input placeholder="Buddy's First Name" type="text" required />
							</div>
							<div className={styles.form_element}>
								<input placeholder="Buddy's Last Name" type="text" required />
							</div>
						</div>
						<div className={styles.form_group}>
							<div className={styles.form_element}>
								<input placeholder="Buddy's Email" type="email" required />
							</div>
							<div className={styles.form_element}>
								<PhoneNumberInput placeholder="Buddy's Phone" color="#c7c7c7" />
							</div>
						</div>
						<div className={styles.form_group}>
							<div className={styles.form_element}>
								<textarea
									placeholder="Questions / Comments"
									type="text"
									required
								/>
							</div>
						</div>
						<div className={styles.form_group}>
							<p className="text-sm mt-1 pl-2 text-red-600 font-medium">
								* Please upload Resume in .pdf format
							</p>
							<input type="file" className={styles.fileInput} />
						</div>
						<button className={styles.submit_button} type="submit">
							{submitStatus ? (
								<div className="h-7 w-7 rounded-full animate-spin border-4 border-[#FFFFFF] border-t-transparent mx-auto" />
							) : (
								"Submit"
							)}
						</button>
					</form>
					<div className={styles.form_block}>
						<Image
							src="/images/bring-your-buddy.png"
							alt="Bring your Buddy"
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
