import Nav from "./Nav";
import React from 'react';

export default function Layout({children}) {

    return (
        <>
        <header className="Overskrift">
            <h1>Ressursarkiv</h1>
        </header>

        <Nav></Nav>

        <main>
            <article className="innhold">
                {children}
            </article>
        </main>
      </>
    )
}