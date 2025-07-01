// Will toggle the title number of a highlighted image card
function toggleTitle(titleNumber){

    // Find the p tag acting as the title
    var title = document.querySelector(`#card-num-${titleNumber}`);
    
    // Toggle the invisible class on the title (display / no display)
    title.classList.toggle("invisible");
}


// Will toggle the modal box of a specified modal
function toggleModal(titleNumber){
    // Find the modal we're toggling
    var modal = document.querySelector(`#modal-${titleNumber}`);

    // Toggle the invisibility affect of the modal (turn it off / on)
    modal.classList.toggle("model-visible");
}



