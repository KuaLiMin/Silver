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
  initialAmount = $("#initialamount").val()
  annualReturn = $("input[type='radio'][name='inlineRadioOptions']:checked").val()
  duration = $("#duration").val()
  cashflow = $("#cashflow").val()
  iterate = $("#iteratedropdown").val()

  if($("#toggleText").text() == "-$"){
    cashflow = -cashflow
  }

  function FV(rate, nper, pmt, pv, type) {
    var pow = Math.pow(1 + rate, nper),
       fv;
    if (rate) {
     fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
    } else {
     fv = -1 * (pv + pmt * nper);
    }
    return fv.toFixed(2);
  }





  //calculations (set variables below)
  bigTotal = "272727.27"
  contribution = "1809.28"
  profit = "452.32"
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