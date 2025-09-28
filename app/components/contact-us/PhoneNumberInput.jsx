"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./../../../styles/phone-input.css";

export default function PhoneNumberInput() {
	const [phone, setPhone] = useState("");

	return (
		<PhoneInput
			country={"in"}
			value={phone}
			onChange={(phone) => setPhone(phone)}
			inputStyle={{
				width: "100%",
				height: "50px",
				borderRadius: "0.5rem",
				border: "1px solid #001233",
				paddingLeft: "48px",
				fontSize: "1rem",
				fontFamily: "inherit",
			}}
			containerStyle={{
				width: "100%",
				borderRadius: "0.5rem",
				margin: "10px 0",
			}}
			inputProps={{
				name: "phone",
				required: true,
				autoFocus: true,
			}}
		/>
	);
}
