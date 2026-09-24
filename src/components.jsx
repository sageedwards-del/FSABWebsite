

export function Body() {
    return(
        <>
            <Header />

        </>
    )
}

    export function Header() {
    return(
        <header>
            <hr></hr>
            <h1>Brown On the Web!</h1>
            <h3>Don't lose your links.</h3>
            <hr></hr>
        <nav style={{padding: '15px'}}>

                <p><a href="https://canvas.brown.edu/">Canvas</a></p>
                <p><a href="https://cab.brown.edu/">CAB</a></p>
                <p><a href="https://www.thecriticalreview.org/">The Critical Review</a></p>
                <p><a href="https://softwarecatalog.brown.edu/">Brown Free Software Catalog</a></p>
            
        </nav> 
        </header>
    );
}

export function Footer() {

    return (
        <footer>
            <p>
                &copy;My Website
            </p>
        </footer>
    )
}
