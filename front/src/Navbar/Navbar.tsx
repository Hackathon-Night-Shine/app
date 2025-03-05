import React, { useState } from "react";
import { Link } from "react-router-dom";

type Page = {
  path: string;
  name: string;
};

export const pages: Page[] = [
  { path: "/", name: "דף הבית" },
  { path: "/idea", name: "הרעיון" },
  { path: "/audience", name: "קהל היעד" },
  { path: "/about-retreat", name: "על הריטריט" },
  { path: "/about-us", name: "מי אנחנו" },
  { path: "/retreats", name: "רשימת רטריטים" },
  { path: "/contact", name: "צור קשר" },
];

const Navbar: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<Page>(
    pages[pages.length - 1]
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "20%",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            style={{
              textDecoration: "none",
              color: selectedPage.path === page.path ? "#8B0000" : "inherit",
            }}
            onClick={() => setSelectedPage(page)}
          >
            {page.name}
          </Link>
        ))}
      </div>
      <img
        style={{ width: "auto", height: "80%" }}
        src="https://static.wixstatic.com/media/ded4d3_ea81097b2a1d44b2bc7c1299f0d6acaa~mv2.png/v1/crop/x_0,y_28,w_397,h_278/fill/w_239,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.png"
      ></img>
    </div>
  );
};

export default Navbar;
