document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    const linkUrl = link.getAttribute("href");
    if (
      linkUrl === currentUrl ||
      (linkUrl === "/" && currentUrl === "")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
