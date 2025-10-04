export function getTitle(pathname) {
	switch (pathname) {
		case "/employers":
			return "Best Global Recruitment & Staffing Company";

		case "/contact-us":
			return "Contact Us | Empakt Software Solution";

		case "/referafriend":
			return "Refer a Friend | Empakt Software Solution";

		default:
			return "Empakt Software Solution | Staffing services, Job Search and Placements";
	}
}
