console.log('hello')

const weatherForm = document.getElementById('form');
const searchinput = document.getElementById('input');
const result = document.getElementById('test');
const result1 = document.getElementById('test1');
const result2 = document.getElementById('test2');
const result3 = document.getElementById('test3');

function search(event) {

    event.preventDefault();
    result.innerHTML = "Loading.."
    result1.style.display = 'none';
    result2.style.display = 'none';
    result3.style.display = 'none';

    const location = searchinput.value;
    if (location === "") {
        result.innerHTML = "Must enter an address"
    } else {
        const url = 'http://localhost:3000/weather?address=' + location;
        fetch(url).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    result.innerHTML = "error: " + data.error

                } else {
                    result1.style.display = '';
                    result2.style.display = '';
                    result3.style.display = '';

                    result.innerHTML = 'Current weather information of ' + location + ':';
                    result1.innerHTML = 'Weather_Description :' + data.Weather_Descriptions + ', ';
                    result2.innerHTML = 'Temperature: ' + data.Temperature + ' degree' + ', ';
                    result3.innerHTML = ' Feelslike:' + data.Feelslike + ' degree' + '. ';


                    console.log(data);
                }
            })
        })


    }
}