const whatsappNumber = "6383212174";

/* COUNTS */

const homeCount = 45;
const stageCount = 41;
const garlandCount = 63;

/* LOAD DESIGNS */

loadDesigns(
"home-grid",
"images/home-decor/",
"HD",
homeCount,
"Home Decoration"
);

loadDesigns(
"stage-grid",
"images/stage-decor/",
"SD",
stageCount,
"Stage Decoration"
);

loadDesigns(
"garland-grid",
"images/garland/",
"GL",
garlandCount,
"Garland"
);

/* GENERATE CARDS */

function loadDesigns(
containerId,
folder,
prefix,
count,
category
){

const container =
document.getElementById(containerId);

for(let i = 1; i <= count; i++){

    const number =
    String(i).padStart(3,'0');

    const code =
    prefix + number;

    const image =
    folder + code + ".jpeg";

    const message =
    `Hello Alibhai Wedding & Event Management,


I am interested in ${category} Design ${code}.

Please share more details.`;

    const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    container.innerHTML += `

    <div class="design-card">

        <img src="${image}" alt="${code}">

        <div class="design-content">

            <h3>${code}</h3>

            <p>${category}</p>

            <a href="${whatsappLink}"
               target="_blank"
               class="select-btn">

               Select Design

            </a>

        </div>

    </div>

    `;
}


}

/* TAB SWITCH */

function showCategory(category){

```
document.getElementById("home")
.style.display = "none";

document.getElementById("stage")
.style.display = "none";

document.getElementById("garland")
.style.display = "none";

document.getElementById(category)
.style.display = "block";

const buttons =
document.querySelectorAll(".tab-btn");

buttons.forEach(btn =>
btn.classList.remove("active"));

event.target.classList.add("active");
```

}
