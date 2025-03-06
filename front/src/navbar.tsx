import React, { useState } from "react";
import { Link } from "react-router-dom";

export enum Pages {
	'/home' = 'דף הבית',
	'/idea' = 'הרעיון',
	'/audience' = 'קהל היעד',
	'/retreat' = "על הריטריט",
	'/about' = "מי אנחנו",
	'/contact' = "צרו קשר",
	'/manegerHome' = 'דף מנהל',
}

const Navbar: React.FC = () => {
	const [selectedPage, setSelectedPage] = useState<Pages>(Pages["/home"]);

	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', paddingInline: '5%', height: '25vh' }}>
			<nav style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
				<ul style={{ display: "flex", gap: "24px", listStyle: "none", padding: 0, margin: 0 }}>
					{Object.entries(Pages).map(([path, title]) =>
						<li style={{ color: path == selectedPage ? "red" : 'inherit', fontWeight: "bold" }}
							onClick={() => { setSelectedPage(path as Pages) }} >
							<Link to={path} style={{ textDecoration: "none", color: "inherit" }}>{title}</Link>
						</li>
					)}
				</ul>
			</nav>
			<img style={{ width: '159px', height: '126px' }}
				src="https://static.wixstatic.com/media/ded4d3_ea81097b2a1d44b2bc7c1299f0d6acaa~mv2.png/v1/crop/x_0,y_28,w_397,h_278/fill/w_239,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.png" ></img>
		</div>
	);
};

export default Navbar;
