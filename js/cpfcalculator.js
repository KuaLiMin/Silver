/*
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

console.log(initialAmount)
console.log(annualReturn)
console.log(duration)
console.log(cashflow)
console.log(iterate )





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
*/
let startingAgeEl = document.getElementById('starting-age');
let startingValueEl = document.getElementById('starting-value');
let contributionEl = document.getElementById('yearly-contribution');
let yearlyReturnEl = document.getElementById('yearly-return');

let retirementAgeEl = document.getElementById('retirement-age');
let yearlyWithdrawalEl = document.getElementById('yearly-withdrawal');
let yearlyReturnRetirementEl = document.getElementById('yearly-return-retirement');

let inputs = {};
let chartData = [];
let myChart = {};
let series = [];

class Series {
  constructor(inputs) {
    this.startingAge = inputs.startingAge;
    this.endingAge = inputs.endingAge;
    this.startingValue = inputs.startingValue;
    this.transactionAmount = inputs.transactionAmount;
    this.rateOfReturn = inputs.rateOfReturn;
    
    this.totalValue = this.startingValue;
    this.data = [];
    
    this.generateData();
  }
  
  calculateYear(startingValue, rateOfReturn, transactionAmount, age) {
    this.totalValue = startingValue * rateOfReturn + transactionAmount;
    return {
      x: age,
      y: this.totalValue,
      name: 'Age: ' + age
    };
  }
  
  generateData() {
    this.data = [this.calculateYear(this.startingValue, 1, 0, this.startingAge)];
    for (let age = this.startingAge+1; age <= this.endingAge; age++) {
      let i = age - this.startingAge;
      this.data.push(this.calculateYear(this.data[i-1].y, this.rateOfReturn, this.transactionAmount, age));
      if (age >= 120 || this.data[i].y <= 0) {
        this.endingAge = age;
        break;
      }
    }
    return this.data;
  }
}

let getInputs = function() {
  return {
    startingValue: parseInt(startingValueEl.value) || 0,
    transactionAmount: parseInt(contributionEl.value) || 0,
    rateOfReturn: parseFloat(yearlyReturnEl.value) / 100 + 1 || 1,
    startingAge: parseInt(startingAgeEl.value) || 0,
    endingAge: parseInt(retirementAgeEl.value) || 0,
    
    yearlyWithdrawal: parseInt(yearlyWithdrawalEl.value) * -1 || 0,
    retirementRateOfReturn: parseFloat(yearlyReturnRetirementEl.value) / 100 + 1 || 1
  };
}

let generateRetirementData = function() {
  inputs = getInputs();
  
  let savingSeries = new Series({
    startingAge: inputs.startingAge,
    endingAge: inputs.endingAge,
    startingValue: inputs.startingValue,
    transactionAmount: inputs.transactionAmount,
    rateOfReturn: inputs.rateOfReturn,
  });
  let retirementSeries = new Series({
    startingAge: inputs.endingAge,
    endingAge: 120,
    startingValue: savingSeries.totalValue,
    transactionAmount: inputs.yearlyWithdrawal,
    rateOfReturn: inputs.retirementRateOfReturn,
  });
  let principalSeries = new Series({
    startingAge: inputs.startingAge,
    endingAge: inputs.endingAge,
    startingValue: inputs.startingValue,
    transactionAmount: inputs.transactionAmount,
    rateOfReturn: 1,
  });
  let principalSeries2 = new Series({
    startingAge: inputs.endingAge,
    endingAge: retirementSeries.endingAge,
    startingValue: principalSeries.totalValue,
    transactionAmount: 0,
    rateOfReturn: 1,
  });

  series = [
    {
      name: 'Total Account Value',
      data: savingSeries.data.concat(retirementSeries.data)
    },
    {
      name: 'Principal Contributed',
      data: principalSeries.data.concat(principalSeries2.data)
    }
  ];
}

let redraw = function() {
  generateRetirementData();
  for (let i = 0; i < series.length; i++) {
    myChart.series[i].update({
      data: series[i].data
    });
  }
}

let init = function() {
  let createInputListener = function(element) {
    element.addEventListener('input', function(event) {
      redraw();
    });
  }

  createInputListener(startingAgeEl);
  createInputListener(startingValueEl);
  createInputListener(contributionEl);
  createInputListener(yearlyReturnEl);
  
  createInputListener(retirementAgeEl);
  createInputListener(yearlyWithdrawalEl);
  createInputListener(yearlyReturnRetirementEl);

  generateRetirementData();
  
  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });
  
  myChart = Highcharts.chart('highcharts-container', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Retirement Account Value'
    },
    xAxis: {
      title: {
        text: 'Years of Age'
      }
    },
    yAxis: {
      title: {
        text: 'Account Value ($)'
      }
    },
    tooltip: {
      pointFormat: `<span style="color:{point.color}">\u25CF</span> {series.name}: \${point.y:,.2f}<br/>`,
      shared: true
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false
        }
      }
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            enabled: true
          }
        }
      }]
    },
    series: series
  });
}

init();