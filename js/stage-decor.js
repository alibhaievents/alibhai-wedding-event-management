const gallery = document.getElementById("gallery-grid");

const whatsappNumber = "916383212174";

for(let i = 1; i <= 41; i++){

    const num = String(i).padStart(3, '0');

    const code = `SD${num}`;

    const message =
    `Hello Alibhai Wedding & Event Management,

I am interested in Design ${code}.

Please share more details.`;

    const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    gallery.innerHTML += `

    <div class="design-card">

        <a href="images/stage-decor/${code}.jpeg" target="_blank">

            <img
                src="images/stage-decor/${code}.jpeg"
                alt="${code}">

        </a>

        <div class="design-content">

            <h3>${code}</h3>

            <a
                href="${whatsappLink}"
                target="_blank"
                class="select-btn">

                Enquire Now

            </a>

        </div>

    </div>

    `;
}