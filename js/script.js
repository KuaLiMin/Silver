/*localstorage check*/
lsCheck()
function lsCheck() {
    if (!(localStorage.hasOwnProperty("theme"))) {
        localStorage.theme = 0
    } else {
        theme = localStorage.getItem("theme")
        if (!(/^\d+$/.test(theme) && theme.length > 0)) {
            /*bad string*/
            localStorage.theme = 0
        }
    }

    if (!(localStorage.hasOwnProperty("font"))) {
        localStorage.font = 0
    } else {
        font = localStorage.getItem("font")
        if (!(/^\d+$/.test(theme) && theme.length > 0)) {
            localStorage.font = 0
        } 
    }


    if (!(localStorage.hasOwnProperty("zoom"))) {
        localStorage.zoom = 100
    } else {
        font = localStorage.getItem("zoom")
        if (!(/^\d+$/.test(theme) && theme.length > 0)) {
            localStorage.zoom = 100
        } 
        else if(!(localStorage.zoom >= 75 && localStorage.zoom <=110)){
            localStorage.zoom = 100
        }
    }

    addTop()
    changecolour()
    changefont()

   if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
          
    document.body.style.zoom = localStorage.zoom/100;
   }

}



/*adds navbar*/
function addTop() {
    /*check for main*/
    if($('main').length != 1){
        location.href='../index.html'
        return
    }

    
    var page = $('main').attr('id');
    navBlackList = ["index", "cpfcalculator", "cryptsim", "savinggoals"]
    /*if page is not is blacklist, add navbar*/
    if(!navBlackList.includes(page)){
    $(`
            <nav class="navbar navbar-expand-lg navbar-light">
            <!-- Links that are aligned to the left -->
            <!-- logo -->
            <div class="p-0 silverCon m-3"><span id="navbar-brand" class="navbar-brand">Silver</span><div style="max-width: 40px" class="col-3 p-0" id="lottie"></div></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img class="navbar-toggler-icon" src="../media/images/icons/menudot.svg" style="max-height:100%; max-width:8.5px" alt="logo">
            </button>
            <!-- Navbar --> 
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link ml-4" href="home.html">Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link ml-4" href="finarticles.html">Finance Articles</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link ml-4" href="planning.html">Personal Planning</a>
                </li>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link ml-4 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Tools
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item my-2" href="cpfcalculator.html">CPF Calculator</a>
                        <a class="dropdown-item my-2" href="cryptsim.html">Crypto Simulator</a>
                        <a class="dropdown-item my-2" href="savinggoals.html">My Saving Goals</a>
                    </div>
                </li>
            </ul>
            <!-- Links that are aligned to the right -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link ml-4 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Language
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <button class="dropdown-item my-2" onclick="changeLanguage('English')">English</button>
                        <button class="dropdown-item disabled my-2">??????</button>
                        <button class="dropdown-item disabled my-2">Bahasa Melayu</button>
                        <button class="dropdown-item disabled my-2">???????????????</button>
                    </div>
                </li>
                <li class="nav-item active">
                    <a class="nav-link ml-4" href="settings.html">Settings</a>
                </li>
            </ul>
            </div>
        </nav>
    `).insertBefore("main");

    $('a[href$="'+ $('main').attr('id') +'.html"]').attr('style', 'color: var(--clrStrongFocus) !important');

    }

}

/*change font*/
function changefont(){
    if(localStorage.font == '1'){
        $("body").get(0).style.setProperty('--mainFont', "'Merriweather', serif")
        
    }else if(localStorage.font == '2'){
        $("body").get(0).style.setProperty('--mainFont', "'Heebo', sans-serif")
    }else if(localStorage.font == '3'){
        $("body").get(0).style.setProperty('--mainFont', "'Fira Sans', sans-serif")
    }else if(localStorage.font == '4'){
        $("body").get(0).style.setProperty('--mainFont', "'Roboto Mono', monospace")
    }
    else{
        $("body").get(0).style.setProperty('--mainFont', "'Varela Round', sans-serif")
    }
}


/*change theme*/
function changecolour(){
    if(localStorage.theme == '1'){ /* dark mode*/
        ivebeencheckingmyList=['#000', '#FFF' , '#FFF', "#F99C15", '#FFCE4C', '#161616', '#434952', '#1b4263']
        $("<style>")
            .prop("type", "text/css")
            .html("\
            .aSVG {\
                filter: invert(100%);\
            }\
            ")
            .appendTo("head")
            setColours(ivebeencheckingmyList)
    }
    else if(localStorage.theme == '2'){ /* pink mode*/
        ivebeencheckingmyList=['pink', 'pink' , 'pink', "pink", 'pink', 'pink', 'pink', 'pink']
        $("<style>")
            .prop("type", "text/css")
            .html("\
            .aSVG {\
                filter: invert(100%);\
            }\
            ")
            .appendTo("head")
            setColours(ivebeencheckingmyList)
    }
    else if(localStorage.theme == '3'){ /* Red-Green mode*/
        ivebeencheckingmyList=['#ffffff', '#251327' , '#c9d3da', "#0083c2", '#cfe2f3', '#2986cc', '#AEAEAE', '#ffffff']
        $("<style>")
            .prop("type", "text/css")
            .html("\
            .aSVG {\
                filter: invert(100%);\
            }\
            ")
            .appendTo("head")
            setColours(ivebeencheckingmyList)
    }
    else if(localStorage.theme == '4'){ /* Blue-Yellow mode*/
        ivebeencheckingmyList=['#ffffff', '#251327' , '#c9d3da', "#ffc2cd", '#ba6c96', '#f4cccc', '#eeeeee', '#525252']
        $("<style>")
            .prop("type", "text/css")
            .html("\
            .aSVG {\
                filter: invert(100%);\
            }\
            ")
            .appendTo("head")
            setColours(ivebeencheckingmyList)
    }
    else if(localStorage.theme == '5'){ /* Non-Color mode*/
        ivebeencheckingmyList=['#fff', '#000' , '#555555', "#555555", '#fff', '#000', '#777777', '#999999']
        $("<style>")
            .prop("type", "text/css")
            .html("\
            .aSVG {\
                filter: invert(100%);\
            }\
            ")
            .appendTo("head")
            setColours(ivebeencheckingmyList)
    }   
    else{
        ivebeencheckingmyList=['#FFF', '#000' , '#C4F3F3', "#FFCE4C", '#F99C15', '#f8f8f8', '#D9D9D9', '#6E6C80']
        setColours(ivebeencheckingmyList)
    }


}

function setColours(ivebeencheckingmyList){
    colourDic = {
        "Bg": ivebeencheckingmyList[0],
        "BgOpp": ivebeencheckingmyList[1],
        "BgAccent": ivebeencheckingmyList[2],
        "Strong": ivebeencheckingmyList[3],
        "StrongFocus": ivebeencheckingmyList[4],
        "AccentSoft": ivebeencheckingmyList[5],
        "AccentMute": ivebeencheckingmyList[6],
        "AccentLoud": ivebeencheckingmyList[7]
    }

    $("body").get(0).style.setProperty('--clrBg', colourDic["Bg"]);
    $("body").get(0).style.setProperty('--clrBgOpp', colourDic["BgOpp"]);
    $("body").get(0).style.setProperty('--clrBgAccent', colourDic["BgAccent"]);
    $("body").get(0).style.setProperty('--clrStrong', colourDic["Strong"]);
    $("body").get(0).style.setProperty('--clrStrongFocus', colourDic["StrongFocus"]);
    $("body").get(0).style.setProperty('--clrBgAccentSoft', colourDic["AccentSoft"]);
    $("body").get(0).style.setProperty('--clrBgAccentMute', colourDic["AccentMute"]);
    $("body").get(0).style.setProperty('--clrBgAccentLoud', colourDic["AccentLoud"]);

}


/*change language*/
function changeLanguage(lan) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = "Changed language to " + lan
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

/*sparkle*/
var targetAnim = document.getElementById('lottie');

var animation = bodymovin.loadAnimation({
  container: targetAnim, // Required
  path: 'https://assets10.lottiefiles.com/packages/lf20_3apyf6sg.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: true // Optional
})


$('body').on('mouseenter', '.silverCon', function() {
    animation.playSegments([0,80], true);
});