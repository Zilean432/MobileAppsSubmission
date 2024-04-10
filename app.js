//This element of the code contains all of the HTML that would normally be displayed on the 'index.html' file, for it to be displayed on the screen when it's link is called.
customElements.define('page-one', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <ion-header>
        <ion-toolbar color="primary">
            <ion-title>Solar Panels App</ion-title>
        </ion-toolbar>

        <!---- this grid is present on each page, and serves to make the back button and home button be more nicely arranged, each being closer to one side of the page.></!---->
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-buttons>
                        <!---- this element means that a button linking to the page the user was on previously will appear on the app itself. This code is present on each page.></!---->
                        <ion-back-button expand="block">
                            Back
                        </ion-back-button>
                    </ion-buttons>
                </ion-col>

                <ion-col expand="block"> 
                
                </ion-col>

                <ion-col>
                    
                </ion-col>
            </ion-row>
        </ion-grid>

    </ion-header>
    <ion-content>
        <ion-card>
            <ion-card-content>
                <!---- this button will take the user to the second page, where they can set up their solar panel details></!---->
                <ion-button href="#/two" expand="block">
                    <!---- this line allows an icon to be displayed on the button ></!---->
                    <img src="./images/Settings Icon.png" style="width: 50px; height: auto;">
                    Set-Up
                </ion-button>
            </ion-card-content> 
        </ion-card>

        <ion-card>
            <ion-card-content>
                <!---- this button will take the user to the forecast page, where the estimated power outputs will be displayed if they have entered and saved data on the set-up page already></!---->
                <ion-button href="#/three" expand="block">
                    <img src="./images/Forecast Icon.png" style="width: 50px; height: auto;">
                    Weather Forecast
                </ion-button>
            </ion-card-content> 
        </ion-card>
    </ion-content>

        `;
    }
});

//Same as above, but with the appropriate HTML for the second page.
customElements.define('page-two', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <ion-header>
        <ion-toolbar color="primary">
            <ion-title>Solar Panels App</ion-title>
        </ion-toolbar>

        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-buttons>
                        <ion-back-button expand="block">
                            Back
                        </ion-back-button>
                    </ion-buttons>
                </ion-col>
                <ion-col expand="block"></ion-col>
                <ion-col>
                    <!---- this line is present on page two and page three, and takes the user back to the first page.></!---->
                    <ion-button href="#/" expand="block">
                        <img src="./images/Home Icon.png" style="width: 50px; height: auto;">
                        Home
                    </ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>

    </ion-header>
    <ion-content>

        <ion-card>
            <ion-card-content>
                <ion-list>

                    <ion-item>
                        <ion-label>
                            Watts Per Square Foot:
                        </ion-label>
                        <!---- this line allows the user to enter their own data into the label. The "clear-input" element provides a button in the label that allows the user to easily delete what they have typed.></!---->
                        <ion-input label="" id="input-watts" type="number" placeholder="Enter the Watts Per Square Foot of your solar panels" clear-input="true"></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-label>
                            Area (Square Feet):
                        </ion-label>
                        <ion-input label="" id="input-area" type="number" placeholder="Enter the area (in squared feet) of your solar panels" clear-input="true"></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-label>
                            Number of Panels:
                        </ion-label>
                        <ion-input label="" id="input-number" type="number" placeholder="Enter the number of solar panels you have" clear-input="true"></ion-input>
                    </ion-item>
                </ion-list>
            </ion-card-content> 
        </ion-card>

        <ion-card>
        <ion-card-content>
            <ion-list>

                <ion-item>
                    <ion-label>
                        Your City:
                    </ion-label>
                    <!---- this line performs the same function as the "ion-input" lines above, except it allows text to be entered instead of only numbers.></!---->
                    <ion-input label="" id="input-city" type="text" placeholder="Enter your city" clear-input="true"></ion-input>
                </ion-item>
            </ion-list>
        </ion-card-content> 
    </ion-card>

        <ion-card>
            <ion-card-content>
                <!---- this button will allow the user to save their solar panel information when it is clicked.></!---->
                <ion-button id="input-btn-save" expand="block">
                    Save Information
                </ion-button>
            </ion-card-content> 
        </ion-card>

        <ion-card>
        <ion-card-content>
            <!---- this button will allow the user to save the city name they have entered when it is clicked.></!---->
            <ion-button id="input-btn-save-city" expand="block">
                Save City
            </ion-button>
        </ion-card-content> 
        </ion-card>

        <ion-card>
            <ion-card-content>
                <!---- this button will take the user to page three when it is clicked.></!---->
                <ion-button href="#/three" expand="block">
                    <img src="./images/Forecast Icon.png" style="width: 50px; height: auto;">
                    Go To Forecast
                </ion-button>
            </ion-card-content> 
        </ion-card>

    </ion-content>

        `;

    //This line associates a variable with the save button so that it can work properly with an event listener.
    const saveData = document.getElementById('input-btn-save');

    //This line adds an event listener to the save button to allow it to call the right data saving function when it is clicked.
    saveData.addEventListener('click', saveSolarPanelData);

    //These two lines perform the same function as the two above, but for the "save city" button and the respective function for that data.
    const saveCity = document.getElementById('input-btn-save-city');
    saveCity.addEventListener('click', saveCityData);


    }
});


//Same as the above two 'pages', but with the appopriate HTML for what page three needs to do.
customElements.define('page-three', class extends HTMLElement {
    connectedCallback() {      
        this.innerHTML = `
    <ion-header>
        <ion-toolbar color="primary">
            <ion-title>Solar Panels App</ion-title>
        </ion-toolbar>

        <!---- this grid element, and the elements contained within it, are the same as the one on page two.></!---->
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-buttons>
                        <ion-back-button expand="block">
                            Back
                        </ion-back-button>
                    </ion-buttons>
                </ion-col>
                <ion-col expand="block"></ion-col>
                <ion-col>
                    <ion-button href="#/" expand="block">
                        <img src="./images/Home Icon.png" style="width: 50px; height: auto;">
                        Home
                    </ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>

    </ion-header>
    <ion-content>

        <ion-card>
            <ion-card-content>
                <ion-label expand="block">
                    If the below data does not match your entered city, please reload this page.
                </ion-label>
            </ion-card-content>
        </ion-card>

        <ion-card>
            <ion-card-content>
                <ion-label expand="block">
                    Today's weather information is displayed below:
                </ion-label>    
            </ion-card-content> 
        </ion-card>

        <ion-card>
            <!---- this card contains placeholder text, which will be replaced later in the code with data from the API.></!---->
            <ion-card-content id="weather-forecast">
               FORECAST GOES HERE
            </ion-card-content> 
        </ion-card>

        <ion-card>
            <ion-card-content>
               <ion-list>
                    <ion-item>
                        <ion-label>
                            Estimated Power Outputs:
                        </ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-label style="display: flex; flex-direction: column;">
                            <img src="./images/Sunrise Icon.png" style="width: 50px; height: auto;">
                            Morning:
                        </ion-label>

                        <!---- similarly to the "weather-forecast" section, this label contains a placeholder that will later be replaced.></!---->
                        <ion-label id="output-morning">
                            Placeholder text.
                        </ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-label style="display: flex; flex-direction: column;">
                            <img src="./images/Sun Icon.png" style="width: 50px; height: auto;">
                            Afternoon:
                        </ion-label>
                        
                        <!---- same as the "outout-morning" label, this one contains a placeholder></!---->
                        <ion-label id="output-afternoon">
                            Placeholder text.
                        </ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-label style="display: flex; flex-direction: column;">
                            <img src="./images/Sunset Icon.png" style="width: 50px; height: auto;">
                            Evening:
                        </ion-label>
                        
                        <!---- same as the "output-morning" and "output-afternoon" labels, this one contains a placeholder></!---->
                        <ion-label id="output-evening">
                            Placeholder text.
                        </ion-label>
                    </ion-item>

               </ion-list>
            </ion-card-content> 
        </ion-card>

        <ion-card>
            <ion-card-content>
                <ion-item>
                    <ion-label>
                    Estimated Output (Total):
                    </ion-label>
                    
                    <!---- same as the other "output" labels, this one contains a placeholder></!---->
                    <ion-label id="output-total">
                        Placeholder text.
                    </ion-label>
                </ion-item>
            </ion-card-content>
        </ion-car>

    </ion-content>
        `;

        //This calls the function that gets the weather data from the API.
        fetchWeatherData()
        //This section calls all of the necessary functions to perform the calculations and display the results on the screen, passing in the right variables for each one.
        .then(data => {
            const { sunrise, sunset, cloudCoverage } = data;
            const { morningHours, afternoonHours, eveningHours } = calculateHours(sunrise * 1000, sunset * 1000);
            const { morningOutput, afternoonOutput, eveningOutput, totalOutput} = calculateOutputs(morningHours, afternoonHours, eveningHours, localStorage.getItem('localTotalWatts'), localStorage.getItem('localNumber'));
            displayResults(morningOutput, afternoonOutput, eveningOutput, totalOutput, cloudCoverage);
            
            //This replaces the text contained in the 'weather-forecast' label with the below data.
            const forecastDisplay = this.querySelector('#weather-forecast');
            forecastDisplay.innerHTML = `
                <p>City: ${localStorage.getItem('localCity')}</p>
                <p>Sunrise: ${new Date(data.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunset: ${new Date(data.sunset * 1000).toLocaleTimeString()}</p>
                <p>Cloud Coverage: ${cloudCoverage}%</p>
            `;
        })
        //This reports if there is an error in getting the data from the API.
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });

    }

});


//This is the function that gets called on page 2 to save the user's inputs to local storage.
function saveSolarPanelData() {
    // These 3 lines get the values from the input fields on page 2 and assigns them to variables.
    const savedWatts = document.getElementById('input-watts').value;
    const savedArea = document.getElementById('input-area').value;
    const savedNumber = document.getElementById('input-number').value;
    //console.log(savedWatts);
    //console.log(savedArea);
    //console.log(savedNumber);

    // This line multiples the watts and area variables from above with each other for use in page 3's calculations.
    const totalWatts = (savedWatts * savedArea);
    //console.log(totalWatts);
    
    // These 2 lines save the necessary variables to local storage for use in page 3.
    localStorage.setItem('localTotalWatts', totalWatts);
    localStorage.setItem('localNumber', savedNumber);
}

//This function performs similarly to the one above, but only for the input in the 'city' section.
function saveCityData() {
    const savedCity = document.getElementById('input-city').value;
    //console.log(savedCity);

    localStorage.setItem('localCity', savedCity);
    //console.log(localStorage.getItem('localCity'));
}

//This function connects to the API and gets the weather data from it.
async function fetchWeatherData() {
    const apiKey = '7e1bc419b0cda908f8ad0d066b43ee22';
    //This uses the city given on the page two to set the variable used in the API call.
    const city = localStorage.getItem('localCity');
    //This line calls the API using the details provided above.
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    //This line stores the response from the API in a JSON format.
    const data = await response.json();
    //These few lines return the specific data necessary for the rest of the functions so that they actually have it available.
    return {
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        cloudCoverage: data.clouds.all
    };
}

//This function serves to calculate the amount of hours for the morning, afternoon, and evening respectively so that they can be used to properly calculate the power outputs.
function calculateHours(sunriseTime, sunsetTime) {
    //This line sets up 12pm as a properly formatted time, so that it can be used in calculations alongside the sunrise and sunset times from the API.
    const noonTime = new Date().setHours(12, 0, 0, 0);
    //This line calculates the amount of hours between the sunrise time and the afternoon, with consideration for the format in which the time is given by the API.
    const morningHours = (noonTime - sunriseTime) / (1000 * 3600);
    //console.log(morningHours);
    //This line sets the amount of hours in the afternoon to always be 5, since the afternoon in this program is from 12pm to 5pm.
    const afternoonHours = 5;
    //This line calculates the amount of hours between the end of the afternoon and the sunset time from the API.
    const eveningHours = (sunsetTime - noonTime) / (1000 * 3600) - 5;
    //console.log(eveningHours);

    //This line makes sure that the calculated hours from this function are able to be passed into other functions for calculations in those.
    return { morningHours, afternoonHours, eveningHours };
}

//This function serves to calculate the estimated power outputs for each of the three time frames defined in the previous function.
function calculateOutputs(morningHours, afternoonHours, eveningHours, totalWatts, localNumber) {
    
    //These three lines calculate the estimated power output for each of the three time frames by multiplying the watts-per-hour of each solar panel by the amount of hours, then multiplying that by the number of panels.
    const morningOutput = (morningHours * totalWatts) * localNumber;

    const afternoonOutput = (afternoonHours * totalWatts)  * localNumber;

    const eveningOutput = (eveningHours * totalWatts)  * localNumber;

    //This line calculates the estimated total output by adding together the outputs for the three time frames.
    const totalOutput = morningOutput + afternoonOutput + eveningOutput;
    
    //This line makes sure that the calculated outputs are able to be passed into other functions for their calculations.
    return { morningOutput, afternoonOutput, eveningOutput, totalOutput};
}

//This function serves to display the estimated power outputs in the correct sections of the 'page-three' HTML.
function displayResults(morningOutput, afternoonOutput, eveningOutput, totalOutput, cloudCoverage) {

    //console.log(cloudCoverage);

    //These four lines calculates how much the current cloud coverage would affect the estimated power outputs.
    const morningClouds = (morningOutput / 100) * cloudCoverage;
    //console.log(morningClouds);

    const afternoonClouds = (afternoonOutput / 100) * cloudCoverage;

    const eveningClouds = (eveningOutput / 100) * cloudCoverage;

    const totalClouds = (totalOutput / 100) * cloudCoverage;

    //These four lines change the respective labels to display what the estimated power ouput from the previous function is, with the cloud coverage values from this function factored in, and rounded to two decimal places.
    document.getElementById('output-morning').textContent = 'The estimated power output for the morning is: ' + (morningOutput - morningClouds).toFixed(2) + ' Watts';
    document.getElementById('output-afternoon').textContent = 'The estimated power output for the afternoon is: ' + (afternoonOutput - afternoonClouds).toFixed(2) + ' Watts';
    document.getElementById('output-evening').textContent = 'The estimated power output for the evening is: ' + (eveningOutput - eveningClouds).toFixed(2) + ' Watts';
    document.getElementById('output-total').textContent = 'The estimated power output for the whole day is: ' + (totalOutput - totalClouds).toFixed(2) + ' Watts';
}
