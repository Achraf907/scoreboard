let scoreEl = document.getElementById("score-el")
let guestEl = document.getElementById("guest-el")
let score = 0
let scoreguest = 0

function add1() {
    score += 1
    scoreEl.textContent = score 
}

function add2() {
    score += 2
    scoreEl.textContent = score 
}

function add3() {
    score += 3
    scoreEl.textContent = score 
}

function add1g() {
    scoreguest += 1
    guestEl.textContent = scoreguest 
}

function add2g() {
    scoreguest += 2
    guestEl.textContent = scoreguest 
}

function add3g() {
    scoreguest += 3
    guestEl.textContent = scoreguest 
}