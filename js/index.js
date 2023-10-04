 
    document.addEventListener('DOMContentLoaded', function () {
        const button = document.getElementById('collapseButton1');
        const content = document.getElementById('collapsibleContent1');

        button.addEventListener('click', function () {
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            } else {
                content.classList.add('show');
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        const button = document.getElementById('collapseButton2');
        const content = document.getElementById('collapsibleContent2');

        button.addEventListener('click', function () {
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            } else {
                content.classList.add('show');
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        const button = document.getElementById('collapseButton3');
        const content = document.getElementById('collapsibleContent3');

        button.addEventListener('click', function () {
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            } else {
                content.classList.add('show');
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        const button = document.getElementById('collapseButton4');
        const content = document.getElementById('collapsibleContent4');

        button.addEventListener('click', function () {
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            } else {
                content.classList.add('show');
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const button = document.getElementById('collapseButton5');
        const content = document.getElementById('collapsibleContent5');
  
        button.addEventListener('click', function () {
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            } else {
                content.classList.add('show');
            }
        });
    });

 
    $(document).ready(function () {
        $('#datepicker').datepicker({
            format: 'mm/dd/yyyy',
            todayHighlight: true,
            autoclose: true
        });
    });

    $(document).ready(function () {
        var datePicker = $('#datepicker').datepicker({
            format: 'mm/dd/yyyy',
            todayHighlight: true,
            autoclose: true
        });

        $('#calendarButton').on('click', function () {
            datePicker.datepicker('show');
        });
    });

    $(document).ready(function () {
        $('#filterButton').on('click', function () {
            var selectedDates = $('#datePicker').datepicker('getDates');

            // Convert selectedDates to an array of strings in mm/dd/yyyy format
            var formattedDates = selectedDates.map(function (date) {
                return date.toLocaleDateString('en-US');
            });

            // Apply the filter to the table using DataTables
            $('#data-table').DataTable().columns(0).search(formattedDates.join('|'), true, false).draw();
        });
    });