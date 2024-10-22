// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  // Function to show the content of the first tab and add active class
  function showFirstTab() {
    var tabs = document.querySelectorAll(".tabs-content article");
    tabs.forEach(function (tab) {
      tab.style.display = "none";
    });

    var firstTab = document.getElementById("tabs-1");
    if (firstTab) {
      firstTab.style.display = "block";
      var tabLink = document.querySelector('a[href="#tabs-1"]');
      tabLink.classList.add("ui-tabs-active");
    }
  }

  // Call the function to show the first tab content and add active class when the page loads
  showFirstTab();

  // Function to switch tabs when clicked and add active class
  function showTab(tabId) {
    var tabs = document.querySelectorAll(".tabs-content article");
    tabs.forEach(function (tab) {
      tab.style.display = "none";
    });

    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.style.display = "block";
      var tabLinks = document.querySelectorAll("#tabs ul li a");
      tabLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      var selectedTabLink = document.querySelector('a[href="#' + tabId + '"]');
      if (selectedTabLink) {
        selectedTabLink.classList.add("ui-tabs-active");
      }
    }
  }

  // Attach click event listeners to tab links
  var tabLinks = document.querySelectorAll("#tabs ul li a");
  tabLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var tabId = this.getAttribute("href").substring(1);
      showTab(tabId);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menuTrigger = document.querySelector(".menu-trigger");
  var mainNav = document.querySelector(".main-nav .nav");

  menuTrigger.addEventListener("click", function () {
    if (mainNav.style.display === "none" || mainNav.style.display === "") {
      mainNav.style.display = "block";
    } else {
      mainNav.style.display = "none";
    }
  });
});
