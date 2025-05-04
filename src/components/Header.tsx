"use client";

import { useState } from "react";

import { Select, Button } from "antd";
import logo from "@/assets/icons/logo_desktop.png";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons"; // Icons for hamburger menu
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const handleChange = (value: string) => {
    console.log(`Selected language: ${value}`);
  };

  return (
    <header className="bg-[#0E041D] py-[26px]">
      <div className="container_custom">
        <div className="header__inner flex flex-wrap items-center justify-between gap-4">
          {/* Left: Language Selector (Before Logo on Mobile) */}
          <div className="language__wrapper order-1 md:order-none md:hidden">
            <Select
              className="max-w-[73px]"
              suffixIcon={null}
              defaultValue="Uz"
              style={{
                width: 120,
                backgroundColor: "transparent",
                textAlign: "center",
                color: "white", // Ensure selected text is white
              }}
              dropdownStyle={{
                backgroundColor: "#0E041D", // Dropdown background color
              }}
              popupClassName="custom-dropdown" // Custom class for dropdown
              variant="borderless"
              onChange={handleChange}
              options={[
                {
                  value: "Uz",
                  label: <span style={{ color: "white" }}>Uz</span>,
                },
                {
                  value: "Ru",
                  label: <span style={{ color: "white" }}>Ru</span>,
                },
                {
                  value: "En",
                  label: <span style={{ color: "white" }}>En</span>,
                },
              ]}
            />
          </div>

          {/* Middle: Logo */}
          <Link className="order-2 md:order-none inline-block" href={"/"}>
            <Image
              className="max-w-[180px] min-h-[27px] w-full"
              src={logo}
              alt="Logo"
            />
          </Link>

          {/* Right: Hamburger Menu (Visible on Mobile) */}
          <div className="order-3 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>

          {/* Middle: Navigation Links (Inside Burger Menu on Mobile) */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:justify-center md:flex-grow w-full md:w-auto order-4 md:order-none`}
          >
            <ul className="flex flex-col md:flex-row gap-4 md:gap-16 mt-4 md:mt-0 items-center ">
              <Link className="text-white font-medium" href={"/"}>
                Bosh sahifa
              </Link>
              <Link className="text-white font-medium" href={"/about"}>
                Portfolio
              </Link>
              <Link className="text-white font-medium" href={"/service"}>
                Xizmatlar
              </Link>
              <a href="#loyiha" className="text-white font-medium">
                Aloqa
              </a>
            </ul>
          </nav>

          {/* Right: Button (Visible on Desktop) */}
          <div className="hidden md:flex order-5">
            <div className="language__wrapper order-1 md:order-none">
              <Select
                className="max-w-[73px]"
                suffixIcon={null}
                defaultValue="Uz"
                style={{
                  width: 120,
                  backgroundColor: "transparent",
                  textAlign: "center",
                  color: "white", // Ensure selected text is white
                }}
                dropdownStyle={{
                  backgroundColor: "#0E041D", // Dropdown background color
                }}
                popupClassName="custom-dropdown" // Custom class for dropdown
                variant="borderless"
                onChange={handleChange}
                options={[
                  {
                    value: "Uz",
                    label: <span style={{ color: "white" }}>Uz</span>,
                  },
                  {
                    value: "Ru",
                    label: <span style={{ color: "white" }}>Ru</span>,
                  },
                  {
                    value: "En",
                    label: <span style={{ color: "white" }}>En</span>,
                  },
                ]}
              />
            </div>
            <Button
              href="#loyiha"
              style={{
                color: "white",
                borderRadius: "5px",
                padding: "12px 23px",
                fontSize: "16px",
                fontWeight: "600",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)", // Apply blur effect
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Loyiha bormi ?
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
