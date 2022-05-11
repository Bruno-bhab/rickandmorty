import { FacebookLogo, GithubLogo, LinkedinLogo, MagnifyingGlass } from "phosphor-react";
import { Logo } from "./Logo";
import { Search } from "./Search";

export function Navbar() {
  return (
    <div className="bg-gray-900 w-full h-16 flex justify-between items-center pl-40 pr-40">
      <Logo/>
      
      <ul className="flex text-white text-[32px] gap-4 items-center">
        <Search/>
        <li><a className="hover:text-teal-300 transition-colors" href="#"><FacebookLogo alt="Facebook"/></a></li>
        <li><a className="hover:text-teal-300 transition-colors" href="#"><LinkedinLogo alt="Linkedin"/></a></li>
        <li><a className="hover:text-teal-300 transition-colors" href="#"><GithubLogo alt="Github"/></a></li>
      </ul>
    </div>
  )
}