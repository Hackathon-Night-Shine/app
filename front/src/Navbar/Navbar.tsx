import { Typography } from "@mui/material";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import defaultProfilePic from "../assets/defaultProfilePic.png";
import { currentUserAtom } from "../jotai/CurrentUser";

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

const adminOnlyRoutes = ["/admin-actions"];

const shouldHideAdminPage = (
  adminOnlyRoutes: string[],
  path: string,
  role: string | undefined
) => {
  if (!role) return false;

  const isAdminPage = adminOnlyRoutes.includes(path);

  return isAdminPage && role !== "admin";
};

const Navbar: React.FC = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      shouldHideAdminPage(adminOnlyRoutes, location.pathname, currentUser?.role)
    ) {
      navigate("/");
    }
  }, [location.pathname, currentUser]);

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
      <>
        {!!currentUser ? (
          <div style={{ display: "flex", gap: "8px" }}>
            <img
              src={currentUser?.img ?? defaultProfilePic}
              style={{ width: "40px", height: "40px", borderRadius: "24px" }}
            />
            <div>
              <Typography style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                שלום {currentUser.firstName}
              </Typography>
              <div style={{ display: "flex", gap: "4px" }}>
                <Typography
                  onClick={() => {
                    navigate("/personal-area");
                  }}
                >
                  לאיזור האישי |
                </Typography>
                <Typography
                  onClick={() => {
                    setCurrentUser(undefined);
                  }}
                >
                  להתנתקות
                </Typography>
              </div>
            </div>
          </div>
        ) : (
          <Link
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}
            to={"/auth"}
          >
            <img
              src={defaultProfilePic}
              style={{ width: "40px", height: "40px", borderRadius: "24px" }}
            />
            <Typography>התחברות</Typography>
          </Link>
        )}
      </>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {pages.map((page) => (
          <React.Fragment key={page.path}>
            {shouldHideAdminPage(
              adminOnlyRoutes,
              page.path,
              currentUser?.role
            ) ? (
              <></>
            ) : (
              <Link
                key={page.path}
                to={page.path}
                style={{
                  textDecoration: "none",
                  color:
                    location.pathname === page.path ? "#8B0000" : "inherit",
                }}
              >
                {page.name}
              </Link>
            )}
          </React.Fragment>
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
