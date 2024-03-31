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
    <div>
        {
            pokemon &&
            <div className="flex flex-col justify-center items-center w-[230px] mx-auto bg-green-300 rounded-lg">
                <h2 className="font-bold text-2xl">{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="h-[10rem]" />
                <div className="flex gap-3 justify-center">
                    <button onClick={handleAnterior} className="bg-gray-500 rounded-lg text-white p-2 hover:brightness-150 hover:font-bold">Anterior</button>
                    <button onClick={handleSiguiente} className="bg-gray-500 rounded-lg text-white p-2 hover:brightness-150 hover:font-bold">Siguiente</button>
                </div>
                
            </div>
            
        }
    </div>
  )
}
