book = document.querySelector('book')
book.forEach(book =>{
    book.addEventListener('click',() =>{
    console.log("hover");
})
})
profile= document.querySelectorAll('login,admin,signup')
profile.forEach(profile => {
    profile.addEventListener('mouseover', () => {
        console.log('Hover');
    })
})
head = document.querySelectorAll('sec1')
head.forEach(head => {
    head.addEventListener('mouseover', () => {
        console.log('Hover:'+ head.querySelector('h5').innerText)
    })
})

const backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});