$(function() {
    var ajax_get = function(url) {
    	var promise = jQuery.Deferred();
    	$.ajax({
    	    url: url,
    	    dataType: 'json',
    	    success: function(results) {
    	    	promise.resolve(results);
    	    }
    	});
    	return promise.promise();
    };
    var get_first_element = function(array) {
    	var promise = jQuery.Deferred();
    	promise.resolve(array[0]);
    	return promise.promise();
    };
    var get_events_url = function(repo) {
    	var promise = jQuery.Deferred();
    	promise.resolve(repo.events_url);
    	return promise.promise();
    };
    var get_last_commit_url = function(event) {
    	var promise = jQuery.Deferred();
    	promise.resolve(event.payload.commits[0].url);
    	return promise.promise();
    };

    var username = 'pepellou';
    $.when(ajax_get('https://api.github.com/users/' + username + '/repos'))
        .then(get_first_element)
        .then(get_events_url)
        .then(ajax_get)
        .then(get_first_element)
        .then(get_last_commit_url)
        .then(ajax_get)
        .done(function (commitInfo) {
            $('pre').append('<p>Last commit message is <strong>' + commitInfo.commit.message + '</strong>.</p>');
        });

});
