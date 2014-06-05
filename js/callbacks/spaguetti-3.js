function Promise() {
    this.then = function(callback) {
        this.callback = callback;
    }
    this.thenEach = function(callback) {
        this.callbackEach = callback;
    }
    this.resolve = function(results) {
        if (this.callback) {
            this.callback(results);
        } else if (this.callbackEach) {
            var that = this;
            results.forEach(function(result) {
                that.callbackEach(result);
            });
        }
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
        .thenEach(function(repo) {
            get_url(repo.contributors_url)
                .thenEach(function(user) {
                    if (user.login != username) {
                        $('pre').append('<p>' + user.login + '</p>');
                    }
                });
        });
});
