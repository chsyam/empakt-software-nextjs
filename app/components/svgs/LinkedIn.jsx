import Link from "next/link";

export default function LinkedIn({ height = 19, width = 19 }) {
	const linkedInRedirect = () => {
		window.open("https://www.linkedin.com/company/empakt-software/", "_blank");
		return;
	};

	return (
		<Link
			href={"https://www.linkedin.com/company/empakt-software/"}
			target="_blank"
		>
			<svg
				height={height}
				width={width}
				viewBox="-10 -10 120.00 120.00"
				version="1.1"
				xmlSpace="preserve"
				xmlns="http://www.w3.org/2000/svg"
				fill="#000000"
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				></g>
				<g id="SVGRepo_iconCarrier">
					<g id="Layer_1"></g>
					<g id="Layer_2">
						<g>
							<path
								className="fill-[#0077B5]"
								d="M90.479,2.513c-14.611-0.041-68.502,0.028-80.958,0C5.645,2.513,2.5,5.562,2.5,9.317v81.381 c0,3.756,3.145,6.802,7.021,6.802h80.958c3.878,0,7.021-3.046,7.021-6.803V9.317C97.5,5.562,94.357,2.513,90.479,2.513z"
							></path>
							<g>
								<path
									className="fill-[#F1F1F1]"
									d="M53.453,82.005c0,0,0-23.878,0-23.879c-0.139-4.388,2.484-8.483,7.762-8.667 c5.143,0,7.201,3.921,7.201,9.67v22.875h14.214V57.485c0-13.135-7.012-19.247-16.365-19.247c-7.668,0-11.036,4.285-12.907,7.204 l0.095-6.2H39.239c0.185,4.012-0.001,42.763-0.001,42.763L53.453,82.005z"
								></path>
								<path
									className="fill-[#F1F1F1]"
									d="M31.37,63.461v-24.22H17.154v42.763h14.217C31.368,77.514,31.376,67.888,31.37,63.461z"
								></path>
								<path
									className="fill-[#F1F1F1]"
									d="M24.265,33.404c4.956,0,8.042-3.284,8.042-7.387c-0.041-9.897-16.004-9.787-15.991-0.001 C16.305,30.151,19.476,33.455,24.265,33.404z"
								></path>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</Link>
	);
}
