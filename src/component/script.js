let cityName = document.querySelector('#cityName');

    let tempH1 = document.querySelector('#tempH1');
    let tempH2 = document.querySelector('#tempH2');
    let tempH3 = document.querySelector('#tempH3');
    let tempH4 = document.querySelector('#tempH4');
    let tempH5 = document.querySelector('#tempH5');
    let tempH6 = document.querySelector('#tempH6');

    let hum = document.querySelector('#hum');
    let tem = document.querySelector('#tem');
    let pres = document.querySelector('#pres');

    let rain = document.querySelector('#rain');
    let dirwind = document.querySelector('#dirwind');
    let date = document.querySelector('#date');
    let sun = document.querySelector('#sun');
    let sun1 = document.querySelector('#sun1');
    let airpoll = document.querySelector('#airpoll');


    let info = document.querySelector('.info');
    let send = document.querySelector('.send');
    clear();

    send.addEventListener('click', action);


    function clear() {


        cityName.value = null;

        tempH1.value = null;
        tempH2.value = null;
        tempH3.value = null;
        tempH4.value = null;
        tempH5.value = null;
        tempH6.value = null;

        hum.value = null;
		tem.value = null;
		pres.value = null;
		rain.value = null;
		date.value = null;
		dirwind.value = null;
		sun.value = null;
		sun1.value = null;
		airpoll.value = null;

    }

    function action() {
        let cityN = cityName.value;
        let temH1 = tempH1.value;
        let temH2 = tempH2.value;
        let temH3 = tempH3.value;
        let temH4 = tempH4.value;
        let temH5 = tempH5.value;
        let temH6 = tempH6.value;
        let humm = hum.value;
        let temp = tem.value;
        let press = pres.value;
        let rains = rain.value;
        let dates = date.value;
        let dirwinds = dirwind.value;
        let suns = sun.value;
        let suns1 = sun1.value;
        let airpolls = airpoll.value;

        if (!cityN || !temH1 || !temH2 || !temH3 || !temH4 || !temH5 || !temH6 || !humm || !temp || !press || !rains || !dates || !airpolls || !dirwinds || !suns || !suns1) {
            info.innerHTML = "Musisz uzupełnić wszystkie dane";
        } else {
            info.innerHTML = '';
            let data = {

                    cityName : cityN,
                    tempH1 : temH1,
                    tempH2 : temH2,
                    tempH3 : temH3,
                    tempH4 : temH4,
                    tempH5 : temH5,
                    tempH6 : temH6,
                    hum : humm,
                    tem : temp,
                    pres : press,
                    rain : rains,
                    date : dates,
                    dirwind : dirwinds,
                    sun : suns,
                    sun1 : suns1,
                    airpoll : airpolls
            }

            fetch('http://localhost:3001/api/pogodovo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            clear();
        }
    }