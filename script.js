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
        if (!mainContent) return;
        // const breadcrumbPage = document.getElementById("breadcrumbPage");

        if (page === "upload" || page === "search") {
            document.querySelector(".slash").style.display = "inline";
        } else {
            document.querySelector(".slash").style.display = "none";
        }

        if (page === "upload") {
            mainContent.innerHTML = `
            <h2 class="text-xl font-semibold mb-4">Upload File</h2>
                <div class="w-full  bg-white p-6 shadow-md rounded-lg">

        <!-- Drag & Drop Upload Box -->
        <div id="drop-area" class="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition">
            <img src="upload.svg">
            <p class="text-gray-500 mb-2">Drag and Drop or Click to Upload</p>
            <input type="file" id="fileInput" class="hidden" accept=".pdf, .png, .jpg" />
            <button id="browseFile" class="px-4 py-2 border border-gray-400 text-gray-700 rounded-lg text-sm hover:bg-gray-100">Browse File</button>
        </div>

        <!-- File Format Info -->
        <p class="text-gray-400 text-sm text-center mt-2">Supported formats: PDF, PNG, JPG. Max Size: 5MB</p>

        <!-- Display Selected File -->
        <div id="file-display" class="mt-4"></div>
    </div>


            <h2 class="text-xl mt-8 font-semibold mb-4">Uploading Files....</h2>
            
<div class="bg-white shadow-md border border-gray-300 flex items-center justify-between p-3 rounded-lg">
    <div class="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
        <img src="file_blue.svg" class="w-5 h-5 rounded-full">
    </div>
    <!--  -->
    <div class="flex gap-1 flex-1 flex-col px-4">
        <p>mithson_resume.docx</p>
        <progress style="height: 5px" class="w-full" value="40" max="100"></progress>
        <div class="flex justify-between text-sm text-gray-600">
            <p>2MB</p>
            <p>40%</p>
        </div>
    </div>
    <img src="cancel.svg" alt="Cancel" class="cursor-pointer w-7 h-7">
</div>

<br>

<div class="bg-white shadow-md border border-gray-300 items-center flex justify-between p-3 rounded-lg">
    <div class="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
        <img src="file_blue.svg" class="w-5 h-5 rounded-full">
    </div>
    <!--  -->
    <div class="flex gap-1 flex-1 flex-col px-4">
        <p>mithsonabhi.PDF</p>
        <progress style="height: 5px" class="w-full" value="80" max="100"></progress>
        <div class="flex justify-between text-sm text-gray-600">
            <p>16MB</p>
            <p>80%</p>
        </div>
    </div>
    <img src="cancel.svg" alt="Cancel" class="cursor-pointer w-7 h-7">
</div>




            `;
        } else if (page === "search") {
            mainContent.innerHTML = `
                <div class="w-full bg-white p-6 shadow-md rounded-lg">
  <h2 class="text-xl font-semibold mb-4">View Search</h2>
  <div class="flex items-center w-full space-x-2">
    <input class="w-full p-4 border border-[#D9D9D9] rounded-[10px]" type="text" placeholder="Search">
    <div class="flex justify-center">
    <button class="rounded-[10px] px-6 py-4 bg-[#5856D6] text-white flex items-center whitespace-nowrap">
        <img src="search_dark_white.svg" alt="Search Icon" class="mr-2 w-5 h-5">
        <p class="pr-2">Search</p>
    </button>
</div>

  </div>
  
<br>
        <p class="text-end font-bold gray-400"> Filter By</p>
<br>

<div class="md:w-full border border-gray-300 rounded-lg shadow-md">
    <!-- Wrapper for responsiveness -->
    <div class="bg-white">
        <table class="md:w-full border-collapse">
            <thead class="bg-[#D9D9D9]">
                <tr>
                    <th class="px-6 py-3 text-left border-b">SR.No.</th>
                    <th class="px-6 py-3 text-left border-b">Name</th>
                    <th class="px-6 py-3 text-left border-b">CV File</th>
                    <th class="px-6 py-3 text-left border-b">Updated File</th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd:bg-white even:bg-[#F2F2F2]">
                    <td class="px-6 py-3 border-b">1</td>
                    <td class="whitespace-nowrap px-6 py-3 border-b">Candidate 1</td>
                    <td class="px-6 py-3 border-b">
                        <p class="flex items-center space-x-2">
                            <img src="file.svg" alt="file logo">
                            <span class="text-[#5856D6] whitespace-nowrap underline">View File</span>
                        </p>
                    </td>
                    <td class="whitespace-nowrap px-6 py-3 border-b">25-Jan-2025</td>
                </tr>
                <tr class="odd:bg-white even:bg-[#F2F2F2]">
                    <td class="px-6 py-3 border-b">2</td>
                    <td class="whitespace-nowrap px-6 py-3 border-b">Candidate 2</td>
                    <td class="px-6 py-3 border-b">
                        <p class="flex items-center space-x-2">
                            <img src="file.svg" alt="file logo">
                            <span class="text-[#5856D6] whitespace-nowrap underline">View File</span>
                        </p>
                    </td>
                    <td class="whitespace-nowrap px-6 py-3 border-b">25-Jan-2025</td>
                </tr>
                <tr class="odd:bg-white even:bg-[#F2F2F2]">
                    <td class="px-6 py-3 border-b">3</td>
                    <td class="whitespace-nowrap px-6 py-3 border-b">Candidate 3</td>
                    <td class="px-6 py-3 border-b">
                        <p class="flex items-center space-x-2">
                            <img src="file.svg" alt="file logo">
                            <span class="text-[#5856D6] whitespace-nowrap underline">View File</span>
                        </p>
                    </td>
                    <td class="whitespace-nowrap px-6 py-3 border-b">25-Jan-2025</td>
                </tr>
                <tr class="odd:bg-white even:bg-[#F2F2F2]">
                    <td class="px-6 py-3 border-b">4</td>
                    <td class="whitespace-nowrap px-6 py-3 border-b">Candidate 4</td>
                    <td class="px-6 py-3 border-b">
                        <p class="flex items-center space-x-2">
                            <img src="file.svg" alt="file logo">
                            <span class="text-[#5856D6] whitespace-nowrap underline">View File</span>
                        </p>
                    </td>
                    <td class="whitespace-nowrap px-6 py-3 border-b">25-Jan-2025</td>
                </tr>
                <tr class="odd:bg-white even:bg-[#F2F2F2]">
                    <td class="px-6 py-3 border-b">5</td>
                    <td class="whitespace-nowrap px-6 py-3 border-b">Candidate 5</td>
                    <td class="px-6 py-3 border-b">
                        <p class="flex items-center space-x-2">
                            <img src="file.svg" alt="file logo">
                            <span class="text-[#5856D6] whitespace-nowrap underline">View File</span>
                        </p>
                    </td>
                    <td class="whitespace-nowrap px-6 py-3 border-b">25-Jan-2025</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

    
</div>

    

            `;
        }
        const breadcrumbPage = document.getElementById("breadcrumbPage");

        if (page === "upload") {
            breadcrumbPage.textContent = "Upload CV";
            console.log('upload')
        } else if (page === "search") {
            breadcrumbPage.textContent = "View Search";
            console.log('view search')
        } else {

            // Default Dashboard Page (Show Buttons)
            mainContent.innerHTML = `
               <h2 class="text-xl font-semibold mb-4">Welcome to Dashboard</h2>

                <div class="grid md:flex md:justify-start grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">

                    <!-- Upload CV -->
                    <button onclick="loadPage('upload')"
                        class="p-4 flex items-center justify-between bg-white shadow-md rounded-lg w-full gap-3">

                        <div class="flex items-center gap-2">
                            <img src="upload_front.svg" alt="" class="">
                            <span class="text-sm font-medium">Upload CV</span>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#000" fill-rule="evenodd"
                                d="M14.601 4.47a.75.75 0 0 1 0 1.06l-6.364 6.364a.25.25 0 0 0 0 .354l6.364 6.364a.75.75 0 0 1-1.06 1.06L7.177 13.31a1.75 1.75 0 0 1 0-2.475L13.54 4.47a.75.75 0 0 1 1.06 0"
                                clip-rule="evenodd" transform="rotate(180 12 12)">
                            </path>
                        </svg>

                    </button>

                    <!-- View Search -->
                    <button onclick="loadPage('search')"
                        class="p-4 flex items-center justify-between bg-white shadow-md rounded-lg w-full gap-3">

                        <div class="flex items-center gap-2">
                            <img src="search_front.svg" alt="" class="">
                            <span class="text-sm font-medium">View Search</span>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#000" fill-rule="evenodd"
                                d="M14.601 4.47a.75.75 0 0 1 0 1.06l-6.364 6.364a.25.25 0 0 0 0 .354l6.364 6.364a.75.75 0 0 1-1.06 1.06L7.177 13.31a1.75 1.75 0 0 1 0-2.475L13.54 4.47a.75.75 0 0 1 1.06 0"
                                clip-rule="evenodd" transform="rotate(180 12 12)">
                            </path>
                        </svg>

                    </button>

                </div>
            `;
            breadcrumbPage.textContent = "";
            sidebar.classList.toggle("-translate-x-full");

        }
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