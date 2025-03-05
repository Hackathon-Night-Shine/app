import React, { useState } from "react";
import { Link } from "react-router-dom";

export enum Pages {
	'/home' = 'דף הבית',
	'/idea' = 'הרעיון',
	'/audience' = 'קהל היעד',
	'/about_retreat' = "על הריטריט",
	'/about_us' = "מי אנחנו",
	'/contact' = "צרו קשר"
}

const Navbar: React.FC = () => {
	const [selectedPage, setSelectedPage] = useState<Pages>(Pages["/home"]);

	return (
		<nav style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
			<ul style={{ display: "flex", gap: "24px", listStyle: "none", padding: 0, margin: 0, direction: "rtl" }}>
				{Object.entries(Pages).map(([path, title]) =>
					<li style={{ color: path == selectedPage ? "red" : 'inherit', fontWeight: "bold" }} 
					onClick={() => {setSelectedPage(path as Pages)}}>
						<Link to={path} style={{ textDecoration: "none", color: "inherit" }}>{title}</Link>
					</li>
				)}
			</ul>
			<div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", marginLeft: "16px" }}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg"
					alt="Israel Flag"
					style={{ width: "20px", height: "20px" }}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
