// simple test to verify test is set up right
function greet(name) {
    return 'Hello, ' + name + '!';
}

getJSON = function (api, requestedData) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(xhttp.responseText);
            let iter = response[requestedData];
            let output = '';
            for (let i = 0; i < iter.length; i++) {
                output += '<li>' + iter[i].name + ' width is: ' + iter[i].width["default"] + '</li>';
            }
            //document.getElementById('repeater').innerHTML = output;
            return iter;
        }
    };
    xhttp.open("GET", "http://localhost:3002/" + api, true);
    xhttp.send();
};

let ideModel = $getJSON('ide', 'docks');
console.log("ide: " + ideModel);

function $getJSON(api, requestedData) {
    $.ajax({
            url: "http://localhost:3002/" + api,
            type: "GET",
            contentType: "application/json",
            data: null,
            dataType: "json",
            cache: false
        }
    ).done(function (data) {
        // return data for processing
        console.log(data.docks[0].name);
        $('.dock').show(1000)
            .switchClass('dock', 'loaded-dock', 1000)
            .droppable({
                accept: '.panel', hoverClass: 'dragging', tolerance: "touch",

                drop: function (e, ui) {

                    // move element from one dock to the other
                    // id the dragged element
                    console.log("ui: " + ui.draggable.id);
                    // id the drop target element
                    console.log("e: " + e.target.id);
                    $(ui.draggable).appendTo($(this));
                    //$(this).find("h2").text("Dropped");
                    // ui.draggable.find("h2").text("Dropped");
                }

            });

        $('.panel').draggable({revert: true});

        console.log("$('.panel'): " + $('.panel').length);
// can also use fit, intersect, pointer
        return data[requestedData];
    }).fail(function (xhr, status) {
        console.log("error");
    }).always(function (xhr, status) {
        // reset things
        console.log("always clean up");
    });
}
