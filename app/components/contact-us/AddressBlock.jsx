import React from "react";
import styles from "./../../../styles/AddressBlock.module.css";

export default function AddressBlock() {
	return (
		<div className={styles.container}>
			<div className={styles.pageContainer}>
				<div className={styles.addressBlock_container}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212854.39265561505!2d-87.01528222361866!3d33.53128835185151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888911df5885bfd3%3A0x25507409eaba54ce!2sBirmingham%2C%20AL%2C%20USA!5e0!3m2!1sen!2sin!4v1759096910425!5m2!1sen!2sin"
						width="100%"
						height="300"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					{/* <div className={styles.addressDetails}>
						<div className={styles.address_metadata}>
							<p>Our Location</p>
							<h1>Connecting Near and Far</h1>
						</div>
						<div className={styles.address_block}>
							<h3>Headquarters</h3>
							<p>Birmingham,</p>
							<p>Alabama,</p>
							<p>United States of America</p>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
