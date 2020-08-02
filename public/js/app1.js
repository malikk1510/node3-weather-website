console.log('hello')

const weatherForm = document.getElementById('form');
const searchinput = document.getElementById('input');
const result = document.getElementById('test');
const result1 = document.getElementById('test1');

function search(event) {

    event.preventDefault();
    result.innerHTML = "Loading.."
    result1.style.display = 'none';
    const location = searchinput.value;
    if (location === "") {
        result.innerHTML = "Must enter an address"
    } else {
        const url = '/weather?address=' + location;
        fetch(url).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    result.innerHTML = "error: " + data.error

                } else {
                    result1.style.display = '';
                    result.innerHTML = 'Current weather information of: ' + data.Location + '.';
                    result1.textContent = 'is_day: ' + data.is_day + ', Weather_Description :' + data.Weather_Descriptions + ', ' + 'Temperature: ' + data.Temperature + ', degree' + ', ' + ' Feelslike:' + data.Feelslike + ' degree' + '. ';


                }
            })
        })


    }
}