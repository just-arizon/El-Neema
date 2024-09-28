import React, { useState } from "react";
import Logo from "../assets/El-neema.svg"; // Replace with your actual logo path
import { Link, Image, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem  } from "@nextui-org/react";
import { FaPhoneAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


const Navbar = () => {
  const [openAccordion, setOpenAccordion] = useState([]);


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
              {item.subMenu ? (
                <Dropdown>
                  <DropdownTrigger>
                    <Button unstyled className="flex items-center bg-transparent text-black hover:text-orange-400 ">
                      {item.name}
                      <FaChevronDown className="ml-2" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label={`${item.name} submenu`} className=" w-full hover:rounded-none">
                    {item.subMenu.map((subItem, subIndex) => (
                      <DropdownItem key={subIndex}>
                        <Link href="#" className="hover:text-orange-400 hover:bg-transparent text-black">{subItem}</Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              ) : item.isButton ? (
                <Button
                  as={Link}
                  href={item.link}
                  className="bg-orange-400 text-white rounded-full font-bold px-8 w-full md:w-auto"
                  size="md"
                >
                  {item.name}
                </Button>
              ) : (
                <Button
                  className="w-full block py-2 text-black hover:text-orange-400 bg-transparent"
                  href={item.link}
                >
                  {item.name}
                </Button>
              )}
            </li>
          ))}
        </ul>

      </div>

      {/* Contact Info Section at the Bottom */}
      {/* <div className="bg-[#1a1a1a] w-full py-10 text-white text-center gap-2 grid px-3">
        <div className="grid gap-5">
          <small className="flex gap-1">
            <div className="grid items-center">
              <FaPhoneAlt />
            </div>
            <div>+234 813 628 0417</div>
          </small>
          <small className="flex gap-1">
            <div className="grid items-center">
              <MdOutlineMailOutline />
            </div>
            <div>elneema@gmail.com</div>
          </small>
          <small className="flex gap-1">
            <div className="grid items-center">
              <IoLocationSharp />
            </div>
            <div>No. 8, Professor Olajide Ayinla Cresent</div>
          </small>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
