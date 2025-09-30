"use client";

import React from "react";
import PageTitle from "../components/PageTitle";
import ReferFriendForm from "../components/referafriend/ReferFriendForm";

export default function ReferAFriend() {
	return (
		<div>
			<PageTitle title={"Bring your Buddy"} />
			<ReferFriendForm />
		</div>
	);
}
