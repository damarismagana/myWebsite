import './NavigationBar.css'
function NavagationBar() {
    return(
        <>
            <nav>
                <h2 if = "NameLeft">
                    Damaris
                </h2>
                <div>
                    <ul id = "navbar">
                        <li><a href = "#/Home">Home</a></li>
                        <li><a href = "#/AboutMe">About Me</a></li>
                        <li><a href = "#/Contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default NavagationBar