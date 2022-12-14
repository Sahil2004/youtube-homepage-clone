function showScrollbar(x) {
    x.style.overflowY = "scroll";
}

function hideScrollbar(x) {
    x.style.overflowY = "hidden";
}

const horizontalScroll = document.getElementById("horizontalScrolling");
const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");
horizontalScroll.addEventListener('wheel', (e) => {
    const width = horizontalScroll.scrollWidth - horizontalScroll.clientWidth - 10;
    horizontalScroll.scrollLeft += e.deltaY*1.5;
    if ((horizontalScroll.scrollLeft+(e.deltaY*1.5)) <= 10) {
        leftArrow.style.display = "none";
    } else {
        leftArrow.style.display = "flex";
    }
    if ((horizontalScroll.scrollLeft+(e.deltaY*1.5)) >= width) {
        rightArrow.style.display = "none";
    } else {
        rightArrow.style.display = "flex";
    }
    e.preventDefault();
});

function moveRight() {
    const width = horizontalScroll.scrollWidth - horizontalScroll.clientWidth - 10;
    horizontalScroll.scrollLeft += 150;
    leftArrow.style.display = "flex";
    if ((horizontalScroll.scrollLeft + 150) >= width) {
        rightArrow.style.display = "none";
    } else {
        rightArrow.style.display = "flex";
    }
}

function moveLeft() {
    const width = horizontalScroll.scrollWidth - horizontalScroll.clientWidth - 10;
    horizontalScroll.scrollLeft -= 150;
    if ((horizontalScroll.scrollLeft - 150) <= 0) {
        leftArrow.style.display = "none";
    } else {
        leftArrow.style.display = "flex";
    }
    rightArrow.style.display = "flex";
}

const expandedNav = document.getElementById("expandedNav");
const shortNav = document.getElementById("shortNav");
const mainWorkspace = document.getElementById("mainWorkspace");
const right = document.getElementById("right");
const card = document.querySelectorAll(".card");
function toggleNav() {
    if (expandedNav.style.display != "none") {
        expandedNav.style.display = "none";
        shortNav.style.display = "flex";
        mainWorkspace.style.gridTemplateColumns = "repeat(5, auto)";
        right.style.width = "calc(100vw - 80px)";
        mainWorkspace.style.padding = "30px 0 0 0";
        for (let i = 0; i < card.length; i++) {
            card[i].style.width = "330px";
        }
    } else {
        expandedNav.style.display = "block";
        shortNav.style.display = "none";
        mainWorkspace.style.gridTemplateColumns = "repeat(4, auto)";
        right.style.width = "calc(100vw - 300px)";
        mainWorkspace.style.padding = "30px 40px 0 40px";
        for (let i = 0; i < card.length; i++) {
            card[i].style.width = "350px";
        }
    }
}