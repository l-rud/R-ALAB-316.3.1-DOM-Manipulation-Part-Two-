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

//Part 2: Creating a Menu Bar
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.setProperty("height", "100%");
/*Set the background color of topMenuEl 
  to the value stored in the --top-menu-bg CSS custom property.*/
topMenuEl.style.setProperty("background", "var(--top-menu-bg)");
//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

//Part 3: Adding Menu Buttons
/*Iterate over the entire menuLinks array and for each "link" object:
  Create an <a> element.
  On the new element, add an href attribute with its value set to the href property of the "link" object.
  Set the new element's content to the value of the text property of the "link" object.
  Append the new element to the topMenuEl element. */

/*var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
]; */

var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];
  const ul = document.createElement("ul");
  ul.listStyleType = "none";
  topMenuEl.appendChild(ul);
  
  menuLinks.forEach((links) => {
    const link = document.createElement("li");
    link.style.display = "inline";
    link.style.margin = "25px";
  
    const aLink = document.createElement("a");
    aLink.textContent = links.text.toUpperCase();
    aLink.setAttribute("src", links.href);
    ul.appendChild(link);
    link.appendChild(aLink);
  });
  
  // R-ALAB 316.3.1 - DOM Manipulation (Part Two)

  // Parts 1-3
  
  // Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");
//Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";
//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
//subMenuEl.style.setProperty("background", "var(--sub-menu-bg)");
subMenuEl.style.setProperty("background", "var(--sub-menu-bg)");
//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");
//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = 0;

//Part 4: Adding Menu Interaction
/*In order to add submenu links, we will need to restructure the menuLinks array within index.js. 
Update the menuLinks array to the following: -- added lines 48-76 --- */

//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelector("a");
//const topMenuLinks = topMenuEl.getElementsByTagName("a");

//Attach a delegated 'click' event listener to topMenuEl.
/* The first line of code of the event listener function should call the event
 object's preventDefault() method.
The second line of code of the function should immediately return if 
the element clicked was not an <a> element.
Log the content of the <a> to verify the handler is working. */
//https://stackoverflow.com/questions/7723188/what-properties-can-i-use-with-event-target
topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (!(event.target.nodeName === "A")) {
    return;
  }
  console.log(event.target.innerHTML);
  const currentBtn = event.target;
  currentBtn.classList.toggle("active");
});
/* Progress Check - Ensure that clicking ABOUT, CATALOG, etc. logs about, catalog, etc. 
when a link is clicked. Clicking anywhere other than on a link should do nothing.*/

/* Now that we have references to each of these links, and a registered event listener, 
we will want to add a toggled "active" state to each menu item, showing whether or not 
it is currently selected: */

/*The event listener should add the active class to the <a> element that was clicked, 
unless it was already active, in which case it should remove it.
The event listener should remove the active class from each other <a> element in topMenuLinks - 
whether the active class exists or not.
Hint: Removing a non-existent class from an element does not cause an error!
Progress Check - Clicking any of the links should make that link active and clear the others. 
Clicking an active link should clear that link. Here is what it should look like so far, 
with "CATALOG" active: */