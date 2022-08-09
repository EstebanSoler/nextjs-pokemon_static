
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { useState, useEffect } from 'react';
import { localFavorites } from "../../utils";
import { FavoritesPokemons } from "../../components/pokemon";

const FavoritesPage = () => {

  const [favoritePokemos, setFavoritePokemos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemos(localFavorites.pokemons());
  }, []);
  

  return (
    <Layout title="Pokémons - Favoritos">

      {
        favoritePokemos.length === 0 
        ? (<NoFavorites/>)
        :(
          <FavoritesPokemons pokemons={favoritePokemos} />


        )
      }
      
    </Layout>
  )
}

export default FavoritesPage;
