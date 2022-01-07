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
  initialAmount = $("#initialamount").val()
  annualReturn = $("input[type='radio'][name='inlineRadioOptions']:checked").val()
  duration = $("#duration").val()
  cashflow = $("#cashflow").val()
  iterate = $("#iteratedropdown").val()

  if($("#toggleText").text() == "-$"){
    cashflow = -cashflow
  }


  //testing
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
*/

/*
Testing
*/
(function () {
  var initial_deposit = document.querySelector('#initial_deposit'),
      contribution_amount = document.querySelector('#contribution_amount'),
      investment_timespan = document.querySelector('#investment_timespan'),
      investment_timespan_text = document.querySelector('#investment_timespan_text'),
      estimated_return = document.querySelector('#estimated_return'),
      future_balance = document.querySelector('#future_balance');

  function updateValue(element, action) {
      var min = parseFloat(element.getAttribute('min')),
          max = parseFloat(element.getAttribute('max')),
          step = parseFloat(element.getAttribute('step')) || 1,
          oldValue = element.dataset.value || element.defaultValue || 0,
          newValue = parseFloat(element.value.replace(/\$/, ''));

      if (isNaN(parseFloat(newValue))) {
          newValue = oldValue;
      } else {
          if (action == 'add') {
              newValue += step;
          } else if (action == 'sub') {
              newValue -= step;
          }

          newValue = newValue < min ? min : newValue > max ? max : newValue;
      }

      element.dataset.value = newValue;
      element.value = (element.dataset.prepend || '') + newValue + (element.dataset.append || '');

      updateChart();
  }

  function getChartData() {
      var P = parseFloat(initial_deposit.dataset.value), // Principal
          r = parseFloat(estimated_return.dataset.value / 100), // Annual Interest Rate
          c = parseFloat(contribution_amount.dataset.value), // Contribution Amount
          n = parseInt(document.querySelector('[name="compound_period"]:checked').value), // Compound Period
          n2 = parseInt(document.querySelector('[name="contribution_period"]:checked').value), // Contribution Period
          t = parseInt(investment_timespan.value), // Investment Time Span
          currentYear = (new Date()).getFullYear()
          ;

      var labels = [];
      for (var year = currentYear; year < currentYear + t; year++) {
          labels.push(year);
      }

      var principal_dataset = {
          label: 'Total Principal',
          backgroundColor: 'rgb(0, 123, 255)',
          data: []
      };

      var interest_dataset = {
          label: "Total Interest",
          backgroundColor: 'rgb(23, 162, 184)',
          data: []
      };

      for (var i = 1; i <= t; i++) {
          var principal = P + ( c * n2 * i ),
              interest = 0,
              balance = principal;

          if (r) {
              var x = Math.pow(1 + r / n, n * i),
                  compound_interest = P * x,
                  contribution_interest = c * (x - 1) / (r / n2);
              interest = (compound_interest + contribution_interest - principal).toFixed(0)
              balance = (compound_interest + contribution_interest).toFixed(0);
          }

          future_balance.innerHTML = '$' + balance;
          principal_dataset.data.push(principal);
          interest_dataset.data.push(interest);
      }

      return {
          labels: labels,
          datasets: [principal_dataset, interest_dataset]
      }
  }

  function updateChart() {
      var data = getChartData();

      chart.data.labels = data.labels;
      chart.data.datasets[0].data = data.datasets[0].data;
      chart.data.datasets[1].data = data.datasets[1].data;
      chart.update();
  }

  initial_deposit.addEventListener('change', function () {
      updateValue(this);
  });

  contribution_amount.addEventListener('change', function () {
      updateValue(this);
  });

  estimated_return.addEventListener('change', function () {
      updateValue(this);
  });

  investment_timespan.addEventListener('change', function () {
      investment_timespan_text.innerHTML = this.value + ' years';
      updateChart();
  });

  investment_timespan.addEventListener('input', function () {
      investment_timespan_text.innerHTML = this.value + ' years';
  });

  var radios = document.querySelectorAll('[name="contribution_period"], [name="compound_period"]');
  for (var j = 0; j < radios.length; j++) {
      radios[j].addEventListener('change', updateChart);
  }

  var buttons = document.querySelectorAll('[data-counter]');
  for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];

      button.addEventListener('click', function () {
          var field = document.querySelector('[name="' + this.dataset.field + '"]'),
              action = this.dataset.counter;

          if (field) {
              updateValue(field, action);
          }
      });
  }

  var ctx = document.getElementById('myChart').getContext('2d'),
      chart = new Chart(ctx, {
          type: 'bar',
          data: getChartData(),
          options: {
              legend: {
                  display: false
              },
              tooltips: {
                  mode: 'index',
                  intersect: false,
                  callbacks: {
                      label: function (tooltipItem, data) {
                          return data.datasets[tooltipItem.datasetIndex].label + ': $' + tooltipItem.yLabel;
                      }
                  }
              },
              responsive: true,
              scales: {
                  xAxes: [{
                      stacked: true,
                      scaleLabel: {
                          display: true,
                          labelString: 'Year'
                      }
                  }],
                  yAxes: [{
                      stacked: true,
                      ticks: {
                          callback: function (value) {
                              return '$' + value;
                          }
                      },
                      scaleLabel: {
                          display: true,
                          labelString: 'Balance'
                      }
                  }]
              }
          }
      });

})();
