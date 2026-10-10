const STATUS = {
    taken: { label: "Taken", color: "#b91081" },
    current: { label: "Currently taking", color: "#0bf588" },
    upcoming: { label: "Yet to take", color: "#8b5cf6" }
};

const COURSES = [
    {
        code: "CS222",
        title: "Data Structures and Algorithms",
        status: "taken",
        weeks: [
            {
                title: "Week 1: Algorithm Analysis",
                topics: [
                    { name: "Part 1", file: "https://canva.link/x3glgv5ohrn3x3j" },
                    { name: "Part 2", file: "https://canva.link/xco5566fedmaxz5" }
                ]
            },
            {
                title: "Week 2: Linked lists",
                topics: [
                    { name: "Linked lists", file: "https://canva.link/atk3mmujrtv29xa" }
                ]
            },
            {
                title: "Week 3: Generics",
                topics: [
                    { name: "Java Generics", file: "https://canva.link/xhvpbyftca25aea" }
                ]
            },
            {
                title: "Week 4: Stacks and queues",
                topics: [
                    { name: "Stack and Queue array implementation", file: "https://canva.link/0vx6fyvnifkbugu" },
                    { name: "Stack and Queue linked list implementation", file: "https://canva.link/1frmnso45z1esi7" }
                ]
            },
            {
                title: "Week 5: Searching and Sorting",
                topics: [
                    { name: "Searching Algorithms", file: "https://canva.link/18h5660rptfhrm7" },
                    { name: "Sorting Algorithms", file: "https://canva.link/cap0hg9gxsflo3p" }
                ]
            }
        ]
    },
    {
        code: "MATH 212",
        title: "Linear Algebra",
        status: "current",
        weeks: [
            {
                title: "Week 1",
                topics: [
                    { name: "Week 1 Slides", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:25ebbfec-57d9-46c9-b919-cee73c878ac0" },
                    { name: "Week 1 Discussion", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:3bac8102-52ff-4c92-83a3-28fe458690e4" }
                ]
            },
            {
                title: "Week 2",
                topics: [
                    { name: "Week 2 slides", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:7ecc1b1e-f4a4-40a8-91ba-c99da006ef73" },
                    { name: "Week 2 Discussion", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:cae25048-aa99-49cb-a89f-1b15f7823256" }
                ]
            },
            {
                title: "Week 3",
                topics: [
                    { name: "Week 3 Discussion", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:655386fa-aeaa-432c-937d-4c3c471558b9" }
                ]
            },
            {
                title: "Week 4",
                topics: [
                    { name: "Week 4 Slides", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:8d3d01e7-00dc-4171-9ad8-d7d3c0b9c4d6" },
                    { name: "Week 4 Discussion", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:88308432-1be9-403e-8424-459b857862f6" }
                ]
            },
            {
                title: "Week 5",
                topics: [
                    { name: "Week 5 Slides", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:ac988d1a-3204-4440-af19-35a559bf9437" },
                    { name: "Week 5 Discussion", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:3291a8c4-6978-4866-be52-9ecdd40158ba" }
                ]
            }
        ]
    },
    {
        code: "CS323",
        title: "Database Systems",
        status: "upcoming",
        weeks: [
            {
                title: "Week 1",
                topics: [
                    { name: "Introduction", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:83bc4bd4-540c-410d-a71d-8eebc9f73022" }
                ]
            },
            {
                title: "Week 2",
                topics: [
                    { name: "Database Environment", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:dc801567-4912-4013-9b13-6931bc9c14cf"}
                ]
            },
            {
                title: "Week 3",
                topics: [
                    { name: "Data Definition and Manipulation", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:8b11ded1-c43f-4f3d-ae44-eb8900f28d9c" }
                ]
            },
            {
                title: "Week 4",
                topics: [
                    { name: "The Relational Data Model & Relational Database Constraints", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:9b9c48e0-9803-4d65-8409-bfb3464cbd61" }
                ]
            },
            {
                title: "Week 5",
                topics: [
                    { name: "Set Operations", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:6fb00aa1-a276-4ca0-b5a3-1f51e7ad5726" },
                    { name: "The Relational Algebra & Relational Calculus", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:d04a0c30-398f-41e6-aff5-76a5a3f6f713" }
                ]
            }
        ]
    },
    {
        code: "CS341",
        title: "Web Technologies",
        status: "upcoming",
        weeks: [
            {
                title: "Week 1",
                topics: [
                    { name: "Lesson 1", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:24b6ce27-5b03-4051-a148-8e8920f51f0a" },
                    { name: "Lesson 2", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:17cbb5bc-3821-41c5-ba1e-64c00a822a82" },
                    { name: "Lesson 3", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:880c6154-75a5-4a01-ba0f-f14d0b8543ef" }
                ]
            },
            {
                title: "Week 2",
                topics: [
                    { name: "Lesson 4", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:9face888-1c78-4556-8c40-4289e8f658fb" },
                    { name: "Lesson 5", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:d7cfeaa3-e60d-490c-9833-630853229fa3" },
                    { name: "Lesson 6", file: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:9d15258a-0fa9-4e77-99ac-c71bca484a1d" }
                ]
            },
            {
                title: "Week 3",
                topics: [
                    { name: "Lesson 7", file: "https://acrobat.adobe.com/id/urn:aaid:sc:eu:d6f4b13b-4d86-4044-8aca-4cbe3ba768dc" },
                    { name: "Lesson 8", file: "https://youtu.be/teDnlctcNpw?si=GvXAH1fW5wvISZ8c" }
                ]
            },
            {
                title: "Week 4",
                topics: [
                    { name: "Lesson 9", file: "https://youtu.be/GZ84-O707aU?si=dz0LzURI_uusQyzU" },
                    { name: "Lesson 10", file: "https://youtu.be/KeGwiXu6XXw?si=mts-zkq-fFI9nZog" }
                ]
            },
            {
                title: "Week 5",
                topics: [
                    { name: "Lesson 11", file: "https://youtu.be/kAKI0EjRXW0?si=CmBz9luYcmN-jnPi" },
                    { name: "Lesson 12", file: "https://youtu.be/pe8gI0BDLAQ?si=AwkBNZyy3jyAwVVh" },
                    { name: "Lesson 13", file: "https://youtu.be/avIOnADE35k?si=bx5Dxm7up7_J8Qvw" }
                ]
            }
        ]
    },
    {
        code: "CS330",
        title: "Hardware and Systems Fundamentals",
        status: "current",
        weeks: [
            {
                title: "Week 1",
                topics: [
                    { name: "Introduction and Definitions", file: "https://1drv.ms/p/c/9909e4a2549f88dc/IQDPXFyq44zJS6lbcyR11TLUAWN-7NLhfjw77x7VT9Sw7Ak?e=kyNPXz" },
                ]
            },
            {
                title: "Week 2",
                topics: [
                    { name: "Systems Architecture & Designing for Energy Efficiency", file: "https://1drv.ms/p/c/9909e4a2549f88dc/IQA-VGJJOWtSQpDccPK6-ZOQAQXySlKt4nH3e5hhglfbqng?e=l13ixf" },
                ]
            }
        ]
    }
];