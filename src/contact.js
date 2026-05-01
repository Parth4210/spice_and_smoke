const contact = () => {
    console.log("Clicked on contact page")
    // First clear the page
    const content = document.querySelector("#content")
    content.innerHTML = ''
    const h1 = document.createElement("h1")
    h1.textContent = "Here are the details to contact me 👇"
    content.appendChild(h1)
    const div = document.createElement("div")
    div.classList.add("menuBox")
    div.innerHTML = "Address: 123 Culinary Avenue, xyz. <br><br> Hours: Tue - Sun: 11:00 AM 11:00 PM (Closed Mondays). <br><br> Phone: +91 98765 43210"
    content.appendChild(div)
}

export default contact;