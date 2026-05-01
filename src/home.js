import logo from "./../logo.png"

const home = (() => {
    console.log("Clicked on home button")
    // First clear the page
    const content = document.querySelector("#content")
    content.innerHTML = ''
    const top = document.createElement("div")
    top.classList.add("top")

    const logoImg = document.createElement("img")
    logoImg.src = logo
    logoImg.alt = "Restaurant logo"

    const h1 = document.createElement("h1")
    h1.textContent = "A Modern Embrace of Traditional Indian Flavors"

    top.append(logoImg)
    top.append(h1)

    const bottom = document.createElement("div")
    bottom.classList.add("bottom")
    bottom.textContent = "Discover Spice & Smoke, where the rich heritage of North Indian cuisine meets contemporary culinary artistry. We take pride in using authentic spices, the freshest locally-sourced ingredients, and a touch of smoky perfection to elevate classic dishes. Savor the comforting taste of tradition, reimagined for the modern palate in an atmosphere of warmth and sophistication. Join us for an experience that honors old flavors and ignites new ones."

    content.append(top)
    content.append(bottom)
});

export default home;