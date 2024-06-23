const menu = () => {
  const menu = document.querySelector("menu");

  const handleMenu = (event) => {
    if (event.target.classList.contains("menu") || event.target.classList.contains("close-btn")) {
      menu.classList.toggle("menu-active");
    } else if (event.target.tagName === "A") {
      menu.classList.remove("menu-active");
    }
  };

  document.addEventListener("click", handleMenu);

  const menuBtn = document.querySelector(".menu");
  menuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

export default menu;
