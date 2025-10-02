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
						className="h-[75px] w-[200px] cursor-pointer"
						fetchPriority="high"
						onClick={() => (window.location.href = "/")}
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
									<Link href="/our-story">Our Story</Link>
								</li>
								<li>
									<Link href="/about-us">The Empakt Software Difference</Link>
								</li>
							</ul>
						)}
					</div>
					<div
						className={styles.menu_item}
						onMouseEnter={() => handleMouseEnter("employers")}
						onMouseLeave={() => handleMouseEnter("")}
					>
						<Link href="/employers">Employers</Link>
						{toggleDropdown == "employers" && (
							<ul className={styles.navbar_dropdown}>
								<li>
									<Link href="/capabilities/contract-staffing">
										Contract Staffing
									</Link>
								</li>
								<li>
									<Link href="/capabilities/permenent-staffing">
										Permenent Staffing
									</Link>
								</li>
								<li>
									<Link href="/capabilities/offshore-staffing">
										Off-Shore Staffing
									</Link>
								</li>
								<li>
									<Link href="/capabilities/nearshore-staffing">
										Near-Shore Staffing
									</Link>
								</li>
							</ul>
						)}
					</div>
					<div
						className={styles.menu_item}
						onMouseEnter={() => handleMouseEnter("job-seekers")}
						onMouseLeave={() => handleMouseEnter("")}
					>
						<Link href="/job-seekers">Job Seekers</Link>
						{toggleDropdown == "job-seekers" && (
							<ul className={styles.navbar_dropdown}>
								<li>
									<Link href="/careers">Careers</Link>
								</li>
							</ul>
						)}
					</div>
					<div
						className={styles.menu_item}
						onMouseEnter={() => handleMouseEnter("contact-us")}
						onMouseLeave={() => handleMouseEnter("")}
					>
						<Link href="/contact-us">Contact Us</Link>
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
