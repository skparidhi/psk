const link = document.querySelector(".link");
const transition = document.querySelector(".transition");
link.addEventListener("click", (e) => {
  e.preventDefault();
  transition.classList.add("slide");
  setTimeout(() => {
    window.location = link.href;
  }, 900);
});

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6HTSNEGYV7');
