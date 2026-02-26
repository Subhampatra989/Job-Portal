let jobs = JSON.parse(localStorage.getItem("jobs")) || [
    { title: "Frontend Developer", company: "Microsoft", location: "Bangalore" },
    { title: "Backend Developer", company: "Amazon", location: "Pune" },
    { title: "UI/UX Designer", company: "Adobe", location: "Chennai" }
];

const jobList = document.getElementById("jobList");
const addJobBtn = document.getElementById("addJobBtn");
const searchBtn = document.getElementById("searchBtn");

function saveToLocalStorage() {
    localStorage.setItem("jobs", JSON.stringify(jobs));
}

function displayJobs(jobArray) {
    jobList.innerHTML = "";

    jobArray.forEach((job, index) => {
        const card = document.createElement("div");
        card.classList.add("job-card");

        card.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <p>Location: ${job.location}</p>
            <button class="update-btn">Update</button>
            <button class="delete-btn">Delete</button>
        `;

        card.querySelector(".delete-btn").addEventListener("click", () => {
            jobs.splice(index, 1);
            saveToLocalStorage();
            displayJobs(jobs);
        });

        card.querySelector(".update-btn").addEventListener("click", () => {
            const newTitle = prompt("Enter new title:", job.title);
            const newCompany = prompt("Enter new company:", job.company);
            const newLocation = prompt("Enter new location:", job.location);

            if (newTitle && newCompany && newLocation) {
                jobs[index] = {
                    title: newTitle,
                    company: newCompany,
                    location: newLocation
                };
                saveToLocalStorage();
                displayJobs(jobs);
            }
        });

        jobList.appendChild(card);
    });
}

addJobBtn.addEventListener("click", () => {
    const title = document.getElementById("jobTitle").value;
    const company = document.getElementById("companyName").value;
    const location = document.getElementById("jobLocation").value;

    if (title && company && location) {
        jobs.push({ title, company, location });
        saveToLocalStorage();
        displayJobs(jobs);

        document.getElementById("jobTitle").value = "";
        document.getElementById("companyName").value = "";
        document.getElementById("jobLocation").value = "";
    } else {
        alert("Please fill all fields");
    }
});

searchBtn.addEventListener("click", () => {
    const keyword = document.getElementById("searchInput").value.toLowerCase();

    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.location.toLowerCase().includes(keyword)
    );

    displayJobs(filtered);
});

displayJobs(jobs);