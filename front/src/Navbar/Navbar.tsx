import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Audience from "../Pages/Audience/Audience";

// export enum Pages {
// 	'/' = 'דף הבית',
// 	'/idea' = 'הרעיון',
// 	'/audience' = 'קהל היעד',
// 	'/contact' = "צרו קשר"
// }

type Page = {
	path: string;
    component: ReactElement<any, any>;
    name: string;
}

export const pages: Page[] = [
	{ path: '/contant', component: <></>, name: 'צור קשר'},
	{ path: '/about-us', component: <></>, name: 'מי אנחנו'},
	{ path: '/about-retreat', component: <></>, name: 'על הריטריט'},
	{ path: '/audience', component: <Audience/>, name: 'קהל היעד'},
	{ path: '/idea', component: <></>, name: 'הרעיון'},
	{ path: '/', component: <Home/>, name: 'דף הבית'},

]

const Navbar: React.FC = () => {
	const [selectedPage, setSelectedPage] = useState<Page>(pages[pages.length - 1]);

	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '250px', width: '100%' }}>
			<img style={{ width: 'auto', height: '80%' }}
				src="https://static.wixstatic.com/media/ded4d3_ea81097b2a1d44b2bc7c1299f0d6acaa~mv2.png/v1/crop/x_0,y_28,w_397,h_278/fill/w_239,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.png" >
			</img>

			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: '20px'}}>
				{pages.map(page =>
                    <Link key={page.path} to={page.path} style={{ textDecoration: "none", color: selectedPage.path === page.path ? "red" : "inherit", fontWeight: "bold" }} onClick={() => setSelectedPage(page)}>
                        {page.name}
                    </Link>
                )}
			</div>
		</div>
	);
};

export default Navbar;

				// <ul style={{ display: "flex", gap: "24px", listStyle: "none", padding: 0, margin: 0 }}>
				// 	{Object.entries(Pages).map(([path, title]) =>
				// 		<li style={{ color: path == selectedPage ? "red" : 'inherit', fontWeight: "bold" }}
				// 			onClick={() => { setSelectedPage(path as Pages) }} >
				// 			<Link to={path} style={{ textDecoration: "none", color: "inherit" }}>{title}</Link>
				// 		</li>
				// 	)}
				// </ul>
