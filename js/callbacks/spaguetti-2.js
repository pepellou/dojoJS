function Promise() {
    this.callback = function() {};
    this.then = function(callback) {
        this.callback = callback;
    }
    this.resolve = function(results) {
        this.callback(results);
    }
}

var get_url = function(url) {
    var promise = new Promise();
    $.ajax({
        url: url,
        success: function(results) {
            promise.resolve(results);
        }
    });
    return promise;
}

$(function() {
    var username = 'pepellou';
    get_url('https://api.github.com/users/' + username + '/repos')
        .then(function(repos) {
            repos.forEach(function(repo) {
                get_url(repo.contributors_url)
                    .then(function(users) {
                        users.forEach(function(user) {
                            if (user.login != username) {
                                $('pre').append('<p>' + user.login + '</p>');
                            }
                        });
                    });
            });
        });
});
