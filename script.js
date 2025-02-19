document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".slash").style.display = "none";

    const sidebar = document.getElementById("sidebar");
    const openSidebar = document.getElementById("openSidebar");
    const closeSidebar = document.getElementById("closeSidebar");

    if (openSidebar && sidebar) {
        openSidebar.addEventListener("click", () => {
            sidebar.classList.remove("-translate-x-64");
        });
    }

    if (closeSidebar && sidebar) {
        closeSidebar.addEventListener("click", () => {
            sidebar.classList.add("-translate-x-64");
        });
    }

    function loadPage(page) {
    const mainContent = document.getElementById("mainContent");
    const breadcrumbPage = document.getElementById("breadcrumbPage");

    if (!mainContent) return;

    let pageUrl = "";

    switch (page) {
        case "upload":
            pageUrl = "upload.html";
            breadcrumbPage.textContent = "Upload CV";
            break;
        case "search":
            pageUrl = "search.html";
            breadcrumbPage.textContent = "View Search";
            break;
        default:
            pageUrl = "dashboard.html";
            breadcrumbPage.textContent = "";
            break;
    }

    // Fetch the HTML content and load it into mainContent
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found");
            }
            return response.text();
        })
        .then(html => {
            mainContent.innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading the page:", error);
            mainContent.innerHTML = `<p class="text-red-500">Failed to load content.</p>`;
        });
}


    // Attach function to window to make it accessible in HTML
    window.loadPage = loadPage;

});
document.addEventListener("DOMContentLoaded", function () {
    window.loadPage = loadPage;
}); const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
});

// Close sidebar when clicking outside, only if it's open
document.addEventListener("click", (event) => {
    if (!sidebar.classList.contains("-translate-x-full") && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.add("-translate-x-full");
    }
});


function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdownMenu");
    const userSection = document.querySelector(".cursor-pointer");

    if (!dropdown.contains(event.target) && !userSection.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});