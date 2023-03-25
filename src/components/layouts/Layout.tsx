import { FC, PropsWithChildren } from 'react';
import { Navbar } from '@nextui-org/react';
import Head from 'next/head';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name='author' content='Javier Párraga' />
        <meta name='description' content='Información sobre el pokémon XXXXX' />
        <meta
          name='keywords'
          content='pokemon, pokémon, pokedex, pokedex app'
        />
      </Head>
      <Navbar>
        <Navbar.Item>
          <Navbar.Brand>Pokemon App</Navbar.Brand>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link href='/'>Home</Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link href='/about'>About</Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link href='/contact'>Contact</Navbar.Link>
        </Navbar.Item>
      </Navbar>
      <main>{children}</main>
    </>
  );
};
