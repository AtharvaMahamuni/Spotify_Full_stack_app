const User = function(user) {
    this.user_id = user.user_id;
    this.user_name = user.user_name;
    this.password = user.password;
}

module.exports = User;