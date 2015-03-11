/**
 * Created by Andres Monroy (HyveMynd) on 12/21/14.
 */

var UserRepository = function(strategy){
    return require('hyve-repo').createRepository('User', strategy);
};

module.exports = UserRepository;