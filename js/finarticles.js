$('a[href$="finarticles.html"]').attr('style', 'color: var(--clrStrongFocus) !important');


/*months dictionary*/
var mnthStr = {
    1:"January",
    2:"February",
    3:"March",
    4:"April",
    5:"May",
    6:"June",
    7:"July",
    8:"August",
    9:"September",
    10:"October",
    11:"November",
}



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
                  <button  onclick="window.open('`+lin+`', '_blank')" class="card newsRSS cardicle p-0 border-0 mb-3" style="background-color: var(--clrBgAccentSoft);">
                  <div class="row no-gutters">
                  <div class="col-md-4" >
                     <img src="`+pic+`" style="object-fit:cover" class="h-100 card-img">
                  </div>
                  <div class="col-md-8">
                     <div class="card-body">
                        <p class="card-text">`+tit+`</p>
                        <p class="card-text"><small class="text-muted">`+tim+suff+`</small></p>
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
        
       
     
      "art1": ["What is Finance? / Finance", `<p>Details: By Daniel Kurt, Reviewed by Andy Smith </p> <img class="col-12" src="https://i.ibb.co/pRbCczq/finance-definitionjpeg.jpg" alt="finance-definitionjpeg" border="0""/>
      <!-- Another paragraph-->
      <p>Finance is a broad term that describes activities associated with banking, leverage or debt, credit, capital markets, money, and investments. Basically, finance represents money management and the process of acquiring needed funds. Finance also encompasses the oversight, creation, and study of money, banking, credit, investments, assets, and liabilities that make up financial systems.
  Many of the basic concepts in finance originate from microeconomic and macroeconomic theories. One of the most fundamental theories is the time value of money, which essentially states that a dollar today is worth more than a dollar in the future. 
  </p>
  <h3>Types of Finance</h3>
  <p>Because individuals, businesses, and government entities all need funding to operate, the finance field includes three main subcategories: </p>
  <ul>
  <li>personal finance<li> corporate finance <li>public (government) finance
  </ul>.
  <p>Personal finance
  Financial planning involves analyzing the current financial position of individuals to formulate strategies for future needs within financial constraints. Personal finance is specific to an individual’s situation and activity. Therefore, financial strategies depend largely on the person’s earnings, living requirements, goals, and desires.
  Individuals must save for retirement, for example, which requires saving or investing enough money during their working lives to fund their long-term plans. This type of financial management decision falls under personal finance.
  Personal finance includes the purchasing of financial products such as credit cards, insurance, mortgages, and various types of investments. Banking is also considered a component of personal finance because individuals use checking and savings accounts as well as online or mobile payment services such as PayPal and Venmo.
  </p>
  <h3>Finance</h3>
  <h4>Corporate Finance</h4>
  <p>Corporate finance refers to the financial activities related to running a corporation, usually with a division or department set up to oversee those financial activities.
  One example of corporate finance: A large company may have to decide whether to raise additional funds through a bond issue or stock offering. Investment banks may advise the firm on such considerations and help it market the securities.
  Startups may receive capital from angel investors or venture capitalists in exchange for a percentage of ownership. If a company thrives and decides to go public, it will issue shares on a stock exchange through an initial public offering (IPO) to raise cash.
  In other cases, a company might be trying to budget its capital and decide which projects to finance and which to put on hold in order to grow the company. All these types of decisions fall under corporate finance.
  </p>
  <h3>Public finance</h3>
  <p>Public finance includes taxing, spending, budgeting, and debt-issuance policies that affect how a government pays for the services it provides to the public.
  The federal government helps prevent market failure by overseeing the allocation of resources, the distribution of income, and economic stability. Regular funding is secured mostly through taxation. Borrowing from banks, insurance companies, and other nations also helps finance government spending.
  </p>
  <h3>Financial Services</h3>
  <p>Financial services are the processes by which consumers and businesses acquire financial goods. One straightforward example is the financial service offered by a payment system provider when it accepts and transfers funds between payers and recipients. This includes accounts settled via checks, credit and debit cards, and electronic funds transfers.
  Important: Financial services are not the same as financial goods. Financial goods are products, such as mortgages, stocks, bonds, and insurance policies; financial services are tasks—for example, the investment advice and management a financial advisor provides for a client.
  The financial services sector is one of the most important segments of the economy. It drives a nation’s economy, providing the free flow of capital and liquidity in the marketplace. It is made up of a variety of financial firms, including banks, investment houses, finance companies, insurance companies, lenders, accounting services, and real estate brokers.
  When this sector and a country’s economy are strong, consumer confidence and purchasing power rise. When the financial services sector fails, it can drag down the economy and lead to a recession.
  </p>
  <h3>What Are Financial Activities?</h3>
  <p>Financial activities are the initiatives and transactions that businesses, governments, and individuals undertake as they seek to further their economic goals. They are activities that involve the inflow or outflow of money. Examples include buying and selling products (or assets), issuing stocks, initiating loans, and maintaining accounts.
  When a company sells shares and makes debt repayments, these are both financial activities. Similarly, individuals and governments are involved in financial activities, such as taking out loans and levying taxes, which further specific monetary objectives.
  </p>`],
  "art2": ["Singapore’s Economy / Finance", `<p>Details by:  <a href = "https://www.guidemesingapore.com/business-guides/incorporation/why-singapore/singapore-economy---a-brief-introduction" 
  target = "_blank"> <u> guidemesingapore.com </u> </a></p><p>A major financial hub in the Asia Pacific region, Singapore has long earned a reputation as one of the world’s most advanced economies. 
  In 2017, Singapore was ranked as the world’s second most open economy by the Heritage Foundation’s Index of Economic Freedom, as well as the world’s second most pro-business regime by the World Bank’s Doing Business report.
  Despite its small domestic market and a lack of natural resources, Singapore successfully weathered through the financial crisis of 1997 and 2008. Today, the Singapore economy is one of the most stable in the world, with no foreign debt, high government revenue and a consistently positive surplus.
  The Singapore economy is mainly driven by exports in electronics manufacturing and machinery, financial services, tourism, and the world’s busiest cargo seaport.
  </p>
  <h3>Which Singapore industries drive the economy?</h3>
  <p>Singapore’s largest industry by far is the manufacturing sector, which contributes 20%-25% of the country’s annual GDP. 
  Key industry clusters in Singapore’s manufacturing include electronics, chemicals, biomedical sciences, logistics and transport engineering. In the third quarter of 2017, the manufacturing sector grew by 35%, with clusters like electronics and precision engineering benefiting from high demand. 
  Close behind Singapore’s manufacturing industry is its financial services industry, which has enjoyed stable growth due to Singapore’s pro-business environment and political stability. Home to over 200 banks and a regional hub of choice for many global financial services firms, Singapore’s financial services marketplace facilitates the transfer of knowledge, processes, technology and skills between global, regional and domestic markets. 
  Other emerging industries that are making significant contributions to Singapore’s economy include medical technology, aerospace engineering, clean energy, healthcare, and content development.
  </p>
  <p>Below is a list of Singapore’s top industries according to their GDP contribution:</p>
   <img class="col-12" src="https://i.ibb.co/rx2cskt/Screenshot-2021-11-18-153534.jpg" alt="Screenshot">
  <h3>What natural resources does Singapore have?</h3>
  <p>Located at the southernmost tip of the Malaysian peninsula and with a land area smaller than that of New York’s, Singapore has no significant natural resources. 
  However, this did not stop Singapore from developing itself into a regional hub for oil and gas, as well as a world leader in sustainable water solutions and projects such as NEWater and the Deep Tunnel Sewerage System.
  It has been said that Singapore’s true natural resource is its people – and in a growing economy, this could not be more apt. As the economy grows, both local and non-local companies have access to a pool of an educated workforce and, eventually, a burgeoning consumer market.
  </p>
  <h3>How developed is Singapore’s infrastructure?
  </h3>
  <p>As a commercial and military seaport during the British colonial era, Singapore’s infrastructure has always been well-developed. After Singapore gained independence in 1965, the post-colonial government went on to improve and expand the country’s transport, communications, industrial, and housing systems.
  By land, Singapore is served by 9,310 kilometres of paved roads, 199.6 kilometres of rail (mass rapid transit and light rail combined), as well as island-wide bus, taxi, and ride-share operations.  The transport system is efficient, safe, and punctual.
  By air, Changi International Airport is connected to 380 cities in 90 countries. It handles more than 7,000 weekly flights transporting passengers and cargo worldwide. By sea, the Singapore port gives shippers a choice of over 200 shipping lines and access to some 600 ports in 123 countries. At any one time, there can be as many as 1,000 ships docked at the Singapore port, which makes it the busiest container port in the world.
  The telecommunications system is no less remarkable - Singapore has one of the world’s highest mobile penetration rates at 1.5 mobile phones per person, and more than 90% of Singaporean households have Internet access. In hotspots such as coffee chains, fast-food restaurants, or Changi Airport, you can use an island-wide Wi-Fi service called Wireless@SG for free.
  Industrial and commercial facilities for businesses are also readily available in Singapore. The Jurong Town Corporation (JTC) has over 47.7 million square meters of strategically-located built industrial space that can be used to build factories, warehouses and business parks. For commercial businesses, a choice of world-class high-rise and low-rise offices in the Central Business District and other parts of town are available.
  </p>
  <h3>What is Singapore’s current Gross Domestic Product (GDP)? 
  </h3>
  <p>For the third quarter of 2017, Singapore’s GDP (at current market prices) stands at S$107 billion. The Singapore economy grew by 5.2% during this period – which is the fastest pace it has grown in more than three years, according to a Bloomberg report. 
  The recovery of global trade and an improving labour market has helped Singapore not only sustain growth in the manufacturing industry, but also broaden out to other industries such as services and retail. 
  The Monetary Authority of Singapore estimates that the Singapore economy is likely to expand at a steady, but slightly slower, pace in 2018 compared to 2017.
  </p>
  <h3>Does the Singapore government have any public debt?</h3>
  <p>The Singapore government has maintained zero foreign debt since 1995. As for domestic debt, the total outstanding government borrowing was S$496 billion as of the third quarter of 2017, which comprises registered stocks and bonds, treasury bills and advance deposits.
  However, this high figure is not an accurate representation of Singapore’s fiscal strength - the Singapore government borrows to invest, and the return on investment (ROI) generated on these investments makes up for the difference. 
  By implementing these strategic debts alongside strong asset protection, robust economic growth, and prudent macroeconomic policies, the Singapore government has a strong balance sheet with its assets outweighing its liabilities.
  </p>
  <h3>What are the main sources of revenue for the Singapore government?</h3>
  <p>The Singapore government’s total revenue is estimated at S$69 billion as of the third quarter of 2017. 
  As with most governments, Singapore earns the bulk of its revenue from taxes – income, property, excise and customs duties, as well as GST. Other revenue sources for the government include licence and permit fees, government property rental, fines and forfeitures, as well as capital receipts from the sale of capital goods.
  </p>
  <h3>What is Singapore’s current trade strength? </h3>
  <p>As of November 2017, the Singapore dollar traded at S$1.3467 against the U.S dollar, which is slightly lower than the 2016 average rate of S$1.3815. </p>
  <h3>What is Singapore’s current currency strength?</h3>
  <p>Singapore traded S$967.1 billion worth of goods in 2017, an increase of 11.1% from the previous year. Singapore is considered to be the world’s 14th largest exporter and 17th largest importer.
  Singapore's top three export and import commodities sections are machinery and transport equipment, chemicals and chemical products and miscellaneous manufactured articles.
  Singapore exported $$515 billion worth of goods in 2017, with its primary export partners being the United States, Australia, Japan, China and the United Kingdom.
  It also imported S$452.1 billion worth of goods in 2017, with its primary import partners being the United States, Netherlands, China, Hong Kong and Japan.
  </p>
  <iframe width="720" height="360" src="https://www.youtube.com/embed/WSKLrGJyELE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `],
"art3": ["Investing for Retirement / Retirement Planning", `<img class="col-12" src="https://i.ibb.co/KWMkCQ2/elderly-woman-laptop.jpg"/>
    
<!-- Credit to the Authors-->
<p>Written By: <a href = "https://www.moneysense.gov.sg/" target = "_blank"><u>Moneysense.gov.sg</u></a></p>
  
  <p>Written On: 05 November 2018</p>
  
  <!-- Introductory Paragraph -->
  <div>
      <p>
          Investing can help you to grow your retirement nest egg, but it is not without risk. 
      You may need to rebalance your portfolio to more conservative investments as you near retirement, in order to protect your savings.
      </p>
      
      <p>
          If you are early in or midway through your career and have the risk appetite to do so, you can consider investing in long-term and medium to higher risk products, which offer higher returns, in order to boost your savings.

      </p>
      
  </div>
  
  <!-- Pre-Retirement Stage -->
  <div>
      <h4>Pre-retirement stage:</h4>
      <p>
          If you are at this stage of life, your investment horizon is shorter. That is when you will want to consider guarding your savings so that you will have enough for your golden years.
      <p>
          This means you should:
      </p>
      
      <!-- bulleted list-->
      <ul>
          <li>Lower your risk profile and avoid products which might cause you to lose your capital</li>
          <li>Buy products which can be easily liquidated for cash</li>
          <li>Consider products which generate a regular income at regular intervals.</li>
      </ul>
      
  </div>
  
  <!-- Retirement Stage -->
  <div>
      <h4>When you retire:</h4>
      <p>
          One strategy to maintain an income flow throughout your investment is to stagger your access to funds. “Bucket” or allocate your investments according to the short, medium and long-term.

      <p>
          You could adopt different investment goals for each period. For example:
      </p>
      
      <!-- bulleted list-->
      <ul>
          <li>For your short-term “Bucket 1”, you can consider conservative or more liquid products to cover your intermediate living expenses.</li>
          <li>Subsequent buckets could aim for higher growth to hedge against possible inflation risks.</li>
          
      </ul>
      <p>
          This approach may not suit everyone, so do take time to carefully consider whether it suits you in terms of your personal circumstances, risk appetite and also how well you understand the various financial products. You should assess whether a product is conservative, liquid or allows for some growth, and is suitable for the objectives you have in mind. 

      </p>
      
      <p>See Also: <a href = "https://www.moneysense.gov.sg/starter-packs/get-started-with-investing?sc_lang=en" target = "_blank">
          <u>Get started with investing</u></a></p>
          <iframe width="720" height="360" src="https://www.youtube.com/embed/FKrm2Laetvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`],
  "art4": ["How to Calculate the Percentage Gain or Loss on an Investment / Investing", `<p>Details: The Investopedia Team, Reviewed by, Somer Anderson
        </p><img class="col-12" src=""https://ibb.co/gZNZwbv"><img class="col-12" src="https://i.ibb.co/b5T5LjH/2021-11-17.png" alt="2021-11-17" border="0"/>

        <!-- Another paragraph-->
        <p>Learning how to calculate the percentage gain of your investment is straightforward and is a critical piece of information in the investor toolbox.
    To calculate the percentage gain on an investment, investors need to first determine how much the investment originally cost or the purchase price. Next, the purchase price is subtracted from the selling price of the investment to arrive at the gain or loss on the investment.
    If investors don't have the original purchase price, they can obtain it from their broker. Brokerage firms provide trade confirmations in paper form or electronically for every transaction, including the original purchase and the sale price as well as the financial details of the investment.
    </p>
    <p>Determining Percentage Gain or Loss <p/>
        <!-- bulleted list-->
        <ul>
            <li>Take the selling price and subtract the initial purchase price. The result is the gain or loss.</li>
            <li>Take the gain or loss from the investment and divide it by the original amount or purchase price of the investment.</li>
            <li>Finally, multiply the result by 100 to arrive at the percentage change in the investment.</li></ul>
     <p>If the percentage turns out to be negative because the market value is lower than the original purchase price—also called the cost basis—there's a loss on the investment. 
    If the percentage is positive because the market value or selling price is greater than the original purchase price, there's a gain on the investment.</p> 
    <h2>Formula for Calculating Percentage Gain or Loss </h2>
    <p>Investment percentage gain=Price sold−purchase price purchase price×100\text{Investment percentage gain} = \frac{\text{Price sold} - \text{purchase price}}{\text{purchase price}} \times 100Investment percentage gain=purchase price
    Price sold−purchase price×100﻿</p>   
        <!-- bulleted list-->
        <ul>
            <li>The percentage gain or loss calculation will produce the dollar amount equivalent of the gain or loss in the numerator.</li>
            <li>The dollar amount of the gain or loss is divided by the original purchase price to create a decimal. The decimal shows how much the gain represents compared to how much was originally invested.</li>
            <li>Multiplying the decimal by 100 merely moves the decimal place to provide the percentage gain or loss as compared to the original investment amount.</li>
        </ul>
    <p>To determine the percentage gain or loss without selling the investment, the calculation is very similar. The current market price would be substituted for the selling price. The result would be the unrealized gain (or loss), 
    meaning the gain or loss would be unrealized since the investment had not yet been sold.</p>
    <h3>Why Calculating Percentage Gain or Loss Is Important</h3>
    <p>Calculating the gain or loss on an investment as a percentage is important because it shows how much was earned as compared to the amount needed to achieve the gain.
    For example, if two investors each earned $500 from investing in the same stock, they both had the same amount of gain. At the onset, it appears that both investments achieved the same result. However, if one investor spent $20,000 when the stock was originally purchased, and the second investor spent only $10,000, the second investor performed better because less money was at risk.
    Also, the second investor could invest the other $10,000 (assuming both had $20,000 to invest) in a second stock and earn an additional gain.
    </p>
    <h3>Examples of Calculating Percentage Gain or Loss </h3>
    <p>The percentage gain or loss calculation can be used for many types of investments. Below are two examples.</p>
    <h4>Stock</h4>
    <p>As an example, let's say an investor bought 100 shares of Intel Corp. (INTC) at $30 per share, which means that it cost $3,000 for the initial investment ($30 price * 100 shares).
    The 100 shares were sold for $38 per share, which means that the sale proceeds would be $3,800 ($38 per share * 100). The dollar value of the gain on the investment would be $800 ($3,800 – $3,000).
    </p>
    <p>The percentage gain calculation would be:</p>
        <ul>
            <li>($3,800 sale proceeds – $3,000 original cost) / $3,000 = 0.2667 x 100 = 26.67%.</li>
        </ul>
    <p>Alternatively, the gain can be calculated using the per-share price, as follows:</p>
       <ul>
            <li>($38 selling price – $30 purchase price) / $30 = 0.2666 x 100 = 26.67%.</li>
        </ul>
    <h3>Index</h3>
    <p>If an investor wanted to determine how the Dow Jones Industrial Average (DJIA) has performed over a certain period, the same calculation would apply. The Dow is an index that tracks 30 stocks of the most established companies in the United States.
    Let's say, as an example, that the Dow opened at 24,000 and closed at 24,480 by the end of the week.
    </p>
    <p>The percentage gain calculation would be:</p>
       <ul>
            <li>(24,480 – 24,000) / 24,000 = 0.02 x 100 = 2%</li>
        </ul>
    <h3>Special Considerations: Fees And Dividends </h3>
    <p>Investing does not come without costs, and this should be reflected in the calculation of percentage gain or loss. The examples above did not consider broker fees and commissions or taxes.
    To incorporate transaction costs, reduce the gain (selling price – purchase price) by the costs of investing.
    </p>
    <h3>Fees </h3>
    <p>Using the Intel example above, let's say that the investor was charged $75 in fees from the broker. The percentage gain would be calculated as follows:</p>
    <p>The percentage gain calculation would be:</p>
       <ul>
            <li>(($3,800 sale proceeds – $3,000 original cost) – $75) / $3,000 = 0.2416 x 100 = 24.16%.</li>
        </ul>
    <p>We can see that the brokerage fee reduced the percentage rate of return on the investment by more than 2% or from 26.67% to 24.16%.</p>
    <h3>Dividends</h3>
    <p>If the investment paid out any income or distributions, such as a dividend, the amount would need to be added to the gain amount. A dividend is a cash payment paid to shareholders and is configured on a per-share basis.
    Using the Intel example, let's say the company paid a dividend of $2 per share. Since the investor owned 100 shares, Intel would pay $200 split up evenly into four quarterly payments.
    </p>
    <p>The percentage gain would be calculated as follows:</p>
       <ul>
            <li>(($3,800 sale proceeds – $3,000 original cost) + $200) / $3,000 = 0.3333 x 100 = 33.33%.</li>
        </ul>
    <p>Assuming there were no brokerage fees and the stock was held for one year, we can see that the dividend increased the percentage rate of return for the investment by more than 6% or from 26.67% to 33.33%.
    If the stock wasn't held for one year and, instead, was held for two quarters, we would add $100 to the gain amount (instead of $200) since the quarterly dividend payments would be $50 each.
    By incorporating the transaction costs, account fees, commissions, and dividend income, investors can obtain a more accurate representation of the percentage gain or loss on an investment.﻿
    </p>
    <iframe width="720" height="360" src="https://www.youtube.com/embed/XeYtgIOgm2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `],
    "art5": ["7 Personal Finance resolutions you’ll be able to keep — and how / Personal Finance", `<!-- Image for the Web Page-->
  <img class="col-12" src="https://i.ibb.co/kSNVqrD/fhc-banner.jpg"/>
  
  <p>Written By: <a href = "https://www.moneysense.gov.sg"><u>Moneysense.gov.sg</u></a></p>
       
       <p>Written On: 16 Jan 2019</p>
       
       <br>
       
       <!-- Introductory Section -->
       
       <div>
           <p>
               It’s always nice to start afresh for a new year. That’s why we make promises to ourselves to change a habit or start one, in order to become a better version of ourselves. 
           </p>
       
           <p>
               But New Year’s resolutions are notoriously tricky – studies show only roughly 10% of people keep up.


           </p>
       
           <p>
               For the rest of us, we’re still trying to convince ourselves that this year is really, really, really going to be different.
           </p>
       
           <p>
               And it actually could be, with the help of these simple tips:
           </p>
       </div>
       
       <!-- First Section -->
       <div>
           <h3>Accept that things will not be perfect</h3>
       
           <p>
               Anyone can slip up. But when you do, bear in mind that missing the mark on the odd day won’t derail your plan for the year.
           </p>
       
           <p>In fact, as long as the days you kept to your plan outnumber those where you didn’t, it’s fair to say you’re one step closer to your improved self.
           </p>
       </div>
       
       <!-- Second section -->
       <div>
           <h3>Focus on what you’re doing differently</h3>
           
           <p>
               Letting go is not easy. Less so is trying new things.
           </p>
           
           <p>
               So instead of reminding yourself every day not to eat that bag of potato chips, start the day planning how you’re going to fit in that gym session or which new salad to try.
           </p>
       </div>
       
       <!-- Third section -->
       <div>
           <h3>Use present tense, and specify </h3>
           
           <p>
               Instead of saying “I will save every month”, say “I put aside $250 every time my salary comes in”.
           </p>
           
           <p>
               It frames the target as an established practice and is a subtle way of tricking your brain against weaselling out.
           </p>
       </div>
       
       <!-- Fourth section -->
       <div>
           <h3>Tell someone about your plans</h3>
           <p>
               By sharing your targets with someone — a supportive person who knows what keeps you ticking when you are in need of motivation — it’s less likely you’ll lapse unnoticed.
           </p>
           
           <p>
               Better yet, if you have a buddy who shares the same resolution as you, all the better as you can spur each other on.
           </p>
       
       </div>
       
       <!-- Fifth section -->
       <div>
           <h3>Celebrate milestones</h3>
           <p>If there’s something to look forward to at checkpoints towards a long-term goal, you’ll more likely have more motivation to press on.
           </p>
           
           <p>
               For instance, if you had aimed to save more money, treat yourself to indulgences like a nice meal, a new dress, or tech gizmo when you cross certain thresholds.
           </p>
           
           <p>
               These tips are not only effective, they are easy to remember and put into practice.
           </p>
           
           <p>
               If you’ve drawn up a list of resolutions, you can incorporate these to make the journey to a better you more positive and enjoyable. If you haven’t — or did not include personal finance resolutions — maybe these suggestions could come in handy.
           </p>
       </div>
       
       <!-- First Resolution -->
       <div>
           <h4>1. Save for your retirement</h4>
           <p>
               If you haven’t started planning for your retirement, start now. Yes, this resolution is not specific, but it’s intentional.
           </p>
           <p>
               Not scare-mongering but with each passing year, you are one year closer to retirement.
           </p>
           <p>
               It may be daunting to think of how much you’ll need, but while you work that out, start saving, even if it’s just a little.
           </p>
           
       </div>
       
       <!-- Second Resolution -->
       <div>
           <h4>2. Don’t spend any $5 note you get</h4>
           <p>
               By the end of the year, you’ll probably have hundreds, and all from a little game you play. The money could pay your insurance premium.
           </p>
           <p>
               You could take your family out for a meal. Or you could splash it on a vacation.
           </p>
           <p>
               Point is, this simple personal challenge is a painless way to etch into your brain the virtue — and pleasures — of saving.
           </p>
       </div>
       
       <!-- Third Resolution -->
       <div>
           <h4>3. Top up your CPF every January</h4>
           <p>
               No matter how much you deposit into your CPF, know that you’re getting a better interest rate (currently, you get up to 5%) than with any savings account.
           </p>
           <p>
               You can deposit up to $7,000 a year into your own account, so doing it in January earns you more in interest.
           </p>
           <p>
               The additional perk: You get tax relief on your top-up amount.
           </p>
       </div>
       
       <!-- Fourth Resolution -->
       <div>
           <h4>4. Make yourself spend nothing for two weeks</h4>
           <p>
               It’s an effective and efficient way to reset your attitudes. You’ll think about your consumption habits. You’ll learn about yourself. And you’ll save some money.
           </p>
           <p>
               Once you get the hang of it, maybe you can do it every quarter just as some would occasionally go on a detox diet.
           </p>
           
       </div>
       
       <!-- Fifth Resolution -->
       <div>
           <h4>5. Generate an alternative stream of income</h4>
           <p>
               Again, the amount is not the nub of the experiment. Instead, it’s to learn about how you can grow your income.
           </p>
           <p>
              It may be from a small side business, or investing in the stock market.
           </p>
           
       </div>
       
       <!-- Sixth Resolution -->
       <div>
           <h4>6. Use your pay raise to reach your financial goals
           </h4>
           <p>
               Your pay raise is actually worth more than you think, since your expenses are unlikely to grow that much year on year.
           </p>
           <p>
              Automate a transfer of your raise amount out of your salary crediting account on each month’s payday into a savings account, and work out how best to exploit the additional money.
           </p>
           <p>
               You may be able to pay off an extra month’s mortgage for the year, or clear your debt, or use it for investing.
           </p>
              
       </div>
       
       
       <!-- Seventh Resolution -->
       <div>
           <h4>7. Learn about one asset class every three months
           </h4>
           <p>
               Let’s face it, many of us say we don’t know enough to start investing. And that will never change if you don’t start learning.
           </p>
           <p>
              Be realistic, though. If you haven’t started reading up on investing, you should give yourself ample time to digest the information.
           </p>
           
              
       </div>
       `],
    "art6": ["Is investment safe? / Investing", `<!-- Image for the Web Page-->
    <img class="col-12" src="https://i.ibb.co/wL76GSt/8-Investment-Myths-To-Be-Avoided.jpg"/>
    <div>
    <p>Image from: <a href = "https://www.holisticinvestment.in/investment-myths/">Holistic Investment Planners</a>
    </p>
    </div
    <p>Written By: <a href = "The investopedia Team"><u>https://www.investopedia.com/ask/answers/021615/what-safest-investment.asp</u></a></p>
         
         <p>Written On: 22 Jan 2021</p>
         
         <br>
         
         <!-- Introductory Section -->
         
         <div>
             <p>
                 Due to the variety of options on the market and the unpredictability of the economic climate, it is difficult to identify one investment that is clearly safest. But some investment categories are significantly safer than others. 
             </p>
         
             <p>
                 For example, certificates of deposit (CDs), money market accounts, municipal bonds and Treasury Inflation-Protected Securities (TIPS) are among the safest types of investments. 
             </p>
         
             <p>
                 Certificates of deposit involve giving money to a bank that then returns it with interest after a certain period of time. All bank accounts, including CDs, are guaranteed by the Federal Deposit Insurance Corporation (FDIC) for up to $250,000, so even if the bank is unable to pay you back, the FDIC will, up to that amount. However, the yield of CDs is relatively low. For example, according to a 2015 Bankrate survey, 5-year CD yields were 0.87% annually.
             </p>
         
             
         </div>
         
         <!-- First Section -->
         <div>
              <p>
                 Money market accounts are similar to CDs in that both are types of deposits at banks, so investors are fully insured up to $250,000. You can withdraw and deposit into money market accounts freely, unlike CDs, although there may be a maximum number of withdrawals per period. 
             </p>
  
             <p>
                 An investor does not have to keep the money in the account for a specified amount of time. Some banks require a minimum balance in money market accounts and charge maintenance fees if this minimum balance is not maintained.
             </p>
         </div>
         <!-- Second section -->
         <div>
  
             <p>
      Municipal bonds are debt issued by the towns, cities, counties and states. These bonds are very safe if the issuer is not likely to default, and because they are tax-exempt, they can have very high yields given their level of safety.
             </p>
  
             <p>
                  TIPS are debts issued by the federal government with par value matched to inflation, so investors are protected from the risk of inflation while taking on the debt that is highly likely to be repaid.
             </p>
             
         </div>
         <iframe width="720" height="360" src="https://www.youtube.com/embed/mLhjgysPnJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         `],
    "art7": ["What Is Cryptocurrency? / Cryptocurrency", `<!-- Image for the Web Page-->
    <img class="col-12" src="https://i.ibb.co/smYS4jY/What-is-cryptocurrency.jpg"/>

    <p>Written By: <a href = "https://www.forbes.com/advisor/investing/what-is-cryptocurrency/"><u>Kate Ashford, John Schmidt</u></a></p>
         
         <p>Updated On: 03 Jan 2022</p>
         
         <br>
         
         <!-- Introductory Section -->
         
         <div>
             <p>
                 Cryptocurrency is decentralized digital money that’s based on blockchain technology. You may be familiar with the most popular versions, Bitcoin and Ethereum, but there are more than 5,000 different cryptocurrencies in circulation.
             </p>

         
             
         </div>
         
         <!-- First Section -->
         <div>
	<h3>
	How Does Cryptocurrency Work?
	</h3>
             <p>
                 A cryptocurrency is a medium of exchange that is digital, encrypted and decentralized. Unlike the U.S. Dollar or the Euro, there is no central authority that manages and maintains the value of a cryptocurrency. Instead, these tasks are broadly distributed among a cryptocurrency’s users via the internet.
             </p>
         
             <p>
                 You can use crypto to buy regular goods and services, although most people invest in cryptocurrencies as they would in other assets, like stocks or precious metals. While cryptocurrency is a novel and exciting asset class, purchasing it can be risky as you must take on a fair amount of research to fully understand how each system works.
             </p>
              <p>
                 Bitcoin was the first cryptocurrency, first outlined in principle by Satoshi Nakamoto in a 2008 paper titled “Bitcoin: A Peer-to-Peer Electronic Cash System.” Nakamoto described the project as “an electronic payment system based on cryptographic proof instead of trust.”

That cryptographic proof comes in the form of transactions that are verified and recorded on a blockchain.
             </p>
  

         </div>
         <!-- Second section -->
         <div>
             <h3>
                 What is a Blockchain?
             </h3>
             <p>
      	A blockchain is an open, distributed ledger that records transactions in code. In practice, it’s a little like a checkbook that’s distributed across countless computers around the world. Transactions are recorded in “blocks” that are then linked together on a “chain” of previous cryptocurrency transactions.
             </p>
  
             <p>
                  “Imagine a book where you write down everything you spend money on each day,” says Buchi Okoro, CEO and co-founder of African cryptocurrency exchange Quidax. “Each page is similar to a block, and the entire book, a group of pages, is a blockchain.”
             </p>
             <p>
	With a blockchain, everyone who uses a cryptocurrency has their own copy of this book to create a unified transaction record. Software logs each new transaction as it happens, and every copy of the blockchain is updated simultaneously with the new information, keeping all records identical and accurate.

To prevent fraud, each transaction is checked using one of two main validation techniques: proof of work or proof of stake.
	</p>
         </div>
         <!- Third Section->
         <div>
             <h3>
	How to Invest in Cryptocurrency
             </h3>
             <p>
	Cryptocurrency can be purchased on peer-to-peer networks and cryptocurrency exchanges, such as Coinbase and Bitfinex. Keep an eye out for fees, though, as some of these exchanges charge what can be prohibitively high costs on small crypto purchases. Coinbase, for instance, charges a fee of 0.5% of your purchase plus a flat fee of $0.99 to $2.99 depending on the size of your transaction.
             </p>
             <p>
	More recently, the investing app Robinhood started offering the ability to buy several of the top cryptocurrencies, including Bitcoin, Ethereum and Dogecoin, without the fees of many of the major exchanges.
             </p>
         </div>	
         <p>
         Here's a video to explain further what is cryptocurrency:
         <iframe width="720" height="360" src="https://www.youtube.com/embed/OYvrbROVElQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </p>`],
         "art8": ["How To Buy Bitcoin and Other Cryptocurrencies in Singapore: A Beginner’s Guide / Cryptocurrency", `<!-- Image for the Web Page-->
    <img class="col-12" src="https://i.ibb.co/6ZBrgjh/how-to-buy-crypto.jpg"/>
    <p>Written By: <a href = "https://blog.seedly.sg/how-to-buy-bitcoins-singapore"><u>Joel Koh</u></a></p>
         
         <p>Written On: 25 Aug 2021</p>
         
         <br>
         
         <!-- Introductory Section -->
         
         <div>
             <p>
                 Unless you have been living under a rock, there’s a high chance that you may have heard of a little cryptocurrency called Bitcoin. Especially after a filing with the U.S. Securities and Exchange Commission (SEC) revealed that Tesla bought US$1.5 billion worth of Bitcoin, and announced that it expects to begin accepting bitcoins as a form of payment for its products in the near future.
             </p>
             <p>
                 Not to mention that Singapore’s biggest bank, DBS (SGX: D05) announced that it will set up a Digital Exchange that will allow investors to trade in cryptocurrencies. You may have also been following the volatile virtual currency’s price movements and have done your extensive due diligence on it. Now, you are ready to invest in Bitcoin or other cryptocurrencies that you may have researched. 
             </p>
         
         </div>
         
         <!-- First Section -->
         <div>
             <h3>
                 Before you buy Bitcoin and other Cryptocurrencies
             </h3>
             <p>
                 If you have stumbled upon this article and have next to no knowledge about cryptocurrencies, I would urge you to read our cryptocurrency for <a href = "beginners’ article."><u>https://blog.seedly.sg/cryptocurrency-basics-bitcoin/</u></a
             </p>
         
             <p>
                 But here are some basic things you need to know. First, you need to know that Bitcoin is numero uno when it comes to cryptocurrencies. Bitcoin was the first cryptocurrency to be created and is the longest surviving one thus far. Its longevity and popularity add to its security due to the nature of how blockchain works. I may be simplifying things a bit but in general, the more blocks a cryptocurrency has, the more secure its network. This also adds to its trustworthiness. As such, Bitcoin is in a category of its own as all other cryptocurrencies that are not Bitcoin are classified as altcoins (short for alternatives to Bitcoin).
             </p>
              <p>
                 Whereas for altcoins, the most popular one is Ethereum: a blockchain platform that allows users to build decentralized applications (dApps) and smart contracts on top of it. I am just barely scratching the surface as there is so much more to learn. As such, you need to really do your due diligence and fully understand the risks of investing in cryptocurrencies first before diving into it.
             </p>
              <p>
	            After all, your investment portfolio should be a reflection of your well-researched convictions and the amount of risk that you are willing to take. The worse thing you can do is to blindly copy someone else’s portfolio and end up losing money without even knowing why. A good place to start would be to develop an appreciation of the underlying technological innovation behind cryptocurrencies and a good understanding of the long-term risk and reward ratio of this asset class.
             </p>
         </div>
         <!-- Second section -->
         <div>
             <h3>
                 What Do You Need to Start Buying Cryptocurrency?
             </h3>
             <p>
      	        At the very least, there are a few things that you need to start investing in cryptocurrency:

             <ul>
             <li>Personal identification documents for verification (some exchanges like Coinhako use Singpass MyInfo)</li>
             <li>A Xfers Account to withdraw your money into your bank account for some platforms</li>
             <li>Secure connection to the internet (public WiFi is a no-go)</li>
             <li>Phone for two-factor authentication</li>
             <li>Cryptocurrency exchange account</li>
             <li>Valid methods to deposit or withdraw fiat money from the exchanges (bank accounts, debit cards, credit cards, etc.</li>    
             <li>Secured personal cryptocurrency wallet to store your crypto (this is optional but recommended)</li>    
             </ul>
	            Speaking of cryptocurrency wallets there are two main types of crypto wallets you need to know.
             </p>
             <h4>
	            Hot Wallets
             </h4>
             <p>
	            First, we have Hot Wallets: cryptocurrency wallets operated from devices that connect to the internet. Although Bitcoin itself is almost impossible to hack, hackers can still steal the private key to your hot wallet and steal the coins stored on your crypto wallet that is connected to the internet. But, what you give up in security you gain in convenience as you can trade your cryptocurrencies easily.
             </p>
             <p>
	            An example of a hot wallet is the exchange wallet that is given to you when you open your cryptocurrency exchange account. This is basically a custodian account for your cryptocurrency where the exchange holds the private keys to your coins. Be careful about this as if in the event that the exchange is hacked, you might lose your cryptocurrency. This is why in the cryptocurrency world, the phrase ‘not your key not your coin’ is wisdom many adhere to. As without the private keys, you technically do not own the bitcoin.
             </p>
             <h4>
	            Cold Wallets
             </h4>
             <p>
	            Alternatively, you can store your cryptocurrencies in a cold wallet. Put simply, the cold wallet/offline wallet/hardware wallet is a cryptocurrency wallet that stores your cryptocurrency offline. These cold wallets store your private key on hardware that is offline. Some even come with compatible software that allows you to view your crypto portfolio without exposing your private key.
             </p>
             <p>
	            There are two main types of hardware wallets that come with their advantages and disadvantages. You have your paper wallet which can be created and printed out from some websites.
             </p>
             <p>
	            During the creation of the paper wallet, you have both public keys and private keys that are printed out. Some people keep their private keys in a highly secured place and only import the private key into the wallet only at the moment of making a transaction. This method is more secure, but the downside is that it is very inconvenient to trade your cryptocurrency with this paper wallet.
             </p>
         </div>
         <!- Third Section->
         <div>
             <h3>
	            Cryptocurrency ATMs in Singapore (Bitcoin ATMs in Singapore)
             </h3>
             <p>
	            You can head to the cryptocurrency ATMs around Singapore to buy and sell cryptocurrencies directly and instantly with cash. The buying process is as such: you deposit fiat currency (e.g. SGD) and withdraw cryptocurrency to your secure digital wallet. Whereas the selling process is reversed.
             </p>
             <p>
	            This transaction method is convenient as you can skip any sign-ups or variation processes. You only need a safe and secure digital wallet to withdraw the cryptocurrency to. However, convenience does not come cheap as according to Coin ATM Radar, these ATMs charge between a whopping 4.1% – 6.9% for cryptocurrency transactions and have minimum transaction fees that start from $10.
             </p>
             <p>
	            These fees are generally higher than buying cryptocurrencies on crypto exchanges like Coinbase. Thus, if possible, you should sign up for a cryptocurrency exchange account to avoid these high fees.
             </p>
         <!- Fourth Section->
             <h3>
	            Crypto ATMs Location
             </h3>
             <p>
	            According to Coin ATM Radar, Singapore currently has 10 different automated teller machines (ATM) and one teller where you trade cryptocurrencies in Singapore.
             </p>
             <p>
	            Here is the full list:
             </p>
             <img class="col-12" src="https://i.ibb.co/HByvLr2/how-to-buy-crypto-crypto-atm-loc.jpg"/>
         </div>`],
    "art9": ["How to open a CDP and Brokerage Account In Singapore / Investing", `
    <article class = "ínvesting">
        <!-- Heading 1 -->
            <img class = "col-12" src = "https://cdn-blog.seedly.sg/wp-content/uploads/2021/01/22112349/Opening-a-CDP-Brokerage-Account-Singapore-1.png" height = "500px" width = "970px">
            
            <h1>Step-By-Step Guide: Opening A CDP And Stock Trading / Brokerage Account In Singapore</h1>
            
            <p>Written By: <a href = "https://blog.seedly.sg/author/mingfeng" target="_blank"><u>Ming Feng</u></a></p>
            
        <p>Written On: 22 May 2021 </p>
            
            <h2>What Is A Brokerage Account And How Does It Work?</h2>
            
            <p>Before investing in your first stock, one will need to open a brokerage account.</p>
            
            <p>A brokerage account is a type of account that allows you to buy and sell your investment products, 
                mainly <a href = "https://blog.seedly.sg/what-is-stock/" target = "_blank"><u>stocks</u></a>, 
                <a href = "https://blog.seedly.sg/what-is-etf/" target = "_blank"><u>exchange-traded funds (ETFs)</u></a>, <a href = "https://blog.seedly.sg/what-is-a-reit/" target = "_blank"><u>real estate investment trusts (REITs)</u></a>, 
                and certain <a href = "https://blog.seedly.sg/what-is-bond" target = "_blank"><u>bonds</u></a>.</p>
            
            <p>Brokerage accounts act as a middle platform that allows you to invest through it.</p>
    
            <p>In Singapore, one will need a <a href = "https://blog.seedly.sg/what-is-cdp-account/" target = "_blank"><u>CDP account</u></a> and a brokerage account to invest.</p>
            
            <p>As such, here is a step-by-step guide to opening your CDP account.</p>
    
            <!-- Heading 2 -->
            <h2>Steps to Open a Brokerage Account in Singapore</h2>
            
            <!-- Image-->
            <img class = "col-12" src="https://cdn-blog.seedly.sg/wp-content/uploads/2019/11/10100138/opening-a-CDP-Account.png" height = 300px width = 600px>
            
            <p><b>Here is a video on how to set up your accounts with Clara and Joel from the Seedly Team!</b></p>
    
            <!-- Video -->
            <iframe class = "col-12" width="720" height="360" src="https://www.youtube.com/embed/YHeuOsQHD1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <!-- Heading 3 -->
            <h2>Open A Central Depository Account (CDP) Direct Securities Account</h2>
    
            <p>Here are the basics of what you need to know about how to open a CDP account.</p>
            
            <!-- Image -->
            <img class = "col-12" src = "https://cdn-blog.seedly.sg/wp-content/uploads/2018/01/30021313/safe-box.png">
    
            <!-- Heading 4 -->
            <h3>1. Have a Bank Account With a Local Bank</h3>
    
            <p>To open an individual CDP Securities Account, one is required to have a bank account with one of the following banks in Singapore:</p>
    
            <!-- Unordered List -->
            <ul>
                <li>Citibank</li>
                <li>DBS/POSB</li>
                <li>HSBC</li>
                <li>Maybank</li>
                <li>OCBC</li>
                <li>Standard Chartered Bank</li>
                <li>UOB</li>
            </ul>
    
            <p>Do also note that one needs to be at least <b>18 years old</b> and <b>not an undischarged bankrupt</b> before he goes on to the next step.</p>
    
            <!-- Heading 5 -->
            <h3>2. Fill Up An Application Form</h3>
    
            <p>There is a faster method to open your CDP account.</p>
            <p>Since November 2019, you can choose to open a CDP account online and get your account sorted out within 15 minutes.</p>
            <img class = "col-12" src = "https://cdn-blog.seedly.sg/wp-content/uploads/2018/11/22111240/SGX-CDP-online-opening-.png" height = 300px width = 600px>
            <p>To apply for your CDP account online, you can click <a href = "https://investors.sgx.com/cdp-account-opening/#/form-selection" target = "_blank"><u>here</u></a>.</p>
            <p>For investors who already have a bank account with the list of banks stated, simply fill up this online <a href = "https://investors.sgx.com/cdp-account-opening/#/online-form-intro" target = "_blank"><u>application form</u></a>.</p>
            <p>Everything is really convenient now, where one can simply open a CDP account online using MyInfo or an online form.</p>
    
            <!-- Heading 6 -->
            <h3>3. Ensure You Have The Supporting Documents Required</h3>
    
            <p>Before you dive in and start filling up all the information in the application form, ensure that you have these supporting documents with you:</p>
            <ul>
                <li>Your NRIC/ Singapore Armed Forced Identity Card/ Singapore Police Force Identity Card/ Malaysia Identification Card/ Passport</li>
                <li>
                    One of the following documents or e-statements (dated within the last 3 months):
                    <ol>
                        <li>Bank statement from any Monetary Authority of Singapore (MAS) licensed banks; or</li>
                        <li>Central Provident Fund (CPF) statement; or</li>
                        <li>Latest Notice of Assessment for Income tax</li>
                    </ol>
    
                </li>
                <li>A Singapore Bank Account</li>
                <li>Photographed/ Scanned copy of your signature</li>
                <li>Tax Identification Number (TIN) for tax residency status outside Singapore</li>
                <li>Tax Identification Number (TIN)</li>
                <li>Completed Form-W9</li>
            </ul>
            <p>For application through a broker, the supporting documents needed are:</p>
            <ul>
                <li>Photocopy of NRIC/ Singapore Armed Forced Identity Card/ Singapore Police Force Identity Card/ Malaysia Identification Card/ Passport</li>
            </ul>
    
            <!-- Heading 7-->
            <h3>Application through Mail</h3>
            <p>If you prefer to apply for your CDP account by mail, here’s where you can mail the application form to.</p>
            <p>Mail the signed application form and supporting documents to:</p>
            <p><b>The Central Depository (Pte) Limited</b></p>
            <p><b>11 North Buona Vista Drive</b></p>
            <p><b>#06-07</b></p>
            <p><b>The Metropolis Tower 2</b></p>
            <p><b>Singapore 138589</b></p>
    
            <!-- Heading 8-->
            <h3>Application through a brokerage firm</h3>
            <p>Most of the brokerage firms in Singapore should be able to help their customers with their CDP account applications when they set up a brokerage account.</p>
            <p>Below are the lists of retail brokers that can help you do so:</p>
            <ul>
                <li>CIMB Securities</li>
                <li>DBS Vickers Securities</li>
                <li>iFAST Singapore</li>
                <li>KGI Securities</li>
                <li>Lim & Tan Securities</li>
                <li>Maybank Kim Eng</li>
                <li>OCBC Securities</li>
                <li>POEMS by PhillipCapital</li>
                <li>RHB Securities Singapore</li>
                <li>UOB Kay Hian</li>
            </ul>
            <p>Once you have opened your CDP account, you can log in to the <a href = "https://blog.seedly.sg/sgx-investor-portal-guide/" target = "_blank">SGX Investor Portal</a> via SingPass to view your stock portfolio and account statements. </p>
    
            <!-- Heading 9 -->
            <h2>Brokerage/ Stock trading Account: Factors To Consider</h2>
    
            <p></p>
    
            <ol>
                <li>Market access: <br> For an investor looking to invest in foreign exchanges, market access to the rest of the exchanges will be a key factor of consideration.</li> <br>
                <li><a href = "https://blog.seedly.sg/the-ultimate-cheatsheet-cheapest-stock-brokerage-in-singapore/" target = "_blank"><u>Trading / Commission Fee</u></a></li>
            </ol>
    
            <p>Copyright &copy; 2021, Seedly.sg</p>
        </article>`],
    "art10": ["Cryptocurrencies for Singaporeans / Cryptocurrency", `<article class = "cryptocurrency">
    <p><b><u>Cryptocurrencies</u></b></p>

    <!-- Heading 1 -->
    <h1>How to invest in cryptocurrencies in Singapore?</h1>

    <img class = "col-12", src = "https://endowus.com/insights/content/images/2021/08/Crypto-Singapore-2.jpg" height = 315px width = 760px>

<p>Written On: 13 Aug 2021</p>
    
    <h2>Cryptocurrency exchange platforms</h2>
    
    <p>
        If you are unfettered by the issues above and are wondering where you can get started, you can buy and trade cryptocurrencies through crypto exchanges, 
        such as <a href = "https://ftx.com/en" target = "_blank">FTX</a>, <a href = "https://www.kucoin.com/" target = "_blank"><u>Kucoin</u></a>, 
        <a href = "https://www.gemini.com/apac/singapore" target = "_blank"><u>Gemini</u></a>, 
        <a href = "https://www.coinbase.com/" target = "_blank"><u>Coinbase</u></a>, 
        and <a href = "https://crypto.com/sg/" target = "_blank"><u>Crypto.com</u></a>. When choosing your crypto exchange, consider the following factors:
    </p>
    <ul>
        <li>Trading fees</li>
        <li>Types of coins offered by the exchange</li>
        <li>Ease of depositing, withdrawing and exchanging between cryptocurrency and Singapore dollar</li>
    </ul>
    <p>Some of these platforms like Coinbase also offer lending and staking options. 
        However, there are platforms like <a href = "https://www.hodlnaut.com/" target = "_blank"><u>Hodlnaut</u></a>, 
        <a href = "https://celsius.network/" target = "_blank"><u>Celsius</u></a> and <a href = "https://blockfi.com/" target = "_blank"><u>BlockFi</u></a> that specialise in providing cryptocurrency interest accounts.</p>
    <p><b>Update</b>: As of 12 November 2021, <a href = "https://www.straitstimes.com/business/companies-markets/binancecom-users-in-singapore-given-one-month-to-withdraw-assets-redeem" target = "_blank"><u>Singaporeans are no longer able to purchase or trade crypto on Binance.com</u></a> due to MAS regulations. 
        <a href = "https://fortune.com/2021/11/10/huobi-singapore-ban-shut-down-china-crypto-exchange/" target = "_blank"><u>Huobi will also be ceasing operations in Singapore</u></a>, and will be closing all Singaporean accounts by 31 March 2022. 
        Singapore-based users are strongly encouraged to withdraw all their assets from Huobi before then.</p>
    <p>Given that these platform closures can occur at any time, it is crucial for Singapore-based investors to keep abreast of news on platform regulation changes.</p>
    
    <h2>Regulations: Is Cryptocurrency legal in Singapore?</h2>
    <p>
        In 2019, the Monetary Authority of Singapore (MAS) launched the <a href = "https://www.mas.gov.sg/regulation/acts/payment-services-act" target="_blank"><u>Payment Services Act</u></a>, which regulates cryptocurrency, 
        or digital payment tokens (DPT) service providers for money-laundering and terrorism financing risks. 
        More recently in Jan 2021, MAS announced the <a href = "https://sso.agc.gov.sg/Bills-Supp/41-2020/Published/20201102?DocDate=20201102" target="_blank"><u>Payment Services (Amendment) Bill</u></a>, 
        which requires any entity that facilitates the transmission, exchange or custody of cryptocurrencies to be licensed 
        and comply with a wider set of rules and regulations. One such consequence of the Payment Services Act is that 
        crypto exchanges now have to impose a stock limit of $5,000 for individual accounts.
    </p>
    <p><strong>As a crypto investor in Singapore, note that the crypto landscape is largely unregulated for retail investors. 
        This means you will be offered little protection or recourse 
        if you fall prey to a crypto-related scam or from callous crypto investments, 
        so practice caution and prudence when investing in cryptocurrencies</strong>.</p>
    
    <h2>Should you invest in cryptocurrency?</h2>

    <p>There is no doubt that cryptocurrencies are gaining in popularity among retail investors and institutions. 
        For example,<a href = "https://www.paypal.com/us/smarthelp/article/cryptocurrency-on-paypal-faq-faq4398" target = "_blank"><u>PayPal users</u></a> in the US can now buy, sell, hold, and spend cryptocurrencies, 
        <a href = "https://www.coindesk.com/jpmorgan-to-let-clients-invest-in-bitcoin-fund-for-first-time-sources/" target = "_blank"><u>JPMorgan's bitcoin fund</u></a> for its clients is slated to roll out as early as this summer, 
        and household names like DBS launched Asia's first direct crypto offering for private banking clients in May 2021, 
        and announced that it would be providing an ecosystem for fundraising through asset tokenisation and 
        secondary trading of digital assets including cryptocurrencies.</p>
    <p>While the future of cryptocurrency seems promising, here are some issues you should consider before making your first crypto purchase.</p>
    
    <h3>Three key issues with cryptocurrencies</h3>

    <h4>An asset, currency, security… or something else altogether?</h4>
    <p>Crypto is the first non-correlated asset class since equities in the 1600s, shared Catherine Wood, 
        founder and CEO of ARK Investment Management. There has been much debate surrounding the classification of cryptocurrencies, 
        and consequently the regulations surrounding crypto. While there has been a smattering of regulations for cryptocurrencies, 
        a clearer outlook for crypto will be paved when clearer guidelines have been defined globally.</p>
    <h4>High volatility</h4>
    <p>Crypto has seen vast swings in prices over the years, more recently from heightened regulatory pressures or a tweet from Elon Musk. 
        <a href="https://www.cnbc.com/2021/05/19/bitcoin-btc-price-plunges-but-bottom-could-be-near-.html"target="_blank"><u>Bitcoin suffered a 30% drop from its record high</u></a> in mid-April this year, 
        and crypto trading volume fell 43% in June following <a href="https://www.bbc.com/news/business-57549543"target="_blank"><u>China's crackdown on the sector</u></a>. 
        If you are thinking of buying crypto, its high volatility is definitely something to consider before allocating your funds.</p>
    <h4>Negative environmental impact</h4>
    <p>The energy consumption of cryptocurrency mining has been cause for concern among environmentalists. 
        As the price goes up, the algorithms to create new blocks on proof-of-work blockchains like Bitcoin become increasingly difficult,
        leading to greater energy consumption. While some purport that close to three quarters of 
        Bitcoin's energy needs come from renewable sources, these figures have been highly contested.</p>
    
    <h3>Three things to consider before investing in cryptocurrencies</h3>
    <p>As a digital wealth advisor committed to making it easier for you to build long-term wealth, 
        consider these three things when deciding if you should invest in cryptocurrencies.</p>
    <h4>Risk appetite</h4>
    <p>Cryptocurrencies are high-risk investments, so it is important to assess your risk appetite. 
        If you are generally risk-averse, crypto might not be for you. If you would still like to dabble in cryptocurrency, 
        consider waiting for cryptocurrency ETFs managed by global fund managers to become available in the Singapore market.</p>
    <h4>Financial goals</h4>
    <p>Consider your financial goals, such as setting up an emergency fund, saving up for a family, or building your retirement nest egg. 
        If you require short-term liquidity or are cash-tight, remain focused on achieving your financial goals first 
        before making allocations to crypto.</p>
    <H4>Investment horizon and strategy for cryptocurrencies</H4>
    <p>If you have spare cash after taking the above financial goals into consideration and would like to start investing in crypto, decide your investment horizon and strategy for cryptocurrencies, such as buying and holding on to cryptocurrencies for the long-term or trade crypto aggressively in the short term.</p>
    
    <h3>Still not sure of how to invest in cryptocurrency? Watch this video:</h3>

    <iframe class = "col-12" width="720" height="360" src="https://www.youtube.com/embed/hc1xFaQhvOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p>Copyright &copy; 2021, Endowus.com</p>
</article>`],
    "art11": ["How to spot Crypto scams / Cryptocurrency", `<article class = "cryptocurrency">
    <h1>5 Common Cryptocurrency Scams to Avoid</h1>

<p>Written By: <a href = "https://blog.seedly.sg/author/joel-koh" target="_blank"><u>Joel Ong</u></a></p>
    <p>Written on: 01 June 2021</p>
    
<p>As the cryptocurrency industry is still in its infancy and quite complex, investing in cryptocurrency has become a hunting ground for scammers to con new investors.</p>
    <p>To protect yourself here are some tips:</p>

    <ul>
        <li>When something sounds too good to be true it probably is. Any investments that promise unusually high and guaranteed returns are most likely to be a scam as good investing takes time.</li>
        <li>Always do extensive research and due diligence before investing.</li>
        <li>Do not invest in anything outside of your circle of competence.</li>
        <li>Only use reputable cryptocurrency exchanges.</li>
        <li>Gain a deep understanding of the potential risks and rewards of your investments.</li>
    </ul>

    <h2>1. Social Media Cryptocurrency Scams</h2>
    <p>Undoubtedly, social media has become a powerful and influential force in our society. </p>
    <p>But like all tools, it can be used as a force for good or evil.</p>
    <p>It comes as no surprise that hackers have been using social media to target <a href="https://blog.seedly.sg/crypto-staking-guide/"target="_blank"><u>holders of cryptocurrency</u></a> .</p>
    <p>These hackers are using fake social media profiles and have hacked popular social media profiles to con people of their cryptocurrency.</p>
    <p>On top of the cryptocurrency investment scams happening in Singapore, we are seeing cryptocurrency scams happening elsewhere as well.</p>
    <p>A May 2021 report from the U.S. Federal Trade Commission (FTC) highlighted the growing problem of cryptocurrency investment scams.</p>
    <p>A May 2021 <a href="https://www.ftc.gov/system/files/attachments/blog_posts/Cryptocurrency%20buzz%20drives%20record%20investment%20scam%20losses/cryptocurrency_spotlight.pdf"target="_blank"><u>report</u></a> from the U.S. Federal Trade Commission (FTC) highlighted the growing problem of cryptocurrency investment scams.</p>
    <p>From October 2020 to March 2021, there were <b>7,000</b>  cryptocurrency investment scams reported. Collectively, the victims of these scams reported losses of about <b>US$80 million (S$105.6 million)!</b></p>
    <img class = "col-12" src = "https://cdn-blog.seedly.sg/wp-content/uploads/2021/06/01134904/Screenshot-2021-06-01-at-1.47.05-PM.png" height="350px" width="550px">
    
    <h2>2. Cryptocurrency Ponzi Schemes</h2>
    <p>Traditionally, a Ponzi scheme refers to an investment scam named after Charles Ponzi; an American who conned thousands of people to invest in a fake postage stamp scheme in the 1920s.</p>
    <img class = "col-12" src = "https://cdn-blog.seedly.sg/wp-content/uploads/2021/06/01153530/Ponzi1920.jpeg" height="350px" width="300px">
    <p>Investors are lured to invest in the scheme with promises of unusually high returns with little or no risk.</p>
    <p>Instead of generating profers, the scammers look for new investors to invest in the scam and pay the older investors with the money that the new investors invested.</p>
    <p>The investors who receive the payouts would often recommend their friends to invest in the scheme or put in more money themselves.</p>
    <p>The scheme collapses on itself when it becomes more and more difficult to lure new investors, or when some investors want to withdraw their money or the scammer escapes with the money.</p>
    <p>Typically, Ponzi scheme scammers leverage the latest innovation, technology, product or growth industry (i.e. cryptocurrency) to tempt investors to invest with the promise of unusually high returns.</p>
    <p>Prospective investors tend to let their guard down when assessing this type of investment opportunity as they see something as disruptive or innovative.</p>
    
    <h2>3. Fake Coin Offerings</h2>
    <p>According to CoinMarketCap, there are about 5,436 cryptocurrencies in existence and new blockchain project and their cryptocurrency tokens being minted every day.</p>
    <p>You will have to be hyper-vigilant when evaluating these new coins as even the more legit coins have ridiculous names like Dogecoin and OMG.</p>
    <p>This means that it will be difficult to spot fraudulent cryptocurrencies and their blockchain projects..</p>
    <p>A high profile example of a fraudulent coin would be the 'My Big Coins' created by the company of the same name.</p>
    <p>My Big Coin (MBC) was started back in 2013 by CEO John Roche. Like many blockchain businesses, the company set out to implement blockchain technology for the gaming and cannabis industries.</p>
    <p>Subsequently, the company announced that they would back each individual MBC coin with gold.</p>
    <img class="col-12" src="https://cdn-blog.seedly.sg/wp-content/uploads/2021/06/01164732/bkn7kiyqiwzxhzudfo0k.jpeg" height = 350px width="300px">
    <p>Unfortunately, the house of cards collapsed when the U.S. Government <a href="https://coingeek.com/my-big-coin-founder-arrested-charged-with-fraud/" target="_blank"><u>arrested Randall Crater</u></a>  the founder of My Big Coin and MBC crypto in 2019.</p>
    <p>The arrest revealed that MBC coin was a fraudulent cryptocurrency and the coin was not backed by gold.</p>
    <p>Also, here are some common red flags to help you evaluate if a cryptocurrency is a fraud:</p>
    <ul>
        <li>Plagiarized investor documents and/or whitepapers.</li>
        <li>Promises of unusually high and guaranteed returns.</li>
        <li>Countdown clock to pressure you to get in on the deal.</li>
        <li>Fake management teams.</li>
    </ul>
    <h2>4. Fake Cryptocurrency Exchanges</h2>
    <p>Like stock exchanges, cryptocurrency exchanges are a vital part of the cryptocurrency ecosystem as they allow people to buy and sell cryptocurrencies.</p>
    <p>However, many of the exchanges are typically not regulated and are prone to scams.</p>
    <p>These scammers have levelled up and created fake cryptocurrency exchanges and even manipulate trading volumes on those big exchanges to entice potential investors and scam them of their funds.</p>
    <p>Some telltale signs of a fake exchange include an unsecured website, harassment of users, freezing of cryptocurrency withdrawals or in some cases the founder may run away with your investments.</p>
    <p>To ensure that you do not fall prey to such schemes, you should stick to the bigger and more reputable cryptocurrency exchanges.</p>
    <h2>5. Pump And Dump Schemes</h2>
    <p>Pump and dump schemes are not new as they have been perpetuated as long as the stock market has been in existence.</p>
    <p>Although these schemes are not new, the lack of regulation in the cryptocurrency markets has made them more susceptible to this abusive market practice.</p>
    <p>The mechanics of this scheme are simple.</p>
    <p>An individual or group would buy up most of the circulating supply of a small cryptocurrency or coin with a small market capitalisation and low liquidity. This would drive up the price.</p>
    <p>The next step would be to promote and pump up the coin with a publicity campaign.</p>
    <p>Some methods of promotion include promoting the cryptocurrency apps like Discord, Slack or Telegram to pump the coin and drive up demand.</p>
    <p>The schemers would also engage cryptocurrency influencers on social media platforms like TikTok or YouTube to hype up the coin.</p>
    <p>Not to mention that the schemers would also create fake news stories like reports of fake celebrity endorsements.</p>
    <p>This will often result in the coin going up in value temporarily as a result of this promotion.</p>
    <p>Next, the people who are pumping the coin will 'dump' the coin and sell without warning.</p>
    <img class = "col-12" src = "https://cdn-blog.seedly.sg/wp-content/uploads/2021/06/01125033/18-pump-and-dump-3.jpeg" height="350px" width="550px">
    <p>Be very wary of such schemes as more often than not, you are being manipulated by the pumpers of the coin who will sell when the coin reaches their pre-determined price.</p>
    <p>Here are some tips on how to avoid them:</p>
    <ol>
        <li>If you are looking to buy smaller cryptocurrencies that have a small market capitalisation and are not broadly traded, you need to be very proficient and do your own due diligence on the coin.</li>
        <li>Take everything you read with a pinch of salt as every publication you read has an agenda.</li>
        <li>You will also need to gain a deep understanding of what the blockchain project is about and what it does before even considering buying the coin.</li>
    </ol>

    <h3>Here is a video on how to spot cryptocurrency scams!</h3>

    <iframe class="col-12" width="720" height="360" src="https://www.youtube.com/embed/_fZEtO8xCZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p><b>Copyright &copy; 2021, Seedly.sg</b></p>
    
</article>`],
    "art12": ["Test your financial knowledge with a quiz", `<article class = "Financial quiz"
    <p>If link to quiz does not work, <a href="https://www.tryinteract.com/share/quiz/61e0dd884903d800183d81c8" target="_blank"><u>click here</u></a>
    <iframe class="col-12" width="800" height="800" style="border:none;max-width:100%;margin:0;" allowTransparency="true" frameborder="0" src="https://quiz.tryinteract.com/#/61e0dd884903d800183d81c8?method=iframe"></iframe>
    `],
    


    /*
    
    "art13":[ "Asia vs Europe, what decisions are best made where?", ``],
    "art13":[ "China's investment ideals with Japan explained",``],
    "art13":[ "How to save for that trip to Japan", ""]*/
    }
    


    $(".lessonsList").empty()

    for (const [key, value] of Object.entries(articles)) {
      $(".lessonsList").append(`<button id="`+ key +`" class="cardicle finLesson list-group-item border-0" style="background-color: var(--clrBg); color: var(--bgOpp)">`+ value[0]+`</button>`)
    }
}


$('body').on('click', '.finLesson', function() {
   id = jQuery(this).attr("id")

   $(".modal-title").text(articles[jQuery(this).attr("id")][0])
   $(".modal-body").empty()
   $(".modal-body").append(articles[jQuery(this).attr("id")][1])
   $('#newsModal').modal('show')
});


function searchArt(){
   keyword = $(".textInput")[0]["value"]
   if((keyword.length) >0){
   if($(".searchButton").text() == "X"){
   $(".textInput")[0]["value"] = ""
   $(".searchButton").text("Search")
   $('.finLesson, .newsRSS').css("display", "block")
   $(".textInput").prop('readonly', false);
   
   } else{
   $(".searchButton").text("X")
   $(".textInput").prop('readonly', true);
   
   $('.finLesson').each(function(i, obj) {
      obj.innerHTML
      if(!(obj.innerHTML.toUpperCase().includes(keyword.toUpperCase()) || keyword.toUpperCase().includes(obj.innerHTML.toUpperCase()))){
         $(obj).css("display", "none")
      }
      
  });

  $('.newsRSS').each(function(i, obj) {
   headline = $(obj).find(".card-text")[0]["innerHTML"].toUpperCase()
   if(!(headline.includes(keyword.toUpperCase()) || keyword.toUpperCase().includes(headline))){
      $(obj).css("display", "none")
   }
});

   } 
}
}


$('body').on('click', '.textInput', function() {
    if($(".textInput").attr("readonly") =="readonly"){
        var x = document.getElementById("snackbar");
        x.className = "show";
        x.innerHTML = "Please press the 'X' to clear your search!"
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    }
})

function scrollDown(){
   $('html, body').animate({
      scrollTop: $("#newsAnchor").offset().top
  }, 500);
}



