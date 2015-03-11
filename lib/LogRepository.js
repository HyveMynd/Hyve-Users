/**
 * Created by Andres Monroy (HyveMynd) on 12/21/14.
 */

var LogRepository = function(strategy){
    return require('hyve-repo').createRepository('Logger', strategy);
};

module.exports = LogRepository;