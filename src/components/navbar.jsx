import React from "react";
import Logo from "../assets/El-neema.svg"; // Replace with your actual logo path
import { Link, Image, Button } from "@nextui-org/react";

const Navbar = () => {
  const menuItems = [
    {
      name: "Charity",
      link: "#",
      subMenu: ["Pad a Yarinya", "Widow Smile", "Pad Scholarship Scheme"],
    },
    {
      name: "About",
      link: "#",
      subMenu: [
        "Founder",
        "About Us",
        "Our Team",
        "Ongoing Project",
        "Board Members",
      ],
    },
    { name: "Contact Us", link: "#" },
    { name: "Support Us", link: "#" },
    { name: "Donate", link: "#", isButton: true },
  ];

  return (
    <nav className="w-full shadow-md font-Montserrat">
      <div className="flex items-center justify-between py- lg:px-20 px-5">
        {/* Logo */}
        <div>
          <Image src={Logo} alt="Logo" className="md:cursor-pointer h-20" />
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <li key={index} className="">
              <Link
                href={item.link}
                className={`text-black hover:text-orange-400 text-l ${
                  item.isButton
                    ? "bg-orange-400 text-white px-10 py-2 font-medium rounded-full hover:text-black"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon (Optional) */}
        <div className="md:hidden">
          <Button className="text-black">Menu</Button> {/* Placeholder for menu icon */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
