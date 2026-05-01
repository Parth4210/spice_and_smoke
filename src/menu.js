const menu = () => {
    console.log("Clicked on menu page")
    // First clear the page
    const content = document.querySelector("#content")
    content.innerHTML = ''
    const box1 = document.createElement("div")
    const box2 = document.createElement("div")
    const box3 = document.createElement("div")
    const box4 = document.createElement("div")
    box1.classList.add("menuBox")
    box2.classList.add("menuBox")
    box3.classList.add("menuBox")
    box4.classList.add("menuBox")
    content.appendChild(box1)
    content.appendChild(box2)
    content.appendChild(box3)
    content.appendChild(box4)
    box1.textContent = "Main Course"
    box2.textContent = "Beverages"
    box3.textContent = "Sweets"
    box4.textContent = "Starters"
    const list = document.createElement("ol")
    const main_course = ["fish curry", "butter chicken", "pizza"]
    for (let i = 0; i < main_course.length; i++) {
        const element = main_course[i];
        const li = document.createElement("li")
        li.textContent = element
        list.appendChild(li)
    }
    box1.appendChild(list)
}

export default menu;