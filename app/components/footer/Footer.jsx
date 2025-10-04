"use client";

import Link from "next/link";
import LinkedIn from "../svgs/LinkedIn";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
	return (
		<div className={styles.footer_block}>
			<div className={styles.footer}>
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
					<div className="text-xl pt-[20px] pb-[2px] font-semibold">
						Follow us:
					</div>
					<div className="w-min">
						<LinkedIn height={40} width={40} />
					</div>
				</div>
				<div className={styles.block}>
					<ul>
						<li className={styles.block_title}>
							<Link href="/about-us">About Us</Link>
						</li>
						<li>
							<Link href="/our-story">Our Story</Link>
						</li>
						<li>
							<Link href="/about-us">The Empakt Software Difference</Link>
						</li>
					</ul>
				</div>
				<div className={styles.block}>
					<ul>
						<li className={styles.block_title}>
							<Link href="/employers">Employers</Link>
						</li>
						<li>
							<Link href="/employers#advantages">
								The Empakt Software Advantage
							</Link>
						</li>
						<li>
							<Link href="/employers#how-does-it-work">How it Works</Link>
						</li>
						<li>
							<Link href="/employers#specializations">Specialisations</Link>
						</li>
						<li>
							<Link href="/employers#hr-solutions">HR Solutions</Link>
						</li>
						<li>
							<Link href="/employers#register-job-vacancy">
								Register a Job Vacancy
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.block}>
					<ul>
						<li className={styles.block_title}>
							<Link href="/job-seekers">Job Seekers</Link>
						</li>
						<li>
							<Link href="#">The Empakt Software Advantage</Link>
						</li>
						<li>
							<Link href="#">How it Works</Link>
						</li>
						<li>
							<Link href="#">Browse Jobs</Link>
						</li>
						<li>
							<Link href="/referafriend">Refer a Friend</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.copyright}>
				<div className={styles.copyright_content}>
					© Copyright 2025 Empakt Software LLC, All Rights Reserved.
				</div>
			</div>
		</div>
	);
}
