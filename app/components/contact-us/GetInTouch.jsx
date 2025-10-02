import React from "react";
import styles from "./../../../styles/GetInTouch.module.css";
import Phone from "../svgs/Phone";
import Mail from "../svgs/Mail";
import PhoneNumberInput from "./PhoneNumberInput";
import Location from "../svgs/Location";

export default function GetInTouch() {
	return (
		<div className={styles.container}>
			<div className={styles.pageContainer}>
				<div className={styles.getInTouch_container}>
					<div className={styles.contact_block}>
						<div className={styles.contact_metadata}>
							<h1>Contact Us</h1>
							<p className={styles.description}>
								Feel Free to Get in Touch with Empakt through email, call or
								complete the form.
							</p>
						</div>
						<div className={styles.contact_card_item}>
							<Mail height={30} width={30} />
							<p>info@empaktsoft.com</p>
						</div>

						<div className={styles.contact_card_item}>
							<Phone height={30} width={30} />
							<p>321-221-231</p>
						</div>

						<div className={styles.contact_card_item}>
							<Location height={30} width={30} />
							<p>Birmingham, Alabama (USA)</p>
						</div>
					</div>
					<div className={styles.form_block}>
						<form>
							<div className={styles.form_metadata}>
								<h1>Get in Touch</h1>
								<p className={styles.description}>You can reach us anytime</p>
							</div>
							<div>
								<input placeholder="First name" type="text" required />
								<br />
								<input placeholder="Last name" type="text" required />
								<br />
								<input placeholder="Your Email" type="email" required />
								<br />
								<PhoneNumberInput color="#c7c7c7" />
								<textarea placeholder="How can we help?" />
							</div>
							<button className={styles.submitButton}>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
