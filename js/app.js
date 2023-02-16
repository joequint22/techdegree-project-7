document.addEventListener('DOMContentLoaded', () =>{
    const alertBanner = document.getElementById('alert');

    alertBanner.innerHTML = 
        `<div class="alert-banner">
	        <p><strong>Alert: </strong> You have <strong>9</strong> overdue tasks to complete</p>
	        <p class="alert-banner-close">x</p>
        </div>`

    // USING EVENT BUBBLING ON THE ALERT-BANNER CONTAINER TO DETERMINE IF THE CLOSE BUTTON IS CLICKED OR NOT, BY USING A CONDITIONAL STATEMENT. EVERY CLICK ON THE BANNER WILL BE ACKNOLEGDED BUT ONLY WHEN THEY CLICK THE CLOSE BUTTON SPECIFYING ITS CLASS WILL IT INVOKE THE EVENT LISTENER
    alertBanner.addEventListener('click', e => {
        const element = e.target;
        if(element.classList.contains('alert-banner-close')){
            alertBanner.style.display = 'none';
        } 
    });

    //TRAFFIC LINE GRAPH ( NOTE: the lables property will apply to the X-axis while the Y-axis is determine by the data itself (?)
    const trafficCanvas = document.getElementById('traffic-chart');
    let trafficData = {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        dataset: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    }


    let trafiicOption = {
        backgroundColor: 'rgba(112, 104, 201, .5)', 
        fill: true, 
        ascpectRatio: 2.5,
        animation: {
            duration: 0            
        },
        scales: {
            y: {
                beginAtZero: true

            }
        },

        plugins: {
            legned: {
            display: false
            }  
        }
    }


    const dailyCanvas = document.getElementById('daily-chart');

    const dailyData = {
        labels: ['DAILY', 'HOURLY', 'WEEKING', 'MONTHLY'],
        database: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477bf',
            borderWidth : 1
        }]
     };

     const dailtOptions = {
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

     }

     let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
     });

     const mobileCanvas = document.getElementById("mobile-chart")

     const  mobileData = {
        labels: ["Desktop", "tablet", "Phones"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            borderground: [
                '#7477bf',
                '#78cf82',
                '#51b6cb',
            ]
            
        }]
     };

     const mobileOptions = {
        ascpectRatio: 1.9,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxwidth: 20,
                    fontStyle: 'bold'
                }
            }
        }
     }

     let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
     });

     const user = document.getElementById('userfield');
     const message = document.getElementById("message");
     const send = document.getElementById("send");
     
     send.addEventListener('click', () => {
        if (user.value === '' && message.value === "") {
            alert("Please fill out user and message fields before sending");
        } else if (user.value === "") {
            alert("Please fill out user field before sending");
        } else if (message.value === "") {
            alert("Please fill out message field nefore sending");
        } else {
            alert("Message successfully sent to: ${under.value}")
        }
     })
});