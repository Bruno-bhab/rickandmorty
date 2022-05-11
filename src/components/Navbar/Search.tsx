import { MagnifyingGlass } from "phosphor-react";

export function Search() {
  return (
    <div className="flex items-center justify-center bg-white rounded-md py-1 px-2">
      <input type="text" placeholder="Pesquisar" className="h-6 w-60 text-black text-xl focus:outline-none"/>
      <MagnifyingGlass className="text-black"/> 
    </div>
  )
}