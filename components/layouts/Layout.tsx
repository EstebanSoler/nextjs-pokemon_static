import { FC } from "react"
import Head from "next/head"

import { Navbar } from '../ui/Navbar';

type Props = {
  children?: React.ReactNode,
  title?: string;
};

const origin = (typeof window === 'undefined') ? '': window.location.origin;

export const Layout :FC<Props> = ({ children, title }) => {

  return (
    <>
    <Head>
      <title>{title || 'Pokemon App'}</title>
      <meta name="autor" content="Alfredo Esteban Soler"/>
      <meta name="description" content={`Informanción sobre el pokémon ${title}`}/>
      <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
      <meta property="og:title" content={`Informanción sobre ${title}`} />
      <meta property="og:description" content={`Esta es la página sobre ${ title} `} />
      <meta property="og:image" content={`${origin}/img/banner.png`} />
    </Head>
    <Navbar/>
    <main style={{
      padding: '0 20px'
    }}>
      {children}
    </main>
    </>
  )
}