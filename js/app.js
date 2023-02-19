
    const alertBanner = document.getElementById('alert');
    const trafficCanvas = document.getElementById('traffic-chart');
    const dailyCanvas = document.getElementById('daily-chart');
    const mobileCanvas = document.getElementById("mobile-users");
    const user = document.getElementById('userField');
    const message = document.getElementById("message");
    const send = document.getElementById("send");
    const bell = document.querySelector(".bell");
    const bellMenuContainer = document.querySelector(".bellMenu-container")
    const bellMenu = document.querySelector('.bellMenu');
    const namesDiv = document.querySelector('.names-list')
    const userInput = document.getElementById('userField');

    const btnSave = document.getElementById('save')
    const btnCancel = document.getElementById('cancel')
    const emailNotification = document.getElementById('email')
    const profile = document.getElementById('profile')
    const timezone = document.getElementById('timezone')

    const hourly = document.getElementById('hourly')
    const daily = document.getElementById('daily')
    const weekly = document.getElementById('weekly')
    const monthly = document.getElementById('monthly')


//Notification Dropdown
bell.addEventListener('click', () => {
    if(bellMenuContainer.style.display != 'none'){
        bellMenuContainer.style.display = 'none'
    } else {
        bellMenuContainer.style.display = 'block';
        bellMenuContainer.innerHTML = 
            `<ul class="bellMenu">
                <li>You have 6 unread messages<span>X</span></li>
                <li>You have 4 new followers<span>X</span></li>
                <li>Your password expires in 7 days<span>X</span></li>
            </ul>`;
    }
});




    // FUNCTIONS FOR LINE GRAPH
    function addData(chart, label, data){
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset)=>{
        dataset.data.push(data);
    });
    chart.update();
};

    function removeData(chart){
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
};

    // CREATES ALERT BANNER AND INSERTS IN ELEMENT

    alertBanner.innerHTML = 
        `<div class="alert-banner">
	        <p><strong>Alert: </strong> You have <strong>9</strong> overdue tasks to complete</p>
	        <p class="alert-banner-close">x</p>
        </div>`;

    // CLOSES ALERT BANNER USING THE BUBBLE EFFECT ON THE SPAN 'x'
    alertBanner.addEventListener('click', e => {
        const element = e.target;
        if(element.classList.contains('alert-banner-close')){
            alertBanner.style.display = 'none';
        } 
    });




    //TRAFFIC LINE GRAPH 
    let hourlyTraffic = {
        labels: ["1:00",
        "2:00",
        "3:00",
        "4:00",
        "5:00",
        "6:00",
        "7:00",
        "8:00",
        "9:00", 
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "24:00"],
        datasets: [{
            data: [
                360, 
                550,
                420, 
                320, 
                200, 
                380, 
                500, 
                220, 
                175, 
                400,
                600,
                200,
                580, 
                400, 
                420, 
                550,
                780,
                120, 
                300, 
                430, 
                290, 
                600, 
                370, 
                900,
            ],
            backgroundColor: 'rgba(116, 119, 191, 0.3)',
            borderWidth: 1,
        }]
    };


    //
    let trafficOptions = {
        backgroundColor: 'rgba(112, 104, 201, 0.5)',
        fill: true,
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    


    //daily line chart data 
    let dailyTraffic = {
        labels: ["S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"],
        datasets: [{
            data: [700, 360, 880, 420, 560, 1150, 1300],
            backgroundColor: 'rgba(116, 119, 191, 0.3)',
            borderWidth: 1,
        }]
    };



    //weekly line chart data 
    let weeklyTraffic = {
        labels: ['16-22', 
        '23-29', 
        '30-5', 
        '6-12', 
        '13-19', 
        '20-26', 
        '27-3', 
        '4-10', 
        '11-17', 
        '18-24', 
        '25-31'],
        datasets: [{
            data: [750, 
            1250, 
            1000, 
            2000, 
            1500, 
            1750, 
            1250, 
            1850, 
            2250, 
            1500, 
            2500],
            backgroundColor: 'rgba(116, 119, 191, 0.3)',
            borderWidth: 1,
        }]
    };



    // monthly line chart data 
    let monthlyTraffic = {
        labels: ['Jan', 
        'Feb', 
        'Mar', 
        'Jun', 
        'Jul', 
        'Aug', 
        'Sep', 
        'Oct', 
        'Nov', 
        'Dec'],
        datasets: [{
            data: [440,
            820, 
            790, 
            420, 
            750, 
            950, 
            420, 
            70, 
            360, 
            650, 
            260, 
            900],
            backgroundColor: 'rgba(116, 119, 191, 0.3)',
            borderWidth: 1
        }]
    }



//line graph event listeners 

    hourly.addEventListener('click', (e) => {
        remove(trafficChart)
        let hourlyChart = new Chart(trafficCanvas, {
            type: 'line',
            data: hourlyTraffic,
            options: trafficOptions
        })
        addData(hourlyChart, hourlyChart.labels, hourlyChart.datasets[0].data)
    })

    daily.addEventListener('click', (e) => {
        remove(trafficChart)
        let dailyChart = new Chart(trafficCanvas, {
            type: 'line',
            data: dailyTraffic,
            options: trafficOptions
        })
        addData(dailyChart, dailyChart.labels, dailyChart.datasets[0].data)
    })
    
    weekly.addEventListener('click', (e) => {
        remove(trafficChart)
        let weeklyChart = new Chart(trafficCanvas, {
            type: 'line',
            data: weeklyTraffic,
            options: trafficOptions
        })
        addData(weeklyChart, weeklyChart.labels, weeklyChart.datasets[0].data)
    })

    monthly.addEventListener('click', (e) => {
        remove(trafficChart)

        let monthlyChart = new Chart(trafficCanvas, {
            type: 'line',
            data: monthlyTraffic,
            options: trafficOptions
        })
        addData(monthlyChart, monthlyChart.labels, monthlyChart.datasets[0].data)
    })


        let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: monthlyTraffic,
        options: trafficOptions
    })











 //********************** */
    const dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477bf',
            borderWidth: 1,
        }]
     };

     const dailyOptions = {
        scales: {
            y: {
                beginAtZero : true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }

     };

     let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
      });

   

     const  mobileData = {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 1,
            borderground: [
                '#7477bf',
                '#78cf82',
                '#51b6cb',
            ]
            
        }]
     };

     const mobileOptions = {
        aspectRatio: 2,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    fontStyle: 'bold'
                }
            }
        }
     };

     let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
     });


     send.addEventListener('click', () => {
        if (user.value === '' && message.value === '') {
            e.preventDefault();
            alert("Please fill out user and message fields before sending");
        } else if (user.value === '') {
            e.preventDefault();
            alert("Please fill out user field before sending");
        } else if (message.value === '') {
            e.preventDefault();
            alert("Please fill out message field before sending");
        } else {
            e.preventDefault();
            alert(`Message successfully sent to: ${under.value}`)
            userInput.value = '';
            message.value = '';
        }
     });


     //auto-complete function

     const namesArray = [
        'Victoria Chambers',
        'Dale Byrd',
        'Dawn Wood',
        'Dan Oliver',
     ];

     userInput.addEventListener('keyup', (e) =>{
        namesDiv.innerHTML= "";
        namesDiv.style.display = "block";
        const ul = document.createElement("ul");
        namesDiv.append(ul);
        let search = e.target.value.toLowerCase();
        if(search !== ""){
            namesArray.forEach(name =>{
                if(name.toLowerCase().includes(search)){
                    const li = document.createElement("li")
                    li.textContent = name;
                    ul.append(li);
                    li.addEventListener('click', (e) =>{
                        userInput.value = li.textContent;
                        namesDiv.style.display = "none";
                    });
                }
            })
        }else{
            namesDiv.textContent = "";
            namesDiv.style.display = "none";
        }
    })

    // add to local storage
    btnSave.addEventListener('click', () =>{
        if(emailNotification.checked){
            localStorage.setItem('toggleOne', emailNotification.value)
        }
        if(profile.checked){
            localStorage.setItem('toggleTwo', profile.value)
        }
        if(timezone.checked){
            localStorage.setItem('tz', timezone.value)
        }
    })

   //removes from local storage 
    btnCancel.addEventListener('click', () =>{
        localStorage.removeItem('toggleOne');
        localStorage.removeItem('toggleTwo');
        localStorage.removeItem('tz');
    })


    //retrieves from local storage 
    const settingsToggleOne = localStorage.getItem('toggleOne')
    const settingsToggleTwo = localStorage.getItem('toggleTwo')
    const settingsTZ = localStorage.getItem('tz')

    //checks for local storage to display saved settings 
    const display = () => {
        if(emailNotification.value === settingsToggleOne){
            emailNotification.checked = true
        }
        if(profile.value === settingsToggleTwo){
            profile.checked = true;
        }
        if(timezone.value !== ""){
            timezone.value = settingsTZ;
        }
        return;
    }
    display();

   