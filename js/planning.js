planningLessons()
function planningLessons(){
    lessons = {
        "les1": ["Sugar sugar sugar pills", `<iframe src="https://connectnpedu-my.sharepoint.com/personal/s10182658_connect_np_edu_sg/_layouts/15/Doc.aspx?sourcedoc={21e0415f-9c8f-49f8-9cda-bd2c8ec714a0}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="1186px" height="691px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>`],
        "les2": ["Give me something more for my wild imagination", "story"],
        "les3": ["Tell me you're something more than some sick fascination", `<p>helloooo</p>`],
        "les4": ["I'm losing count again", `<p>helloooo</p>`],
        "les5": ["You're with me all the time", `<p>helloooo</p>`],
        "les6": ["Oh it's in the back of my mind", `<p>helloooo</p>`],
        "les7": ["If you can summon the strength, tell me", `<p>helloooo</p>`],
    }


    $(".lessonsList").empty()

    for (const [key, value] of Object.entries(lessons)) {
      $(".lessonsList").append(`<button id="`+ key +`" class="cardicle planLesson list-group-item border-0" style="background-color: var(--clrBg); color: var(--bgOpp)">`+ value[0]+`</button>`)
    }
}


$('body').on('click', '.planLesson', function() {
    console.log("abc")
    id = jQuery(this).attr("id")
 
    $(".modal-title").text(lessons[jQuery(this).attr("id")][0])
    $(".modal-body").empty()
    $(".modal-body").append(lessons[jQuery(this).attr("id")][1])
    $('#newsModal').modal('show')
 });