/**
 * Created by Andres Monroy (HyveMynd) on 2/5/15.
 */
"use strict";

var SessionRepository = function(strategy){
    return require('hyve-repo').createRepository('Session', strategy);
};

module.exports = SessionRepository;