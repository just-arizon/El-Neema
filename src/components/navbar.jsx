import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown
} from "@nextui-org/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Added ChevronUp for toggling
import Logo from "../assets/El-neema.svg"; // Replace with your actual logo path
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openAccordion, setOpenAccordion] = React.useState(
    ["Charity", "About"] // Initialize with all accordion names to keep them open by default
  );

  const menuItems = [
    { name: "Charity", link: "#", subMenu: ["Pad a Yarinya", "Widow Smile", "Pad Scholarship Scheme"] },
    { name: "About", link: "#", subMenu: ["Founder", "About Us", "Our Team", "Ongoing Project", "Board Members"] },
    { name: "Contact Us", link: "#" },
    { name: "Support Us", link: "#" }, 
    { name: "Donate", link: "#", isButton: true },
  ];

  const handleAccordionToggle = (itemName) => {
    setOpenAccordion(openAccordion.includes(itemName) 
      ? openAccordion.filter(name => name !== itemName)
      : [...openAccordion, itemName]
    );
  };

  return (
    <Navbar isBordered isBlurred={false} onMenuOpenChange={setIsMenuOpen}>
      {/* Navbar brand and menu toggle */}
      <NavbarContent className="relative lg:-left-20 w-full flex flex-1 justify-between bg-slate-">
        <NavbarBrand>
          <img src={Logo} alt="Logo" />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          icon={<GiHamburgerMenu size={24} />}
        />
      </NavbarContent>

      {/* Main navigation links for larger screens */}
      <NavbarContent className="hidden sm:flex flex-1 gap-4 relative lg:-right-20" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            {item.isButton ? (
              <Button
                as={Link}
                href={item.link}
                className="bg-orange-400 text-white rounded-full font-bold px-8"
                size="lg"
              >
                {item.name}
              </Button>
            ) : (
              item.subMenu ? (
                <Dropdown>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent"
                    radius=""
                    variant=""
                    endContent={<FaChevronDown size={14} />}
                  >
                    {item.name}
                  </Button>
                </Dropdown>
              ) : (
                <Link className="text-sm" color="foreground" href={item.link}>
                  {item.name}
                </Link>
              )
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Accordion menu for small screens */}
      <NavbarMenu isOpen={isMenuOpen} className="sm:hidden bg-[#2d2d2d] px-0">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="px-5">
            {item.subMenu ? (
              <>
                <Button
                  onClick={() => handleAccordionToggle(item.name)}
                  className="w-full flex justify-between items-center text-left rounded-none bg-transparent px-0 py-4  text-white border-b-1 border-b-orange-200"
                >
                  {item.name}
                  {openAccordion.includes(item.name) ? (
                    <FaChevronUp size={14} className="ml-2" />
                  ) : (
                    <FaChevronDown size={14} className="ml-2" />
                  )}
                </Button>
                {openAccordion.includes(item.name) && (
                  <div className="pl-0 bg-transparent">
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href="#"
                        className="block py-2 text-orange-300 text-sm"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              item.isButton ? (
                <Button
                  as={Link}
                  href={item.link}
                  className="bg-orange-400 text-white rounded-md font-bold px-8 w-full"
                  size="lg"
                >
                  {item.name}
                </Button>
              ) : (
                <Link
                  color="foreground"
                  className="w-full block py-2 text-white text-sm"
                  href={item.link}
                  size="lg"
                >
                  {item.name}
                </Link>
              )
            )}


          </NavbarMenuItem>

        ))}
        <div className='bg-[#1a1a1a] w-full py-10 text-white text-center gap-2 grid px-3  relative top-10'>
      <div className="grid gap-5">
        <small className="flex gap-1">
          <div className='grid items-center'><FaPhoneFlip /></div>
          <div>+234 813 628 0417</div>
          </small>
        <small className="flex gap-1">
        <div className='grid items-center'><MdOutlineMailOutline /></div>
          <div>elneema@gmail.com</div>
          </small>
          <small className="flex gap-1">
        <div className='grid items-center'><IoLocationSharp /></div>
          <div> No. 8, Professor Olajide Ayinla Cresent</div>
          </small>
      </div>

      {/* <div className="grid gap-5">
        <small className="grid gap-1">
          <div className='grid items-center'><FaPhoneFlip /></div>
          <div>+234 813 628 0417</div>
          </small>
        <small className="grid gap-1">
        <div className='grid items-center'><MdOutlineMailOutline /></div>
          <div>info@gmail.com</div>
          </small>
      </div> */}

      </div>
      </NavbarMenu>
    </Navbar>
  );
}
