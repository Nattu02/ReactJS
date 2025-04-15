import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

/* 
    AppLayout component
        Header
            logo
            nav-items
        Body
            Search
            RestaurantList
        Footer
            copyright
            contact
            links

*/

const Header = () =>(
    <div className="header">
        <div className="logo-container">
            <img src="https://th.bing.com/th/id/OIP.laDAVwJUMiGbJQnW7H3OygHaHa?rs=1&pid=ImgDetMain" className="logo" alt="Logo"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img className="res-img" src="https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png" alt="res-image"></img>
            <h3>{props.name}</h3>
            <h4>{props.cusine}</h4>
            <h4>{props.star} ⭐</h4>
            <h4>₹{props.price}</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search" className="search-input"></input>
                <button className="search-btn">Search</button>
            </div>
            <div className="res-container">
                <RestaurantCard name="Meghna Foods" cusine="South Indian, Briyani" star="4" price="230"/>
                <RestaurantCard name="Meghna Foods" cusine="South Indian, Briyani" star="4" price="230"/>
            </div>
        </div>
    )

}

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
)

root.render(<AppLayout />)