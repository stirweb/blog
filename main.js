import "./src/scss/style.scss";

(function () {
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  const header = document.querySelector("header");

  const mobileNavOpen = document.querySelector(".mobile-nav-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  const closeBtn = document.querySelector(".mobile-nav-btn-close");
  const menuItems = document.querySelectorAll(".mobile-nav .menu-item-has-children > a");

  const mobilePrimary = document.querySelector("#menu-menu > li");

  if (mobilePrimary) {
    const backBtn = document.createElement("li");
    backBtn.classList.add("spacer");
    backBtn.textContent = ".";
    mobilePrimary.insertBefore(backBtn, mobilePrimary.firstChild);
  }

  mobileNavOpen &&
    mobileNavOpen.addEventListener("click", (event) => {
      mobileNav.classList.remove("hide");
      footer.classList.add("hide");
      main.classList.add("hide");
      header.classList.add("hide");
    });

  closeBtn &&
    closeBtn.addEventListener("click", (event) => {
      mobileNav.classList.add("hide");
      footer.classList.remove("hide");
      main.classList.remove("hide");
      header.classList.remove("hide");
    });

  // closeBtn.addEventListener("click", function () {
  //   mobileNav.classList.remove("active");
  // });

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const subMenu = this.nextElementSibling;
      subMenu.classList.add("active");

      // Add "Back" button
      const backBtn = document.createElement("li");
      backBtn.classList.add("back-btn");
      backBtn.textContent = "Back";
      subMenu.insertBefore(backBtn, subMenu.firstChild);

      // Add "Overview" link
      const overviewLink = document.createElement("li");
      overviewLink.classList.add("overview-link");
      const overviewAnchor = document.createElement("a");
      overviewAnchor.href = this.getAttribute("href");
      overviewAnchor.textContent = "Overview";
      overviewLink.appendChild(overviewAnchor);
      subMenu.insertBefore(overviewLink, backBtn.nextSibling);

      backBtn.addEventListener("click", function () {
        subMenu.classList.remove("active");
        backBtn.remove();
        overviewLink.remove();
      });
    });
  });
})();
