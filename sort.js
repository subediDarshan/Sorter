let myCourses = [
{
    name: "MongoDB Course",
    price: 5
},
{
    name: " Express.js Course",
    price: 7
},
{
    name: "React.js Course",
    price: 1
},
{
    name: "Node.js Course",
    price: 100
}
]

const add = document.querySelector(".add")
add.addEventListener("click", () => {
    const name = document.querySelector("#name").value
    const price = document.querySelector("#price").value 
    
    let newCourse = {}

    newCourse.name = name
    newCourse.price = price
    myCourses.push(newCourse)
    console.log(`Course successfully added.`)
    insertInHtml()
})
   


function insertInHtml(){

    const ul = document.querySelector(".listOfCourses")
    ul.innerHTML = ""

    myCourses.forEach((a) => {

        const li = document.createElement("li")
        li.classList.add("course")

        const name = document.createTextNode(a.name)

        li.appendChild(name)
        ul.appendChild(li)

        const span = document.createElement("span")

        const price = document.createTextNode(a.price)


        span.appendChild(price)
        li.appendChild(span)
    })
}



insertInHtml()




const ascending = document.querySelector(".ascending")
ascending.addEventListener("click", () => {
    myCourses.sort((a,b) => a.price - b.price)
    insertInHtml()
})

const descending = document.querySelector(".descending")
descending.addEventListener("click", () => {
    myCourses.sort((a,b) => b.price - a.price)
    insertInHtml()
})

