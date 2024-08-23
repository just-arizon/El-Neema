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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa"; // Correctly import the ChevronDown icon
import Logo from "../assets/El-neema.svg"; // Replace with your actual logo path

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const menuItems = [
    { name: "Our Founder", link: "#" },
    { name: "Features", link: "#", subMenu: ["Feature 1", "Feature 2", "Feature 3"] },
    { name: "About", link: "#", subMenu: ["About Us", "Our Team", "Ongoing Project", "Board Members", "Past Projects"] },
    { name: "Customers", link: "#" },
    { name: "Integrations", link: "#" },
    { name: "Donate", link: "#", isButton: true },
  ];

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <Navbar isBordered isBlurred={false} onMenuOpenChange={setIsMenuOpen}>
      {/* Navbar brand and menu toggle */}
      <NavbarContent className="w-full flex justify-between">
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
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.subMenu ? (
              <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                      radius=""
                      variant=""
                      endContent={<FaChevronDown size={14} />}
                      onClick={() => handleDropdownToggle(item.name)}
                    >
                      {item.name}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  className="w-[200px] p-0"
                  isOpen={openDropdown === item.name}
                  onClose={() => setOpenDropdown(null)}
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <DropdownItem
                      key={subIndex}
                      className="py-2 px-4 hover:bg-pink-200 hover:text-white transition-colors duration-200"
                    >
                      {subItem}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem>
                <Link className="text-sm" color="foreground" href={item.link}>
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
                    item.name
                  )}
                </Link>
              </NavbarItem>
            )}
          </React.Fragment>
        ))}
      </NavbarContent>

      {/* Hamburger menu for small screens */}
      <NavbarMenu isOpen={isMenuOpen} className="sm:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            {item.subMenu ? (
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    as={Link}
                    href={item.link}
                    className="w-full text-left"
                    onClick={() => handleDropdownToggle(item.name)}
                  >
                    {item.name}
                    <FaChevronDown size={14} className="ml-2" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  className="w-full bg-pink-100"
                  isOpen={openDropdown === item.name}
                  onClose={() => setOpenDropdown(null)}
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <DropdownItem
                      key={subIndex}
                      className="py-2 px-4 hover:bg-pink-200 hover:text-white transition-colors duration-200"
                    >
                      {subItem}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              item.isButton ? (
                <Button
                  as={Link}
                  href={item.link}
                  className="bg-orange-400 text-white rounded-md font-bold px-8"
                  size="lg"
                >
                  {item.name}
                </Button>
              ) : (
                <Link
                  color="foreground"
                  className="w-full"
                  href={item.link}
                  size="lg"
                >
                  {item.name}
                </Link>
              )
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
