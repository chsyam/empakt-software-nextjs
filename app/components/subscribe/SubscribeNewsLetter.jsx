"use client";

import React, { useEffect, useState } from "react";
import styles from "./SubscribeNewsLetter.module.css";
import { Box, Modal } from "@mui/material";
import Tick from "../svgs/Tick";
import { useRouter } from "next/navigation";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #001233",
	borderRadius: 2,
	boxShadow: 24,
	p: 4,
	outline: 0,
};

export default function SubscribeNewsLetter() {
	const [email, setEmail] = useState("");
	const [submitStatus, setSubmitStatus] = useState(false);
	const [open, setOpen] = React.useState(false);
	const handleClose = () => setOpen(false);
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!submitStatus) {
			setSubmitStatus(true);

			const timeout = setTimeout(() => {
				setSubmitStatus(false);
				setOpen(true);
			}, 1500);
			return () => clearTimeout(timeout);
		}
	};

	useEffect(() => {
		if (open) {
			const timeout = setTimeout(() => {
				setOpen(false);
				setEmail("");
			}, 2000);
			return () => clearTimeout(timeout);
		}
	}, [open]);

	return (
		<div className={styles.container}>
			<div className={styles.subscribe_container}>
				<div className="text-center font-semibold text-3xl my-[25px]">
					Subscribe to our newsLetter
				</div>
				<form className={styles.form} onSubmit={handleSubmit}>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						required
					/>
					<button className={styles.signUpButton}>
						{submitStatus ? (
							<div className="h-7 w-7 rounded-full animate-spin border-3 border-[#fff] border-t-transparent mx-auto" />
						) : (
							"Signup"
						)}
					</button>
				</form>
				<div>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={style}>
							<div className="flex justify-center">
								<Tick height={35} width={35} />
							</div>

							<div className="mt-[20px] font-semibold text-[24px] text-[#001233] text-center">
								Thank you for subscribing to the NewsLetter
							</div>
						</Box>
					</Modal>
				</div>
			</div>
		</div>
	);
}
