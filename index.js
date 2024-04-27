//import "./styles.css";
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
// Menu data structure

//Part 1
//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.setProperty("background", "var(--main-bg)");
/*Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; 
  pick whichever one that you think works best in this situation.*/
const h1Tag = document.createElement("h1");
h1Tag.textContent = "DOM Manipulation";
mainEl.appendChild(h1Tag);
//Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");