function convertToVnd() {
    var radios = document.getElementsByName('drone');
    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked)
        {
            callApi(radios[i].value);
            break;
        }
    }
}


function callApi(currencys) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.exchangerate-api.com/v4/latest/' + currencys);
    var result = 0;
    xhr.onload = function() {
        if (xhr.status === 200) {
            result = JSON.parse(xhr.responseText).rates.VND;
            updateResults(result);
            console.log(result);
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}


function updateResults(response) {
    var amount = document.getElementById("amount").value;
    var currency = response;
    var result = amount * currency;
    document.getElementById("result").innerHTML = result;
    console.log(response);
}