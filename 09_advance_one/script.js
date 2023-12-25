const requestUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
let data;
// console.log(xhr.readyState);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState); //constantly monitoring the readyState
  if (xhr.readyState === 4) {
    data = JSON.parse(this.responseText);
    console.log(data.followers);
  }
};
console.log("Here");
xhr.send(); // send calls the open()

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    console.log(data.avatar_url)
    let img = btn.parentNode.children[0];
    // console.log(img.attributes.src)
    img.innerHTML += `
    <img src="${data.avatar_url}" alt="">
    <br>
    followers = ${data.followers}
    `;
    // console.log(img.attributes)
});
