// simple test to verify test is set up right
function greet(name) {
    return 'Hello, ' + name + '!';
}

$getJSON('ide', 'docks');
let prefWidth = 0;

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
            //console.log(sections.user.length);
            sections = sections.user;
        } else {
            sections = sections.default;
        }

        $('#dock1').resizable({
            helper: "ui-resizable-helper",
            containment: "parent",
            handles: 'e',
            resize: function (event, ui) {
                $(this).css('height', '');
                $(this).css('left', '');
            },
            stop: function (event, ui) {
                $(this).css('height', '');
                $(this).css('left', '');
                $setPrefs(ui.size.width);
                //w2 = Math.min(w2, 300);
                // $('.dock').css('width', w2);
            }
        });
        /*

                $('#dock2').resizable({
                    helper: "ui-resizable-helper",
                    containment: "parent",
                    handles: 'w',
                    resize: function (event, ui) {
                        $(this).css('height', '');
                    },
                    stop: function (event, ui) {
                        $(this).css('height', '');
                    }
                });
        */

        // drag/drop support
        $('.dock').show()
            .switchClass('dock', 'loaded-dock', 500)
            .droppable({
                accept: '.section', hoverClass: 'dragging', tolerance: "touch",

                drop: function (e, ui) {
                    // move element from one dock to the other
                    // id the dragged element
                    // console.log("ui: " + ui.draggable.id);
                    // id the drop target element
                    //console.log("e: " + e.target.id);
                    $(ui.draggable).appendTo($(this));
                    //$(this).find("h2").text("Dropped");
                    // ui.draggable.find("h2").text("Dropped");
                }

            });

        // get saved dock width pref
        console.log("prefWidth: " + docks[i].id + ", " + prefWidth);
        $('#' + docks[i].id).css('width', prefWidth);
        enableSections(sections);
    }
}

function enableSections(sections) {
    let i = 0, panels;
    for (i = 0; i < sections.length; i++) {
        // console.log(sections[i].name);
        $('#' + sections[i].id).text(sections[i].name);
        // populate dock with sections
        let panels = sections[i]['panels'];
        // are there preferences set?
        if (panels.user !== null) {
            //    console.log(panels.user.length);
            panels = panels.user;
        } else {
            //     console.log("panels.default:" + panels.default);
            panels = panels.default;
        }

        $('.section').draggable({revert: true});

        enablePanels(panels);
    }
}

function enablePanels(panels) {
    let i = 0;
    for (i = 0; i < panels.length; i++) {
        $('#' + panels[i].id).text(panels[i].name);
    }
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
        $getPrefs();
        enableDocks(data);
// can also use fit, intersect, pointer
        return data[requestedData];
    }).fail(function (xhr, status) {
        console.log("error");
    }).always(function (xhr, status) {
        // reset things

    });
}
