"use client";

import RegisterJobVacancy from "../components/employers/RegisterJobVacancy";
import PageTitle from "../components/PageTitle";
import React, { useEffect } from "react";
import EmpaktSoftwareAdvantages from "../components/employers/EmpaktSoftwareAdvantages";
import PromotionalInfo from "../components/employers/PromotionalInfo";
import HowDoesItWorks from "../components/employers/HowDoesItWorks";
import HRSolutions from "../components/employers/HRSolutions";
import Specializations from "../components/employers/Specializations";

export default function Employers() {
	useEffect(() => {}, []);
	return (
		<div>
			<PageTitle title="Employers" />
			<PromotionalInfo />
			<EmpaktSoftwareAdvantages />
			<HowDoesItWorks />
			<HRSolutions />
			<Specializations />
			<RegisterJobVacancy />
		</div>
	);
}
