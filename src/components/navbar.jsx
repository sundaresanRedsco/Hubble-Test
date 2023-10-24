import { Typography } from "@mui/material";
import GButton from "./global/GButton";
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  const menuItems = [
    {
      label: "Platform",
      path: "",
      active: "",
    },
    {
      label: "About",
      path: "about",
      active: "",
    },
    {
      label: "Vulnerability",
      path: "vulnerability",
      active: "",
    },
    {
      label: "Company",
      path: "",
      active: "",
    },
  ];

  // Add a scroll event listener to track when the user scrolls and set the sticky state accordingly.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isSticky ? "position-fixed w-100" : "position-sticky"}`}
      style={{
        background: "var(--primary-color)",
        zIndex: "99999",
        top: "0",
        boxShadow: isSticky ? "rgba(134, 85, 255, 0.2) 0px 0px 50px" : "",
      }}
    >
      <Marquee
        className="py-2"
        style={{ background: "var(--secondary-color)" }}
      >
        <Typography
          className="mb-0 mx-3"
          sx={{
            textTransform: "uppercase",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          <span className="mx-2 " style={{ fontWeight: "600" }}>
            Hubble Announce Auora
          </span>
          Learn how Hubble provides complete visibility of your assets
        </Typography>

        <Typography
          className="mb-0 mx-3"
          sx={{
            textTransform: "uppercase",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          <span className="mx-2 " style={{ fontWeight: "600" }}>
            Loemum
          </span>
          Learn how Hubble
        </Typography>
      </Marquee>
      <nav className={`navbar navbar-expand-lg py-3`}>
        <a className="navbar-brand mr-auto" href="#">
          Hubble
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: "var(--white)" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {" "}
            {/* Centered menu items */}
            {menuItems.map((menu, index) => (
              <li className="nav-item mx-3" key={index}>
                <Link
                  className="nav-link"
                  style={{ color: "var(--white)" }}
                  to={"/" + menu.path}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="btnGroup d-flex justify-content-between">
            {" "}
            {/* Buttons on the right */}
            <GButton
              btnType="primary"
              label="Book a Demo"
              btnClassName="mx-2 px-4 py-2"
            />
            <GButton
              variant="outlined"
              label="Get Free Trial"
              color="var(--white)"
              border="1px solid var(--white)"
              hoverColor="var(--secondary-color)"
              hoverBorder="1px solid var(--secondary-color)"
              btnClassName="mx-2 px-4 py-2"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
