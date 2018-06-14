function greet(name) {
    return 'Hello, ' + name + '!';
}



getJSON = function(api, requestedData) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var response = JSON.parse(xhttp.responseText);
            var iter = response[requestedData];
            var output = '';
            for (var i = 0; i < iter.length; i++) {
                output += '<li>' + iter[i].name + ' width is: ' + iter[i].width["default"] + '</li>';
            }
            document.getElementById('repeater').innerHTML = output;
            return iter;
        }
    };
    xhttp.open("GET", "http://localhost:3002/" + api , true);
    xhttp.send();
};

var ideModel = getJSON('ide', 'docks');
console.log("ide: "+ ideModel);