"use client";
import { Karla } from "next/font/google";
import { BsArrowReturnRight } from "react-icons/bs";
import {
	Box,
	Collapse,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

const karla = Karla({
	subsets: ["latin"],
	weight: ["200", "400", "600", "800"],
});

export default function Sidebar({ open, toggleDrawer }) {
	const [openDropdown, setOpenDropdown] = useState("");

	const handleClick = (menu_label) => {
		setOpenDropdown(openDropdown === menu_label ? "" : menu_label);
	};

	const DrawerList = (
		<Box sx={{ width: 300 }} role="presentation" onClose={toggleDrawer}>
			<List
				sx={{
					"& .MuiListItemText-primary": {
						fontWeight: 600,
						fontSize: 18,
						fontFamily: "Karla",
					},
				}}
			>
				<ListItem key={"home"}>
					<ListItemButton>
						<ListItemText>
							<Link href="/home">Home</Link>
						</ListItemText>
					</ListItemButton>
				</ListItem>
				<ListItem key={"about-us"}>
					<ListItemButton
						sx={{
							backgroundColor: openDropdown === "about-us" ? "#B4D8F9" : "#FFF",
						}}
						onClick={() => handleClick("about-us")}
					>
						<ListItemText>
							<Link href="/about-us">About Us</Link>
						</ListItemText>
						{openDropdown === "about-us" ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
				</ListItem>
				<Collapse in={openDropdown === "about-us"} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 6 }}>
							<ListItemIcon sx={{ minWidth: 28 }}>
								<BsArrowReturnRight strokeWidth={1.15} />
							</ListItemIcon>
							<ListItemText>
								<Link href="/our-story">Our Story</Link>
							</ListItemText>
						</ListItemButton>

						<ListItemButton sx={{ pl: 6 }}>
							<ListItemIcon sx={{ minWidth: 28 }}>
								<BsArrowReturnRight strokeWidth={1.15} />
							</ListItemIcon>
							<ListItemText>
								<Link href="/about-us/empakt-software-difference">
									The Empakt Software Difference
								</Link>
							</ListItemText>
						</ListItemButton>
					</List>
				</Collapse>
				<ListItem key={"employers"}>
					<ListItemButton
						sx={{
							backgroundColor:
								openDropdown === "employers" ? "#B4D8F9" : "#FFF",
						}}
						onClick={() => handleClick("employers")}
					>
						<ListItemText>
							<Link href="/employers">Employers</Link>
						</ListItemText>
						{openDropdown === "employers" ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
				</ListItem>
				<Collapse
					in={openDropdown === "employers"}
					timeout="auto"
					unmountOnExit
				>
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 6 }}>
							<ListItemIcon sx={{ minWidth: 28 }}>
								<BsArrowReturnRight strokeWidth={1.15} />
							</ListItemIcon>
							<ListItemText>
								<Link href="/capabilities/contract-staffing">
									Contract Staffing
								</Link>
							</ListItemText>
						</ListItemButton>

						<ListItemButton sx={{ pl: 6 }}>
							<ListItemIcon sx={{ minWidth: 28 }}>
								<BsArrowReturnRight strokeWidth={1.15} />
							</ListItemIcon>
							<ListItemText>
								<Link href="/capabilities/permenent-staffing">
									Permenent Staffing
								</Link>
							</ListItemText>
						</ListItemButton>

						<ListItemButton sx={{ pl: 6 }}>
							<ListItemIcon sx={{ minWidth: 28 }}>
								<BsArrowReturnRight strokeWidth={1.15} />
							</ListItemIcon>
							<ListItemText>
								<Link href="/capabilities/nearshore-staffing">
									Near-Shore Staffing
								</Link>
							</ListItemText>
						</ListItemButton>

						<ListItemButton sx={{ pl: 6 }}>
							<ListItemIcon sx={{ minWidth: 28 }}>
								<BsArrowReturnRight strokeWidth={1.15} />
							</ListItemIcon>
							<ListItemText>
								<Link href="/capabilities/offshore-staffing">
									Off-Shore Staffing
								</Link>
							</ListItemText>
						</ListItemButton>
					</List>
				</Collapse>
				<ListItem key={"job-seekers"}>
					<ListItemButton
						sx={{
							backgroundColor:
								openDropdown === "job-seekers" ? "#B4D8F9" : "#FFF",
						}}
						onClick={() => handleClick("job-seekers")}
					>
						<ListItemText>
							<Link href="/job-seekers">Job Seekers</Link>
						</ListItemText>
						{openDropdown === "job-seekers" ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
				</ListItem>
				<Collapse
					in={openDropdown === "job-seekers"}
					timeout="auto"
					unmountOnExit
				>
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 6 }}>
							<ListItemIcon sx={{ minWidth: 28 }}>
								<BsArrowReturnRight strokeWidth={1.15} />
							</ListItemIcon>
							<ListItemText>
								<Link href="/careers">Careers</Link>
							</ListItemText>
						</ListItemButton>
					</List>
				</Collapse>
				<ListItem key={"contact-us"}>
					<ListItemButton>
						<ListItemText>
							<Link href="/contact-us">Contact Us</Link>
						</ListItemText>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<Drawer
			open={open}
			onClose={toggleDrawer(false)}
			sx={{
				"& .MuiPaper-root": {
					fontFamily: karla.style.fontFamily,
				},
			}}
		>
			{DrawerList}
		</Drawer>
	);
}
