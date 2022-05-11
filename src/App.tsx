import { useEffect, useState } from "react"
import { Cards } from "./components/Cards"
import { Navbar } from "./components/Navbar"

type Character = {
  id: number
  name: string
  species: string
  gender: string
  origin: {
    name: string
  }
  image: string
  
}

function App() {

  const [characters, setCharacters] = useState<Character[]>([])
  const [page, setPage] = useState<number>(1)
  
  useEffect(()=> {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
      })
  })

  function changePage(value:number){
    if(value === 1){
      let valorAtual:number = page + 1
      setPage(valorAtual)
    }else if(value === 0){
      if(page === 1){
        return
      }else{
        let valorAtual:number = page - 1
        setPage(valorAtual)
      }
      
    }
  }

  return (
    <div id="main" className="bg-gray-800 h-screen w-screen overflow-x-hidden">
      <header>
        <Navbar/>
      </header>
      <main className="bg-black min-h-[calc(100%-10rem)] w-screen p-8 flex flex-col">
        <section className="flex flex-wrap gap-5 items-center justify-center">
          {characters.map((character) =>{
            return(
              <Cards
              key={character.id}
              photo={character.image} 
              name={character.name}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
            />
            )
          })}
        </section>

        <section className="bg-red-900 mt-8 flex items-center justify-center gap-4">
          <button onClick={()=> changePage(0)}>Prev</button>
          <p>Page: {page}</p>
          <button onClick={()=> changePage(1)}>Next</button>
        </section>

      </main>
      <footer>
        <div className="left-0 bottom-0 bg-neutral-900 h-24 w-full flex justify-center items-center text-white">
          <p className="text-lg">Criado por <a className="border-b-2 hover:text-green-300 hover:border-green-300 transition-colors" href="#">Bruno Barbosa</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
