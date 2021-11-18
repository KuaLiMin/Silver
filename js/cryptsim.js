cryptsimLessons()
function cryptsimLessons(){
    lessons = {
        "les1": ["This is a title", `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently <a href="example.com" target="_blank"><u>with desktop</u></a> publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <img class='col-12' src="https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png"/> <p>another paragraph</p>`],
        "les2": ["title", "story"],
        "les3": ["hello there bank china", `<p>helloooo</p>`]
    }


    $(".lessonsList").empty()

    for (const [key, value] of Object.entries(lessons)) {
      $(".lessonsList").append(`<button id="`+ key +`" class="cardicle finLesson list-group-item border-0" style="background-color: var(--clrBg); color: var(--bgOpp)">`+ value[0]+`</button>`)
    }
}


$('body').on('click', '.finLesson', function() {
    console.log("abc")
    id = jQuery(this).attr("id")
 
    $(".modal-title").text(lessons[jQuery(this).attr("id")][0])
    $(".modal-body").empty()
    $(".modal-body").append(lessons[jQuery(this).attr("id")][1])
    $('#newsModal').modal('show')
 });