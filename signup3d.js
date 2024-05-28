const signup_link = document.querySelector("#signup-link");
const signin_link = document.querySelector("#signin-link");
const container = document.querySelector(".container");
signup_link.addEventListener("click", () => {
    container.classList.add("signup-mode");
});
signin_link.addEventListener("click", () => {
    container.classList.remove("signup-mode");
})