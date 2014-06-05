$(function() {
    var username = 'pepellou';
    $.ajax({
        url: 'https://api.github.com/users/' + username + '/repos',
        success: function(repos) {
            repos.forEach(function(repo) {
                $.ajax({
                    url: repo.contributors_url,
                    success: function(users) {
                        users.forEach(function(user) {
                            if (user.login != username) {
                                $('pre').append('<p>' + user.login + '</p>');
                            }
                        });
                    }
                });
            });
        }
    });
});
