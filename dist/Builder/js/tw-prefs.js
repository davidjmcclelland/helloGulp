// get and set preferences via  Ajax rest calls to tw-server

$getPrefs('ide', 'docks');

function $getPrefs() {
    $.ajax({
            url: "http://dmcclelland0l1:8080/Thingworx/Resources/CurrentSessionInfo/Services/GetPersistentValue",
            type: "POST",
            contentType: "application/json",
            data: '{"name":"userPreferences"}',
            dataType: "json",
            cache: false
        }
    ).done(function (data) {
        updateDocks(data);
        prefWidth = data.userPreferences.toolboxWidth;
    }).fail(function (xhr, status) {
        console.log("error: " + status);
    }).always(function (xhr, status) {
        // reset things
    });
}

function $setPrefs(value) {
    $.ajax({
            url: "http://dmcclelland0l1:8080/Thingworx/Resources/CurrentSessionInfo/Services/SetPersistentValue",
            type: "POST",
            contentType: "application/json",
            data: '{"name":"userPreferences",' +
            '"value":{"userPreferences":{' +
            '"toolboxWidth":' + value +
            '}}}',
            dataType: "json",
            cache: false
        }
    ).done(function (data) {
// nothing
    }).fail(function (xhr, status) {
        console.log("error");
    }).always(function (xhr, status) {
        // reset things
    });
}

let updateDocks = function(data){
    console.log("data.toolboxWidth: " + data.userPreferences.toolboxWidth);
};