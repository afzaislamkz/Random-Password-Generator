const btnEL = document.querySelector(".btn");
const inputEL = document.getElementById("input");
const copyIconEL = document.querySelector(".fa-copy");
const alertcontainerEl = document.querySelector(".alert-container");

btnEL.addEventListener("click", () => {
    createPassword();
});
copyIconEL.addEventListener("click", () => {
    copyPassword();
    if(inputEL.value){
    alertcontainerEl.classList.remove("active");
    setTimeout(()=>{
        alertcontainerEl.classList.add("active");
    },2000)
}
});

function createPassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?/";
    const passwordLength = 14;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomnumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomnumber, randomnumber + 1);
    }

    inputEL.value = password;
}
function copyPassword() {
    inputEL.select();
    inputEL.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEL.value);
}