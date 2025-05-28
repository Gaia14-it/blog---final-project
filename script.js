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

searchForm.addEventListener("keyup", () => {
    let SearchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm)
    filteredPosts = posts.filter(post => {
        return post.title.inludes(searchTerm)
    })
    displayPost()
    SearchTerm.classList.add("search")
})

function displayPost() {
    
}


j3
j4
j6
j7
j8
t1
t2
t3
t4
t8
b8
