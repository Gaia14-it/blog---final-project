let imgs = document.querySelectorAll("img")

imgs.forEach(img => img.addEventListener("click", function(ev) {
    let imgId = ev.target.dataset.imgid;
    console.log(imgId)
    // return `../cedited/${imgId}`
    let newImg = document.createElement("img")
    newImg.style.position = 'absolute';
    newImg.style.left = '75px';
    newImg.style.top = '50px';
    newImg.src = `cedited/${imgId}.png`;

    let parent = document.querySelector(`.side`)
    parent.appendChild(newImg)
}
))