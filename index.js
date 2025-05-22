let home = 0
let guest = 1

document.getElementById("homeScore").textContent = home
document.getElementById("guestScore").textContent = guest

let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

function onePointHome() {
    let score = home += 1
    homeScore.textContent = score
};

function twoPointshome() {
    let score = home += 2
    homeScore.textContent = score
}

function threePointsHome() {
    let score = home += 3
    homeScore.textContent = score
}

function onePointGuests() {
    let score = guest += 1
    guestScore.textContent = score
};

function twoPointsGuests() {
    let score = guest += 2
    guestScore.textContent = score
}

function threePointsGuests() {
    let score = guest += 3
    guestScore.textContent = score
}