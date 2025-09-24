import Image from "next/image";
import styles from "./Navbar.module.css";
import LinkedIn from "../svgs/LinkedIn";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className={styles.footer_block}>
			<div className={styles.footer}>
				<div className={styles.block}>
					<Image
						src="/images/logo.jpg"
						alt={`Logo`}
						width={100}
						height={100}
						className="h-[75px] w-[200px]"
						fetchPriority="high"
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
						<li className={styles.block_title}>About Us</li>
						<li>
							<Link href="#">Our Story</Link>
						</li>
						<li>
							<Link href="#">The Empakt Software Difference</Link>
						</li>
					</ul>
				</div>
				<div className={styles.block}>
					<ul>
						<li className={styles.block_title}>Employers</li>
						<li>
							<Link href="#">The Empakt Software Advantage</Link>
						</li>
						<li>
							<Link href="#">How it Works</Link>
						</li>
						<li>
							<Link href="#">Specialisations</Link>
						</li>
						<li>
							<Link href="#">HR Solutions</Link>
						</li>
						<li>
							<Link href="#">Register a Job Vacancy</Link>
						</li>
					</ul>
				</div>
				<div className={styles.block}>
					<ul>
						<li className={styles.block_title}>Job Seekers</li>
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
							<Link href="#">Refer a Friend</Link>
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
