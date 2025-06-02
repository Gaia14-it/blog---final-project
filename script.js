let imgs = document.querySelectorAll("img")

imgs.forEach(img => img.addEventListener("click", function(ev) {
    let imgId = ev.target.dataset.imgid;
    // newImg.style.position = 'absolute';
    // newImg.style.left = '50px';
    // newImg.style.top = '50px';
    let newImg = `cedited/${imgId}.png`;
    let top = document.querySelector("#top-img")
    let bottom = document.querySelector("#bot-img")
    // parent.appendChild(newImg)
    if(ev.target.parentElement.id == "upup" || ev.target.parentElement.id == "up") {
        top.src = newImg;
    } else {
        bottom.src = newImg;
    }
}
))

const searchForm = document.querySelector(".form")
const searchInput = document.querySelector(".input")
let searchBtn = document.querySelector("#searchBtn")
// let filteredPosts = [...posts]
// console.log(filteredPosts)

let posts = [...document.querySelectorAll(".post")]

searchBtn.addEventListener("click", (ev) => {
    ev.preventDefault()
    let searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm)
    console.log(posts)
    let filteredPosts = posts.filter(post => {
        return post.dataset.title.includes(searchTerm)
    })
    displayPost(filteredPosts)
    console.log(filteredPosts)
    // SearchTerm.classList.add("search")
})

let postsContainer = document.querySelector(".container")

function displayPost(filtered) {
    filtered[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
}

