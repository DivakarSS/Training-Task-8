let button = document.getElementById('btn');

function forecast()
{
    let inputValue = document.getElementById("txtbox").value;
    let input = inputValue.charAt(0).toUpperCase() + inputValue.substr(1).toLowerCase();
    console.log("Input value is "+input);
    fetch("https://api.weatherapi.com/v1/current.json?key=7666e52c7f1444a8acd60102221904&q="+input+"&aqi=no")
    .then(res => res.json())
    .then(data => {
             console.log(data);
             if(data.error)
             {
                 console.log("ERROR");
                let error = data['error']['message'];
                 document.getElementById("name").innerHTML = error;
                 document.getElementById("des").innerHTML = " ";
                 document.getElementById("tempf").innerHTML = " ";
             }else{
                console.log(data.location.name);
                if(data.location.name === input)
                {
                    console.log("Hi");
                    let region = data['location']['name'] + "," + data['location']['region'] + "," + data['location']['country'];       
                    let des = "It's Looking "+data['current']['condition']['text'];
                    let temprature = "Temperature : "+data['current']['temp_f']+"°F" + ",  " + data['current']['temp_c']+"°C";
          
   
                    document.getElementById("name").innerHTML = region;       
                    document.getElementById("des").innerHTML = des;
                    document.getElementById("tempf").innerHTML = temprature;
                }

             }           
      })
}




