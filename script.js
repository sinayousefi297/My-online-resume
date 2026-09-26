const skills = [

    {
        name: "HTML",
        icon: "devicon-html5-plain",
        percent: 95,
        color: "#e34f26"
    },

    {
        name: "CSS",
        icon: "devicon-css3-plain",
        percent: 85,
        color: "#1572b6"
    },

    {
        name: "JavaScript",
        icon: "devicon-javascript-plain",
        percent: 75,
        color: "#f7df1e"
    },

    {
        name: "Python",
        icon: "devicon-python-plain",
        percent: 80,
        color: "#3776ab"
    },

    {
        name: "Photoshop",
        icon: "devicon-photoshop-plain",
        percent: 90,
        color: "#31a8ff"
    },

    {
        name: "Illustrator",
        icon: "devicon-illustrator-plain",
        percent: 80,
        color: "#ff9a00"
    },

    {
        name: "React",
        icon: "devicon-react-original",
        percent: 70,
        color: "#61dafb"
    },

    {
        name: "C++",
        icon: "devicon-cplusplus-plain",
        percent: 75,
        color: "#00599c"
    },

    {
        name: "Git",
        icon: "devicon-git-plain",
        percent: 85,
        color: "#f05032"
    },

    {
        name: "Figma",
        icon: "devicon-figma-plain",
        percent: 65,
        color: "#a259ff"
    }

];


const container =
    document.getElementById("skills-container");


skills.forEach(skill => {

    

    const degree =
        skill.percent * 1.8;


    const card =
        document.createElement("div");

    card.className =
        "skill-card";


    card.style.setProperty(
        "--accent",
        skill.color
    );


    card.style.setProperty(
        "--angle",
        degree + "deg"
    );


    card.innerHTML = `

        <div class="skill-logo">

            <i class="${skill.icon}"></i>

        </div>


        <div class="skill-name">

            ${skill.name}

        </div>


        <div class="gauge">

            <div class="gauge-bg"></div>

            <div class="gauge-fill"></div>

            <div class="gauge-inner"></div>

        </div>


        <div class="gauge-scale">

            <span>100%</span>

            <span>0%</span>

        </div>


        <div class="percentage">

            ${skill.percent}%

        </div>


        <div class="level">

            میزان تسلط

        </div>

    `;


    container.appendChild(card);

});
