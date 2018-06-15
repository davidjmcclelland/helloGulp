// simple test to verify test is set up right
function greet(name) {
    return 'Hello, ' + name + '!';
}

let ideModel = $getJSON('ide', 'docks');

function enableDocks(data){
    // return data for processing
    let docks = data.docks, i = 0, ii = 0;
    for(i = 0; i < docks.length; i++ ) {
        // set dock titles
        $('#' + docks[i].id + ' .title').text(docks[i].name);
    // populate dock with panels
        let panels = docks[i]['panels'];
        // are there preferences set?
        if (panels.user !== null) {
            console.log(panels.user.length);
            panels = panels.user;
        }else{
            panels = panels.default;
        }
            for(ii = 0; ii < panels.length; ii++ ) {
            console.log(panels[ii].name);
            $('#' + panels[ii].id).text(panels[ii].name);
        }


    }
    // drag/drop support
    $('.dock').show(500)
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
}

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
        enableDocks(data);

// can also use fit, intersect, pointer
        return data[requestedData];
    }).fail(function (xhr, status) {
        console.log("error");
    }).always(function (xhr, status) {
        // reset things
        console.log("always clean up");
    });
}
