cryptsimLessons()
function cryptsimLessons(){
    lessons = {
        "les1": ["Holding & Selling", `<iframe class="col-12" src="https://connectnpedu-my.sharepoint.com/personal/s10206234_connect_np_edu_sg/_layouts/15/Doc.aspx?sourcedoc={cc94c405-5a1f-4d17-bff8-9d2dc9fb1af5}&amp;action=embedview&amp;wdAr=1.3333333333333333" width="1026px" height="793px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>`],
        "les2": ["What Is A Broker", "story"],
        "les3": ["What Is A Fund House", `<p>helloooo</p>`],
        "les4": ["Risk Appetite Experiment", `<p>helloooo</p>`],
        "les5": ["Hedge Funds", `<p>helloooo</p>`],
        "les6": ["The Risks of A New Coin", `<p>helloooo</p>`],
        "les7": ["Dollar Cost Averaging", `<p>helloooo</p>`],
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