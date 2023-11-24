
let searchInput = document.getElementById("search");


searchInput.addEventListener("input",function(eventInfo){
    let inputValue = eventInfo.target.value;
getDataForWeather(inputValue)



})





async function getDataForWeather(city) {
    let apiResponse  = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1183e7baece54bee880115154231608&q=${city}&days=3`);
    let finalResponse = await apiResponse.json();



    let cartoona = ``;

    console.log(finalResponse);
    
    // console.log(finalResponse.current);
    console.log(finalResponse.forecast.forecastday[2].hour[1].condition.text);
    // console.log(finalResponse.location);
    console.log(finalResponse.forecast.forecastday[0].date);
    console.log(finalResponse.forecast.forecastday[1].date);
    console.log(finalResponse.forecast.forecastday[2].date);


    for (let i = 0; i <1; i++) 
    {
        cartoona+=`
        <div class="col-md-4 card1  pb-4 px-0">

                            <div
                                class=" col1Header days d-flex justify-content-between align-content-center   py-2 mb-5 ">
                                <p class="m-0 ps-2">${letDayWeek(finalResponse.current.last_updated)}</p>
                                <p class="m-0 pe-2">${letDate(finalResponse.current.last_updated)}${letMonth(finalResponse.current.last_updated)}</p>
                            </div>

                            <div id="addWeather">
                                <h5 class="mainColor3 px-3">${finalResponse.location.name}</h5>
                                <div class=" tem d-flex justify-content-between pb-3 px-4">
                                    <h2 class="fw-bolder">${finalResponse.current.temp_c}<sup>o</sup>C</h2>

                                    <div class="w-25">
                                        <img class=" " src="${finalResponse.current.condition.icon}" alt="">
                                    </div>
                                </div>
                            </div>


                            <p class="mainColor1 px-3">${finalResponse.current.condition.text}</p>

                            <div class=" px-3 text-white w-75 weatherLogo d-flex justify-content-between">
                                <div class="d-flex  justify-content-center align-items-center ">
                                    <img class=" me-1" src="../imges/weather2.png" alt="">
                                    <p class="m-0 mainColor3">${finalResponse.current.humidity}%</p>
                                </div>

                                <div class="d-flex  justify-content-center align-items-center ">
                                    <img class=" me-1" src="../imges/weather3.png" alt="">
                                    <p class="m-0 mainColor3">${finalResponse.current.wind_kph}km/h</p>
                                </div>

                                <div class="d-flex  justify-content-center align-items-center ">
                                    <img class=" me-1" src="../imges/weather4.png" alt="">
                                    <p class="m-0 mainColor3">${finalResponse.current.wind_dir}</p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-4 text-center card2 text-white px-0 pb-5">
                            <p class=" mainColor3 py-2">${letDayWeek(finalResponse.forecast.forecastday[1].date)}</p>
                            <img class="mt-5 mb-4" src="${finalResponse.forecast.forecastday[1].day.condition.icon}" alt="">
                            <p class="fs-4 fw-bolder m-0">${finalResponse.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
                            <p class="mainColor3">${finalResponse.forecast.forecastday[1].day.maxtemp_f}<sup>o</sup></p>
                            <p class="mainColor1">${finalResponse.forecast.forecastday[1].hour[1].condition.text}</p>


                        </div>

                        <div class="col-md-4 text-center card3 text-white px-0 pb-5">
                            <p class=" mainColor3 py-2">${letDayWeek(finalResponse.forecast.forecastday[2].date)}</p>
                            <img class="mt-5 mb-4" src="${finalResponse.forecast.forecastday[2].day.condition.icon}" alt="">
                            <p class="fs-4 fw-bolder m-0">${finalResponse.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
                            <p class="mainColor3">${finalResponse.forecast.forecastday[2].day.maxtemp_f}<sup>o</sup></p>
                            <p class="mainColor1">${finalResponse.forecast.forecastday[2].hour[1].condition.text}</p>


                        </div>

        `
       
    
    }
       
    document.getElementById("showWeather").innerHTML = cartoona;
    } 


    function letDate(day) {
        let date = new Date(day);
       let  finalDate = date.getDate();
        console.log(finalDate);
        return finalDate 
    }

    function letMonth(day) {
        let date = new Date(day);
        return date.toLocaleString("en-us",{month:"long"})
       
    }

    function letDayWeek(day) {
        let date = new Date(day);
        return date.toLocaleString("en-us",{weekday:"long"})
       
    }








    // if ("geolocation" in navigator) {
    //     function address(position) {
            
    //     }
     
    //     navigator.geolocation.getCurrentPosition( async function(position) {
        
    //       var latitude = position.coords.latitude;
    //       var longitude = position.coords.longitude;

    //       let nominatimUrl = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
    //       let response  = await  nominatimUrl.json();
    //       let city =  response.address.city;
         

           
    //     });
    //   } 


      
    


      
   
  






        










