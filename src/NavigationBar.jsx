import './NavigationBar.css'
function NavigationBar() {
    return(
        <>
            <nav>
                {/* <h2 id = "NameTop">Damaris</h2> */}
                <div>
                    <ul id = "navbar">
                        <ul class = "menuItems">
                        <li><a href = "#/Home" data-item = "Home">Home</a></li>
                        <li><a href = "#/AboutMe" data-item = "About Me">About Me</a></li>
                        <li><a href = "#/Contact" data-item = "Contact">Contact</a></li>
                        </ul>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default NavigationBar