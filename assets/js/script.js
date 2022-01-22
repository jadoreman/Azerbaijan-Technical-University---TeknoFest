/*-----------toggle navbar ---------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",  toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/*-----navdaki itemlere klkledigimiz zaman nav kapanasin-------*/
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});

/*----------sticky header--------*/
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky")
    };
})


/*--------competition tabs----*/
const competitionTabs = document.querySelector(".competition-tabs");
competitionTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("competition-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        competitionTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const competitionSection = document.querySelector(".competitions-section");
        competitionSection.querySelector(".competition-tab-content.active").classList.remove("active");

        document.getElementById(target).classList.add("active");

    }
});

