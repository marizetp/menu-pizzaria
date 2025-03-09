import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App(){
    return (
        <div className='container'>
           <Header/>
           <Menu/>
           <Footer/>

        </div>)
       
}

function Header(){
    return (
        <div className='header'>
            <h1 >PIZZARIA</h1>
        </div>
    )
}

function Menu(){
    const numPizzas = pizzaData.length;
    return (
    <main className='menu'>
            <h2>MENU</h2>
        {numPizzas > 0 ?(
             <ul className='pizzas'>
             {pizzaData.map(pizza => (
                 <Pizza 
                 pizza={pizza}
                 />
             ))} 
         </ul>) : <p>Estamos sem pizza :( </p>
        }
       
    </main>
        
    )   
}

function Pizza({pizza}){

    //if (pizza.soldOut) return null;
    const esgotada = pizza.soldOut;
    return (
        <li className={esgotada ? 'pizza sold-out' : 'pizza'}>
            <img src={pizza.photoName} alt='pizza'/>
            <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>{esgotada ? 'ESGOTADA!' : pizza.price}</span>
            </div>      
            
        </li>
    )
}

function Footer(){ 
    const hora = new Date().getHours();
    const horaAbertura = 9, horaEncerramento = 22;
    let msg;
    const isOpen = hora >= horaAbertura && hora < horaEncerramento;
    msg = isOpen ? 'Estamos abertos': 'Estamos fechados'
    return (
         <footer className='footer'>
           <p>
            {new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'})} <br/>{msg}
           </p>
            
           {isOpen && <button className='btn'>Pedir</button> }

        </footer>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
     <App/>
     </React.StrictMode>);