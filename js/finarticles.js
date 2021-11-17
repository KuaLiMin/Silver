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

            console.log(tim, suff, tit, pic, lin)

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
         

      })
}

tutorialArticles()
function tutorialArticles(){
    articles = {
        "article one": "abc abc abc",
        "article two": "abc abc abc"
    }

    
}
