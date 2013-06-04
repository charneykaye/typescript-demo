/*
 * 
 */
( function () {
	'use strict';

    /**
     * Config
     * @type {{
     *   baseURL: string,
     * }}
     */
    var config;

    /**
     * DOM jQuery Handles
     */
    var $doc,
        $window;

    /**
     * Initialize
     */
    function init() {

        // CONFIG
        config = $.parseJSON($('#config_json').text());

        // VARIABLES
        $window = $(window);

        // EVENTS
        $doc
            // Clicking a Location in the list will navigate to that item
            .on('click', 'a', function (evt) {
                click($(evt.currentTarget).attr('href'));
            });

        $window
            // Not doing anything with window resize at the moment.
            .on('resize', function () {
            });
    }

    /**
     * Start the application
     */
    function start() {
    }

    /**
     * clicked on something
     */
    function click(href) {
		alert(href);
    }

    /**
     * Redirect
     */
    /*
    function redirect(url) {
        window.location.href = url;
    }
    */

    /**
     * "Constructor"
     */
    ($doc = $(document)).ready(function () {
        init();
        start();
    });

}());