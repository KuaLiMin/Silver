/*set input values*/

$("#font").val(localStorage.getItem("font")).change();

$("#theme").val(localStorage.getItem("theme")).change();
$("#zoom").val(localStorage.getItem("zoom")).change();


/*update values*/
function update(){
    localStorage.font = $("#font").val()
    localStorage.theme = $("#theme").val()
    localStorage.zoom = $("#zoom").val()
}

