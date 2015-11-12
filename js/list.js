$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:8888/list/api/list.json',
        method:'GET',
        async: false,
        dataType: 'json',
        success: function (response) {
            $('#listHolder').bootstrapTable({
                url: response,
                columns: [{
                    field: 'userId',
                    title: 'User Name'
                }, {
                    field: 'firstName',
                    title: 'First Name'
                }, {
                    field: 'lastName',
                    title: 'Last Price'
                },{
                    field: 'status',
                    title: 'Status'
                }]
            });
        }
    });
    $("table.sort_table").sort_table({
        "action" : "init"
    });
});

