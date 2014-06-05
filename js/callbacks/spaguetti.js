$(function() {
    var username = 'pepellou';
    $.ajax({
        url: 'https://api.github.com/users/' + username + '/repos',
        success: function(repos) {
            var firstRepo = repos[0];
            $.ajax({
                url: firstRepo.events_url,
                success: function(events) {
                    var firstEvent = events[0];
                    $.ajax({
                        url: firstEvent.payload.commits[0].url,
                        success: function(payload) {
                            $('pre').append('<p>Last commit message in repo ' + firstRepo.name + ' is <strong>' + payload.commit.message + '</strong>.</p>');
                        }
                    });
                }
            });
        }
    });
});
