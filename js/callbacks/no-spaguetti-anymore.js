function make_promise(callback) {
    var promise = jQuery.Deferred();
    promise.resolve(callback());
    return promise.promise();
}
function ajax_get(url) {
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
function get_first_element(array) {
    return make_promise(function() { return array[0]; });
};
function get_events_url(repo) {
    return make_promise(function() { return repo.events_url; });
};
function get_last_commit_url(event) {
    return make_promise(function() { return event.payload.commits[0].url; });
};

$(function() {
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
