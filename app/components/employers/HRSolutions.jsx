import Link from "next/link";
import styles from "./../../../styles/HRSolutions.module.css";

export default function HRSolutions() {
	return (
		<div className={styles.container}>
			<div className={styles.pageContainer}>
				<div id="hr-solutions" className={styles.hrSolutionsContainer}>
					<div className={styles.form_title}>
						HR <span className="text-[#2AC2BC]">Solutions</span>
					</div>
					<div className={styles.solutions_block}>
						<div className={styles.solution}>
							<div className={styles.solution_title}>
								<Link href={"/capabilities/contract-staffing"}>
									1. Contract Staffing
								</Link>
							</div>
							<div className={styles.solution_description}>
								Hire talented candidates in short-term contracts to speed up the
								existing projects.
							</div>
						</div>
						<div className={styles.solution}>
							<div className={styles.solution_title}>
								<Link href={"/capabilities/permenent-staffing"}>
									2. Permanent Staffing
								</Link>
							</div>
							<div className={styles.solution_description}>
								Hire staff for the long-term to develop a competitive and joyful
								work culture for your company.
							</div>
						</div>
					</div>
					<div className={styles.solutions_block}>
						<div className={styles.solution}>
							<div className={styles.solution_title}>
								<Link href={"/capabilities/offshore-staffing"}>
									3. OffShore Staffing
								</Link>
							</div>
							<div className={styles.solution_description}>
								Hire candidates from any offshore location of your choice to
								suit your budget and requirements.
							</div>
						</div>
						<div className={styles.solution}>
							<div className={styles.solution_title}>
								<Link href={"/capabilities/nearshore-staffing"}>
									4. Near Shore Staffing
								</Link>
							</div>
							<div className={styles.solution_description}>
								Find the best candidates in the neighboring countries and states
								to complete projects with native workers.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
