const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener('click', ()=> {
    question.innerHTML = "Aaaaa, I like you too";
    gif.src =
        "https://media.tenor.com/IfHUKhUr5iQAAAAC/tonton-friends.gif";
});

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.Width;
    const maxY = window.innerHeight - noBtnRect.Height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.Style.left =randomX + 'px';
    noBtn.Style.top = randomY + 'px';
});