// simple test to verify test is set up right
function greet(name) {
    return 'Hello, ' + name + '!';
}

$getJSON('ide', 'docks');

function enableDocks(data) {
    // return data for processing
    let docks = data.docks, i = 0;
    for (i = 0; i < docks.length; i++) {
        // set dock titles
        $('#' + docks[i].id + ' .title').text(docks[i].name);
        // populate dock with sections
        let sections = docks[i]['sections'];
        // are there preferences set?
        if (sections.user !== null) {
            console.log(sections.user.length);
            sections = sections.user;
        } else {
            sections = sections.default;
        }
        enableSections(sections);
    }
}

function enableSections(sections) {
    let i = 0, panels;
    for (i = 0; i < sections.length; i++) {
        console.log(sections[i].name);
        $('#' + sections[i].id).text(sections[i].name);
        // populate dock with sections
        let panels = sections[i]['panels'];
        // are there preferences set?
        if (panels.user !== null) {
            console.log(panels.user.length);
            panels = panels.user;
        } else {
            console.log("panels.default:" + panels.default);
            panels = panels.default;
        }
        console.log(panels.length);
        enablePanels(panels);
    }
}

function enablePanels(panels) {
    let i = 0;
    console.log(panels.length);
    for (i = 0; i < panels.length; i++) {
        $('#' + panels[i].id).text(panels[i].name);
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
