"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

export default function Navbar() {
	const [toggleDropdown, setToggleDropdown] = useState("");
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const handleMouseEnter = (li_label) => {
		setToggleDropdown(li_label);
	};

	return (
		<div className={styles.navbar_block}>
			<div className={styles.navbar}>
				<div className={styles.block}>
					<Image
						src="/images/logo.jpg"
						alt={`Logo`}
						width={100}
						height={100}
						className="h-[75px] w-[200px]"
						fetchPriority="high"
					/>
				</div>
				<div className={styles.navigation_menu}>
					<div
						className={styles.menu_item}
						onMouseEnter={() => handleMouseEnter("home")}
						onMouseLeave={() => handleMouseEnter("")}
					>
						<Link href="/">Home</Link>
					</div>
					<div
						className={styles.menu_item}
						onMouseEnter={() => handleMouseEnter("about-us")}
						onMouseLeave={() => handleMouseEnter("")}
					>
						<Link href="/about-us">About Us</Link>
						{toggleDropdown == "about-us" && (
							<ul className={styles.navbar_dropdown}>
								<li>
									<Link href="#">Our Story</Link>
								</li>
								<li>
									<Link href="#">The Empakt Software Difference</Link>
								</li>
							</ul>
						)}
					</div>
					<div
						className={styles.menu_item}
						onMouseEnter={() => handleMouseEnter("employers")}
						onMouseLeave={() => handleMouseEnter("")}
					>
						<Link href="/">Employers</Link>
						{toggleDropdown == "employers" && (
							<ul className={styles.navbar_dropdown}>
								<li>
									<Link href="#">Contract Staffing</Link>
								</li>
								<li>
									<Link href="#">Permenent Staffing</Link>
								</li>
								<li>
									<Link href="#">Off-Shore Staffing</Link>
								</li>
								<li>
									<Link href="#">Near-Shore Staffing</Link>
								</li>
							</ul>
						)}
					</div>
					<div
						className={styles.menu_item}
						onMouseEnter={() => handleMouseEnter("job-seekers")}
						onMouseLeave={() => handleMouseEnter("")}
					>
						<Link href="/">Job Seekers</Link>
						{toggleDropdown == "job-seekers" && (
							<ul className={styles.navbar_dropdown}>
								<li>
									<Link href="#">Careers</Link>
								</li>
							</ul>
						)}
					</div>
					<div
						className={styles.menu_item}
						onMouseEnter={() => handleMouseEnter("contact-us")}
						onMouseLeave={() => handleMouseEnter("")}
					>
						<Link href="/">Contact Us</Link>
					</div>
				</div>
				<div className={styles.sidebar_block} onClick={toggleDrawer(true)}>
					<FaBars size={32} />
				</div>
				<Sidebar open={open} toggleDrawer={toggleDrawer} />
			</div>
		</div>
	);
}
