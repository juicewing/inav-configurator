var timers = new Array();

$(document).ready(function() { 
    var tabs = $('#tabs > ul');
    $('a', tabs).click(function() {
        if ($(this).parent().hasClass('active') == false) { // only initialize when the tab isn't already active
            if (connectionId < 1) { // if there is no active connection, return
                return;
            }
            
            // Disable any active "data pulling" timer
            disable_timers();
            
            // Disable previous active button
            $('li', tabs).removeClass('active');
            
            // Highlight selected button
            $(this).parent().addClass('active');
            
            if ($(this).parent().hasClass('tab_initial_setup')) {
                $('#content').load("./tabs/initial_setup.html", tab_initialize_initial_setup);
            } else if ($(this).parent().hasClass('tab_pid_tuning')) {
                $('#content').load("./tabs/pid_tuning.html", tab_initialize_pid_tuning);
            } else if ($(this).parent().hasClass('tab_receiver')) {
                $('#content').load("./tabs/receiver.html", tab_initialize_receiver);
            } else if ($(this).parent().hasClass('tab_auxillary_configuration')) {
                $('#content').load("./tabs/auxillary_configuration.html", tab_initialize_auxillary_configuration);
            }
        }
    });
    
    // temporary
    //$('#content').load("./tabs/receiver.html", tab_initialize_receiver);
});

function disable_timers() {
    for (var i = 0; i < timers.length; i++) {
        clearInterval(timers[i]);
    }
    
    // kill all the refferences
    timers = [];
}    