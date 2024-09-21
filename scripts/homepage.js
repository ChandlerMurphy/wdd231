// Footer Current Year vvv
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

// Footer Last Modified vvv
const lastUpdated = document.querySelector("#lastUpdated");
lastUpdated.innerHTML = (document.lastModified);

// Toggle for Hambuger Menu vvv
const hamButton = document.querySelector("#hamburger");
const ul = document.querySelector("ul");

hamButton.addEventListener("click", () => {
    ul.classList.toggle("open-nav");
    hamButton.classList.toggle("open-ham");
});

// JS Array for Courses vvv
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Creating Course Cards to display
function createCourseCard(courseList) {
    document.querySelector("#course-cards").innerHTML = "";
    courseList.forEach(course => {
        let card = document.createElement("section");
        let courseName = document.createElement("h3");

        courseName.textContent = `${course.subject} ${course.number}`;

        let className = "course-card";
        if (!course.completed) {
            className += " incomplete";
            // card.setAttribute("class", "incomplete")
        } 

        // card.setAttribute("class", "course-card");
        card.setAttribute("class", className)
        card.appendChild(courseName);

        document.querySelector("#course-cards").appendChild(card);
    });
}

const allFilter = document.querySelector("#all-button");
allFilter.addEventListener("click", () => {
    createCourseCard(courses);
});

const cseFilter = document.querySelector("#cse-button");
cseFilter.addEventListener("click", () => {
    createCourseCard(courses.filter(course => course.subject === "CSE"));
});

const wddFilter = document.querySelector("#wdd-button");
wddFilter.addEventListener("click", () => {
    createCourseCard(courses.filter(course => course.subject === "WDD"));
});


createCourseCard(courses);

// Required Credits Function
const totalCredits = courses.reduce((accumulator, course) => {
    return accumulator + course.credits;
}, 0);

document.querySelector("#required-credits").innerHTML = `<section>Total Required Credits: ${totalCredits}`;