const usersData = [
    {
        displayPic: "https://i.pinimg.com/564x/6b/89/78/6b897818688372f067de8475e998903e.jpg",
        location: "Goalchamot, Faridpur, BD",
        name: "Zenitsu",
        age: 16,
        interest: [{
            icon: `<i class="ri-gamepad-line"></i>`,
            interest: "Gaming",
        }, 
        {
            icon: `<i class="ri-women-line"></i>`,
            interest: "Simping",
        }, 
        {
            icon: `<i class="ri-thunderstorms-line"></i>`,
            interest: "Fighting",
        }],

        bio: "Zenitsu Agatsuma is a character in the manga and anime series Demon Slayer: Kimetsu no Yaiba. Zenitsu is a talented swordsman with heightened hearing, which allows him to detect danger and pick up people's thoughts and emotions.",
        isFriends: null,
    },

    {
        displayPic: "https://i.pinimg.com/564x/d0/fb/0c/d0fb0c1cd145983a454e57b046178c8d.jpg",
        location: "Alipur, Faridpur, BD",
        name: "Tanjiro",
        age: 15,
        interest: [{
            icon: `<i class="ri-gamepad-line"></i>`,
            interest: "Gaming",
        }, 
        {
            icon: `<i class="ri-slice-line"></i>`,
            interest: "Slicing",
        }, 
        {
            icon: `<i class="ri-thunderstorms-line"></i>`,
            interest: "Fighting",
        }],

        bio: "Tanjiro Kamado was born into a family of coal burners in the mountainside during Japan's Taisho Period (July 30th, 1912 to December 25th, 1926).",
        isFriends: null,
    },
    
    {
        displayPic: "https://i.pinimg.com/564x/d5/60/44/d56044c76b95204408ba2086914827c6.jpg",
        location: "Ishan Gopalpur, Faridpur, BD",
        name: "Rengoku",
        age: 20,
        iinterest: [{
            icon: `<i class="ri-gamepad-line"></i>`,
            interest: "Gaming",
        }, 
        {
            icon: `<i class="ri-slice-line"></i>`,
            interest: "Slicing",
        }, 
        {
            icon: `<i class="ri-thunderstorms-line"></i>`,
            interest: "Fighting",
        }],

        bio: "Rengoku is fairly tall by Japanese standards and has a relatively muscular build. He has bright yellow hair with red streaks, black-forked eyebrows, and golden eyes.",
        isFriends: null,
    },
    

    {
        profilePic: "/img/meh",
        displayPic: "https://i.pinimg.com/564x/ca/d8/7f/cad87fa417584f6fb8507bf95cb33afc.jpg",
        location: "Baitul Aman, Faridpur, BD",
        name: "Obanai",
        age: 21,
        interest: [{
            icon: `<i class="ri-gamepad-line"></i>`,
            interest: "Gaming",
        }, 
        {
            icon: `<i class="ri-slice-line"></i>`,
            interest: "Slicing",
        }, 
        {
            icon: `<i class="ri-thunderstorms-line"></i>`,
            interest: "Fighting",
        }],

        bio: "Obanai is a young man of short stature, pale skin complexion, and a fairly muscular build. He has straight-edged black hair of varying lengths, the longest reaching down to his shoulders.",
        isFriends: null,
    },

    
    
]

let curr = 0;
let isAnimating = false;

function setData(index) {
    document.querySelector(".address h1").textContent = usersData[index].location;

    document.querySelector(".name-age h1:nth-child(1)").textContent = usersData[index].name;
    document.querySelector(".name-age h1:nth-child(2)").textContent = usersData[index].age;

    let cnt = "";
    usersData[index].interest.forEach(function(interest) {
        cnt += `<div class="tag1 flex items-center gap-3 bg-white/30 px-3 py-1 rounded-full capitalize">
        ${interest.icon}
        <p class="text-base font-medium">${interest.interest}</p>
    </div>`;
    });

    document.querySelector(".tags").innerHTML = cnt;

    document.querySelector(".bio h1").textContent = usersData[index].bio;

}
(function setInitial() {
    document.querySelector(".main-card img").src = usersData[curr].displayPic;
    document.querySelector(".incoming-card img").src = usersData[curr + 1]?.displayPic;

    setData(curr);
    
    curr = 2;
    
})();

function imageChange() {
    if (!isAnimating) {
        isAnimating = true;

        let tl = gsap.timeline({
            onComplete: function() {
                isAnimating = false;
                let main = document.querySelector(".main-card");
                let incoming = document.querySelector(".incoming-card");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incoming-card");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1,
                });
    
                if (curr == usersData.length) {
                    curr = 0;
                }
                document.querySelector(".main-card img").src = usersData[curr].displayPic;
                curr++;
    
                main.classList.remove("main-card");
    
                incoming.classList.add("main-card");
                main.classList.add("incoming-card");
    
            },
        });
        tl.to(".main-card", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .7,
        }, "a")
        .from(".incoming-card", {
            scale: 1.3,
            opacity: 0,
            ease: Circ,
            duration: 1.1,
        }, "a");
    }

};

let deny = document.querySelector(".deny");
let accept = document.querySelector(".accept");

deny.addEventListener("click", function(){
    imageChange();
    setData(curr - 1);

    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: .06,
        duration: 1.2,
        ease: Circ,
    });
});

accept.addEventListener("click", function(){
    imageChange();
    setData(curr - 1);

    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: .06,
        duration: 1.2,
        ease: Circ,
    });
});

(function containerCreator() {
    document.querySelectorAll(".element").forEach(function (element) {
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, `overflow-hidden`);

        div.appendChild(element);
        document.querySelector(".details").appendChild(div);
    });
})();

