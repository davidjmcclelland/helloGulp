function greet(name) {
    return 'Hello, ' + name + '!';
}



getJSON = function(fileName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var response = JSON.parse(xhttp.responseText);
            var ide = response.ide;
            var widgets = ide.widgets;
            var output = '';
            for (var i = 0; i < widgets.length; i++) {
                output += '<li>' + widgets[i].name + ' is themeable? ' + widgets[i].Themeable + '</li>';
            }
            document.getElementById('repeater').innerHTML = output;
            return ide;
        }
    };
    xhttp.open("GET", "config/" + fileName + ".json", true);
    xhttp.send();
};

var ideModel = getJSON('ide');
console.log("ide: "+ ideModel);