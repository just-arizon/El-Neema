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

  const menuItems = [
    "Our Founder",
    "Features",
    "About",
    "Customers",
    "Integrations",
    "Donate",
  ];

  const dropdownItems = {
    features: ["Feature 1", "Feature 2", "Feature 3"],
    about: ["Our Team", "Our Mission", "Our Story"],
  };

  return (
    <Navbar isBordered isBlurred={false} onMenuOpenChange={setIsMenuOpen}>
      {/* Navbar brand and menu toggle */}
      <NavbarContent className="w-full flex justify-between">
        <NavbarBrand>
          <img src={Logo} alt="Logo" className="" />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          icon={<GiHamburgerMenu size={24} />}
        />
      </NavbarContent>

      {/* Main navigation links for larger screens */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-sm" color="foreground" href="#">
            Our Founder
          </Link>
        </NavbarItem>

        {/* Features Dropdown */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius=""
                variant=""
                endContent={<FaChevronDown size={14} />} // Corrected the ChevronDown icon
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            {dropdownItems.features.map((item, index) => (
              <DropdownItem key={index}>{item}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        {/* About Dropdown */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius=""
                variant=""
                endContent={<FaChevronDown size={14} />} // Corrected the ChevronDown icon
              >
                About
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            {dropdownItems.about.map((item, index) => (
              <DropdownItem key={index}>{item}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link className="text-sm" color="foreground" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Donate button for larger screens */}
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
        <Button as={Link} color="" href="#" variant="" className="bg-orange-400 text-white rounded-full font-bold px-8">
                DONATE
              </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Hamburger menu for small screens */}
      <NavbarMenu isOpen={isMenuOpen} className="sm:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={index === menuItems.length - 1 ? "primary" : "foreground"}
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
