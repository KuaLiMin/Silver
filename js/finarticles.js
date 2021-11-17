$('a[href$="finarticles.html"]').attr('style', 'color: var(--clrStrongFocus) !important');

busInt()
function busInt() {
        var news = []

         const proxyUrl = "https://cors-anywhere.herokuapp.com/"
         const url = `${proxyUrl}https://www.channelnewsasia.com/rssfeeds/8395954`;
         const request = new Request(url);
         
         /*fetch news*/
         fetch(url)
         .then(response => response.text())
         .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
         .then(function(data){  
         var channel = data.querySelectorAll("channel")[0]
         //$("#update").text(channel.querySelectorAll("lastBuildDate")[0].innerHTML) /*change updated date*/
            console.log(channel)
            
         /*update articles*/
         $(".theNews").remove(); /*clear div*/
         var arti = channel.querySelectorAll("item")
         for (p = 0; p < 10; p++){
            /*get relevant variables*/
            var tit = arti[p].querySelectorAll("title")[0].innerHTML
            var tim = new Date().getHours() - Number(arti[p].querySelectorAll("pubDate")[0].innerHTML.slice(17,19))
            var pic = arti[p].querySelectorAll("thumbnail")[0]
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

            console.log(tim, suff, tit, pic)
            $( '<button class="col-12 d-flex flex-nowrap my-5 my-sm-3 mr-3 px-4 px-sm-5 border-0 h-100 rounded text-left bg-transparent art"><span class="col-8 col-sm-9 p-0 headline"><span class="col-12 d-block m-0 sou">'
            + tim + suff + '<b> | </b></span><span class="col-12 p-0 pb-2 tit">'
            + tit + '</span></span><span class="col-4 d-flex col-sm-3 p-0 h-100 w-100 ml-1 justify-content-center"><img src="'
            + pic + '" alt="photo"></span></button>' )
               
            }
         

      })
}
