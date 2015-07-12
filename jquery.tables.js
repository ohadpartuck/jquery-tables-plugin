(function ( $ ) {

    var tableModal = {
        that: undefined,
        data: {}
    };

    $.fn.makeTable = function(options) {
        // Defaults Values
        var settings = $.extend({
            title: 'Default Table Title',
            showNumberOfResults: true,
        }, options);

        tableModal.data = settings.data;

        if (1 == tableModal.data.length){
            this.empty().append('<h4>No Results</h4>');

            return;
        }

        var title = $('<h1>'+settings.title+'</h1>'),
            table = $('<table/>').addClass('table'),
            numberOfResults = settings.showNumberOfResults ?
            '<h4>'+ (tableModal.data.length -1) +' Results</h4>' : '';

        $.each(tableModal.data, function(rowIndex, rowObject) {
            var row = $('<tr/>');
            $.each(rowObject, function(_, text) {
                row.append($('<t'+(rowIndex == 0 ?  'h' : 'd')+'/>').html(text));
            });
            table.append(row);
        });
        return this.
            empty().
            append(title).
            append(numberOfResults).
            append(table);
    }

}( jQuery ));