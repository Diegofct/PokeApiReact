import { useState, useEffect } from "react"

export const Pokemon = () => {

    const [pokemon, setPokemon] = useState()

    const [id, setId] = useState(1)

    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    const handleSiguiente = () => {
        setId(id + 1)
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })
    }, [id])

  return (
    <div className="h-[500px] flex justify-center items-center">
        {
            pokemon &&
            <div className="flex flex-col justify-center items-center w-[50%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[30%] h-[80%] mx-auto bg-sky-500 rounded-lg">
                <h2 className="text-[3rem] text-white">{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="h-[15rem]" />
                <div className="flex gap-3 justify-center">
                    <button onClick={handleAnterior} className="bg-sky-700 rounded-lg text-white p-2 hover:brightness-90">Anterior</button>
                    <button onClick={handleSiguiente} className="bg-sky-700 rounded-lg text-white p-2 hover:brightness-90">Siguiente</button>
                </div>
                
            </div>
            
        }
    </div>
  )
}
