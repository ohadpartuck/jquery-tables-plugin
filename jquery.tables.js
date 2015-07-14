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
            wrapWithDiv: true, // To set row fixed height like so table td div {height:20px;overflow-y:auto;}
            lineNumbers: false
        }, options);

        tableModal.data = settings.data;
        tableModal.settings = settings;

        if (1 == tableModal.data.length){
            this.empty().append('<h4>No Results</h4>');

            return;
        }

        var title = $('<h1>'+settings.title+'</h1>'),
            table = $('<table/>').addClass('table'),
            totalLinesHtml = settings.totalLines ? ' (out of '+settings.totalLines+')' : '',
            numberOfResults = settings.showNumberOfResults ?
            '<h4>'+ (tableModal.data.length -1) +' Results '+ totalLinesHtml+' </h4>' : '';

        $.each(tableModal.data, function(rowIndex, rowObject) {
            var row = $('<tr/>');
            if (settings.lineNumbers) {
                if (!rowIndex == 0) {
                    row.append($('<td/>').html(rowIndex));
                }else{
                    row.append($('<th/>').html('No.'));
                }
            }
            $.each(rowObject, function(_, text) {
                if (tableModal.settings.wrapWithDiv){
                    text = '<div>'+text+'</div>'
                }
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