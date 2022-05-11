interface Characters {
  photo: string
  name: string
  species: string
  gender: string
  origin: string
}

export function Cards({photo, name, species, gender, origin}:Characters){
  return(
    <div className="w-64 min-h-96 h-96 rounded-md overflow-hidden flex flex-col justify-between bg-white">
      <div className="w-full h-60 overflow-hidden flex items-center">
        <img src={photo} className="w-full"/>
      </div>
      <div className="bg-white w-full p-2 flex flex-col justify-between flex-1">
        <p>Name: {name}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin}</p>
      </div>
    </div>
  )
}