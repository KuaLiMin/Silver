$('a[href$="finarticles.html"]').attr('style', 'color: var(--clrStrongFocus) !important');

/*Finance news RSS*/
finNews()
function finNews() {
        var news = []

         const proxyUrl = "https://cors-anywhere.herokuapp.com/"
         const url = `${proxyUrl}https://www.channelnewsasia.com/rssfeeds/8395954`;
         
         /*fetch news*/
         fetch(url)
         .then(response => response.text())
         .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
         .then(function(data){  
         var channel = data.querySelectorAll("channel")[0]
         //$("#update").text(channel.querySelectorAll("lastBuildDate")[0].innerHTML) /*change updated date*/


         if (channel != null)
         {
         /*update articles*/
               $(".theNews").empty(); /*clear div*/
               var arti = channel.querySelectorAll("item")
            for (p = 0; p < 20; p++){
                  /*get relevant variables*/
                  var tit = arti[p].querySelectorAll("title")[0].innerHTML
                  var tim = new Date().getHours() - Number(arti[p].querySelectorAll("pubDate")[0].innerHTML.slice(17,19))

                  try{
                  var pic = arti[p].querySelectorAll("thumbnail")[0]["attributes"][0].value
                  }catch(err){
                     continue;
                  }
                  var lin = arti[p].querySelectorAll("link")[0].innerHTML


                  
                  /*modify time if needed*/
                  var suff = " hour"
                  if (tim > 1){
                     suff += "s"
                  }
                  if (tim < 0){
                     var month=  arti[p].querySelectorAll("pubDate")[0].innerHTML.slice(8, 11)
                     var year =  arti[p].querySelectorAll("pubDate")[0].innerHTML.slice(12,16)
                     var day = arti[p].querySelectorAll("pubDate")[0].innerHTML.slice(5,7)
                     

                     for (i in mnthStr){
                        if (mnthStr[i].includes(month)){
                           month = i
                        }
                     }
                     tim = Math.floor((new Date() - new Date(month + "/" + day + "/" + year))/ (1000 * 3600 * 24))
                     suff = " day"
                     if (tim > 1){
                        suff += "s"
                     } 
                  }

                  

                  if ((tim + suff) == "0 hour"){
                     tim = "This Just"
                     suff = " In! "

                  }
                  else{
                     suff += " ago"
                  }

                     
                  /*add title and link to news list*/
                  news.push([tit, lin])
                  /*create articles*/

                  $(".theNews").append(`
                  <button  onclick="window.open('`+lin+`', '_blank')" class="card cardicle p-0 border-0 mb-3" style="background-color: var(--clrBgAccentSoft);">
                  <div class="row no-gutters">
                  <div class="col-md-4" >
                     <img src="`+pic+`" style="object-fit:cover" class="h-100 card-img">
                  </div>
                  <div class="col-md-8">
                     <div class="card-body">
                        <p class="card-text">`+tit+`</p>
                        <p class="card-text"><small class="text-muted">`+tim+suff+`</p>
                     </div>
                  </div>
                  </div>
               </button>
                  `)
                     
            }

            var pubDate = channel.querySelectorAll("pubDate")[0].innerHTML
            var pubDate1 = pubDate.split(",")
            var newDate = new Date(pubDate1[1])
            var newDate1 = newDate.toLocaleString();


            $(".theNews").append("<div class='col-12 my-5 text-center'><p style='font-size:smaller'>Source: CNA, last updated "+newDate1+".</p></div>")
         }      

      })
}

tutorialArticles()
function tutorialArticles(){
    articles = {
        "art1": ["This is a title", `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently <a><u>with desktop</u></a> publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <img class='col-12' src="https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png"/> <p>another paragraph</p>`],
        "art2": ["title", "story"]
    }


    $(".lessonsList").empty()

    for (const [key, value] of Object.entries(articles)) {
      $(".lessonsList").append(`<button id="`+ key +`" class="cardicle finLesson list-group-item bg-transparent border-0">`+ value[0]+`</button>`)
    }
}


$('body').on('click', '.finLesson', function() {
   id = jQuery(this).attr("id")

   $(".modal-title").text(articles[jQuery(this).attr("id")][0])
   $(".modal-body").empty()
   $(".modal-body").append(articles[jQuery(this).attr("id")][1])
   $('#newsModal').modal('show')
});