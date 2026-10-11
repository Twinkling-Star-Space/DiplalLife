
const sections = [
    {
        title: "Who am I?",
        photo: "images/education.png",
        description: "My academic journey and learning progress." ,
        details: []
    },
    {
        title: "My Academic Life",
        photo: "images/engineering.png",
        description: "My projects, experiments, and technical skills.",
        details: [
            {
                dphoto: "images/education.png",
                description: "This is my first project."
            },
            {
                dphoto: "images/engineering.png",
                description: "My journey into engineering."
            }
        ]
    },
    {
        title: "My Culture & My Roots",
        photo: "images/culture.png",
        description: "My hometown, traditions, and cultural identity.",
        details: [
            {
                dphoto: "images/education.png",
                description: "This is my first project."
            },
            {
                dphoto: "images/engineering.png",
                description: "My journey into engineering."
            }
        ]
    },
    {
        title: "Projects & Research",
        photo: "images/leadership.png",
        description: "My projects and research experiences.",
        details: [
            {
                dphoto: "images/education.png",
                description: "This is my first project."
            },
            {
                dphoto: "images/engineering.png",
                description: "My journey into engineering."
            }
        ]
    },
    {
        title: "Community and Service",
        photo: "images/engineering.png",
        description: "My projects, experiments, and technical skills.",
        details: [
            {
                dphoto: "images/education.png",
                description: "This is my first project."
            },
            {
                dphoto: "images/engineering.png",
                description: "My journey into engineering."
            }
        ]
    },
    {
        title: "Competition and My Achievement",
        photo: "images/engineering.png",
        description: "My projects, experiments, and technical skills.",
        details: [
            {
                dphoto: "images/education.png",
                description: "This is my first project."
            },
            {
                dphoto: "images/engineering.png",
                description: "My journey into engineering."
            }
        ]
    },
    {
        title: "Sport, Hobbies, my Personal life",
        photo: "images/engineering.png",
        description: "My projects, experiments, and technical skills.",
        details: [
            {
                dphoto: "images/education.png",
                description: "This is my first project."
            },
            {
                dphoto: "images/engineering.png",
                description: "My journey into engineering."
            }
        ]
    },
    {
        title: "Journal & Reflection",
        photo: "images/engineering.png",
        description: "My projects, experiments, and technical skills.",
        details: [
            {
                dphoto: "images/education.png",
                description: "This is my first project."
            },
            {
                dphoto: "images/engineering.png",
                description: "My journey into engineering."
            }
        ]
    },
    {
        title: "My Garden",
        photo: "images/engineering.png",
        description: "My projects, experiments, and technical skills.",
        details: [
            {
                dphoto: "images/education.png",
                description: "This is my first project."
            },
            {
                dphoto: "images/engineering.png",
                description: "My journey into engineering."
            }
        ]
    },
   
];

const mainBody = document.getElementById("main-body");

mainBody.innerHTML = sections.map((section, index) => `
    <section class="content-section ${index % 2 === 0 ? "reverse" : ""}">

        <img class="photo"
             src="${section.photo}"
             alt="${section.title}">

        <div class="section-text">

            <h2 class="title">${section.title}</h2>

            <p class="text-about-me">
                ${section.description}
            </p>

            ${section.details.map(detail => `
                <div class="details">
                    <img class="p1"
                         src="${detail.dphoto}"
                         alt="${detail.description}">

                    <p class="description">
                        ${detail.description}
                    </p>
                </div>
            `).join("")}

        </div>
    </section>
`).join("");