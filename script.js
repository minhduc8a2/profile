function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  const elementWidth = el.offsetWidth;
  const elementHeight = el.offsetHeight;
  return (
    rect.top + elementHeight >= 0 &&
    rect.left + elementWidth >= 0 &&
    rect.bottom - elementHeight <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right - elementWidth <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}
setInterval(() => {
  const slideToLeftElements = document.querySelectorAll(
    ".ready-for-slide-to-left"
  );
  slideToLeftElements.forEach((element) => {
    if (isInViewport(element)) element.classList.add("slide-to-left");
    else element.classList.remove("slide-to-left");
  });
  const slideToRightElements = document.querySelectorAll(
    ".ready-for-slide-to-right"
  );
  slideToRightElements.forEach((element) => {
    if (isInViewport(element)) element.classList.add("slide-to-right");
    else element.classList.remove("slide-to-right");
  });

  //top
  const slideToTopElements = document.querySelectorAll(
    ".ready-for-slide-to-top"
  );
  slideToTopElements.forEach((element) => {
    if (isInViewport(element)) element.classList.add("slide-to-top");
    else element.classList.remove("slide-to-top");
  });

  //rotate
  const rotateElements = document.querySelectorAll(".ready-for-rotate");
  rotateElements.forEach((element) => {
    if (isInViewport(element)) element.classList.add("rotateAnimation");
    else element.classList.remove("rotateAnimation");
  });
}, 100);


// const sendBtn = document.querySelector("#submit-btn");
// sendBtn.addEventListener("click",(e)=>{
//   e.preventDefault();
//   const inputName = document.querySelector('input[name="name"]');
//   const inputSubject = document.querySelector('input[name="subject"]');
//   const inputEmail = document.querySelector('input[name="email"]');
//   const inputMessage = document.querySelector('input[name="message"]');
//   if(!inputName || !inputMessage || !inputEmail|| !inputSubject) return;
//   location.replace(`mailto:minhduc8a2.1@gmail.com?subject=${inputSubject}&body=${inputMessage}`); 
// })
