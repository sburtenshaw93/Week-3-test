
function favoriteColor(event){
    event.preventDefault();
    alert("Forest green")
}
document.getElementById('color').addEventListener('click', favoriteColor);

function favoritePlace(event) {
    event.preventDefault();
    alert("Home");

}
document.getElementById('place').addEventListener('click', favoritePlace);

function favoriteRitual(event) {
    event.preventDefault();
    alert("Do things my way");
}
document.getElementById('ritual').addEventListener('click', favoriteRitual);
