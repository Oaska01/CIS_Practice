import { useState } from 'react'

const Sidebar = () => {
    const [bar, setBar] = useState();
    return (
        // <h3>SideBar</h3>
        <div className = "sidebar">
              <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
        </div>
    )
}
export default Sidebar
