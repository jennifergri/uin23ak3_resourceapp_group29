
export default function Layout({children}) {

    return (
        <>
        <header className="Overskrift">
            <h1>Ressursarkiv</h1>
        </header>

        <nav className="faneMeny">
        </nav>

        <main>
            <article className="innhold">
                {children}
            </article>
        </main>
      </>
    )
}