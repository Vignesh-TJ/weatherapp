async function checkWheather(){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ind.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`);
    var data=await response.json();
    console.log(data)
    if(data.name==undefined)
    {
        alert('check your spelling')
        
    }
    else{
        city.innerHTML=data.name
        temp.innerHTML=data.main.temp+'ºC'

    }
    if(data.weather[0].main=='Clouds'){
    icon.src='https://www.shareicon.net/data/2016/07/22/799894_cloud_512x512.png'
  
    
    }
    else if(data.weather[0].main=='Rain'){
        icon.src='https://static.vecteezy.com/system/resources/previews/012/066/505/original/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png'
        
            
    }
            
    else if(data.weather[0].main=='Clear'){
        icon.src='https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png'
    }
    else if(data.weather[0].main==''){
        icon.src=''
    }
    wind.innerHTML=data.wind.speed +'Km/h'
    humidity.innerHTML=data.main.humidity +"%"
    condition.innerHTML=data.weather[0].main
   

  
}

