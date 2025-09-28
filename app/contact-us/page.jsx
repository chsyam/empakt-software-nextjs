import AddressBlock from "../components/contact-us/AddressBlock";
import GetInTouch from "../components/contact-us/GetInTouch";
import PageTitle from "../components/PageTitle";

export default function ContactUs() {
	return (
		<div>
			<PageTitle title="Contact Us" />
			<GetInTouch />
			<AddressBlock />
		</div>
	);
}
