/**
 * Created by hotin on 26/05/15.
 */


// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateUsersTable();
    populateMorceauxTable();
    populatePlaylistTable();

});

// Functions =============================================================

// Fill table with data
function populateUsersTable() {

    // Empty content string
    var ListContent = '';

    ListContent += '<li class="h2">Psoeudo</li>';

    // jQuery AJAX call for JSON
    $.getJSON( '/playlist/userslist', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            ListContent += '<li>' + this.username + '</li>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userlist ul').html(ListContent);
    });
};

// Fill table with data
function populateMorceauxTable() {

    // Empty content string
    //var ListContent = '';

    // jQuery AJAX call for JSON
    var listJSON = '/playlist/morceauxlist';

    $('#morceaux').dataTable( {
        ajax: {
            "url":listJSON,
            "dataSrc": "",
            "content": "jsonp"
        },
        columns:[
            {"data":"Title"},
            {"data":"Artist"},
            {"data":"Year"},
            {"data":"Duo"},
            {"data":"Usage"},
            {"data":"Styles"}
        ],
        columnDefs:[
            {
                "targets": [3],
                "visible":false
            },
            {
                "targets": [4],
                "visible":false
            },
            {
                "targets": [5],
                "visible":false
            }
        ],
        order:[[4, 'desc'],[0, 'asc']]
    } );

    $('#morceaux tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            $(this).removeClass('selected');
            $(this).addClass('selected');
        }
    } );

};

// Fill table with data
function populatePlaylistTable() {

    // Empty content string
    var ListContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/playlist/playlist', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            ListContent += '<tr><td><a class="" rel="' + this.name + '">' + this.name + '</a></td></tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#playlist table tbody').html(ListContent);
    });
};


///// Interaction

$('#userlist > table > tbody > tr').click(function() {
    // row was clicked
    console.log('clicked');
});

///// DataTable Morceaux
