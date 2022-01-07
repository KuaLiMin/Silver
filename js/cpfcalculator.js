//Toggle flow
$('body').on('click', '#amountToggle', function() {
    if($("#toggleText").text() == "$"){
        $("#toggleText").text("-$")
        $("#cashflow").attr("placeholder", "Withdrawl");
    }
    else{
        $("#toggleText").text("$")
        $("#cashflow").attr("placeholder", "Deposit");
    }
})


//frequency change
function frequencyChange(e){

    var isValid = true;
    $("input").each(function() {
       var element = $(this);
       if (element.val() == "") {
          isValid = false;
       }
    });
    if (isValid){
      var isValid = true;
      $(".col-md-5>.oneinput").each(function() {
        var element = $(this);
        if (parseFloat(element.val()) >= 0) {
            isValid = false;
        }
      });

      //check if radio buttons is valid
      if(!$(".radio").is(":checked")){
        isValid = false
      }

      if (isValid){
        $("#iteratedropdown").text("Compound & Apply Cashflow" + ' ' + (e.attributes)[0]["ownerElement"]["innerHTML"])
        $(".output").addClass("d-flex")
        calculateSetValues()
      }
      else{
        alert("Please make sure all inputs are numerical and positive!")
      }
    }
    else{
      alert("Please complete all inputs!")
    }
}


function calculateSetValues(){

  //get values
  initialAmount = $("#initialamount").val()                                           //Starting amount
  annualReturn = $("input[type='radio'][name='inlineRadioOptions']:checked").val()    //unknown
  duration = $("#duration").val()                                                     //duration or time
  cashflow = $("#cashflow").val()                                                     //unknown
  iterate = $("#iteratedropdown").val()                                               //unknown

  if($("#toggleText").text() == "-$"){
    cashflow = -cashflow
  }







  //calculations (set variables below)
  //bigTotal = initialAmount * 5 //for example

  //testing
  // A = (p * Math.pow((1 + (r / (n * 100))), (n * t)));
  // A is bigTotal
  // p is inititalAmount
  // r is interest rate
  // n is 12
  // t is duration

bigTotal = (initialAmount*Math.pow(1+(annualReturn/(12 *100)))), (12*duration);
/*
  var compound = 1
function CInterest(){
  for(let i=0; i<duration*12;i++){
    if(i%(12/period) === 0){
      compound*=(1+((iterate/100)/duration))
    }
  }
  bigTotal=initialAmount*compound
}
*/




  //bigTotal = bigTotal
  contribution = ((duration*12)*cashflow)+initialAmount
  profit = bigTotal-(initialAmount+((duration*12)*cashflow))

  contributionPortionSize = "60"
  var dataSet = [
        ['year', 'Contribution', 'Profit'],
        ['1', 1, 0],
        ['2', 1, 0],
        ['2', 2, 0],
        ['3', 3, 2],
        ['4', 5, 3],
        ['5', 8, 5],
        ['6', 13, 8],
        ['7', 21, 13],
        ['8', 34, 21]
        ];
   // Simon, you end here



  //set values
    // numerical values
    $("#contributionAmt").text("$" + contribution)
    $("#profitAmt").text("$" + profit)
    $("#bigTotal").text(bigTotal)
    $("#progressProf").css("width", contributionPortionSize +"%")

    // render chart
  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(renderChart); 
  function renderChart(){
    var data = google.visualization.arrayToDataTable( dataSet );

    var options = {
      isStacked: 'true',
      bar: {groupWidth: '90%'},
      legend: {position: 'none'},
      series: {
        0:{color: ($('#contributionAmt').css("color"))},
        1:{color: ($('#profitAmt').css("color"))}
      }              
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
}