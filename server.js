var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var NifiRegistry = function() {
    //scope
    var self = this;
    self.app = express();
    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setEnvironmentVariables = function() {
        //  Set the environment variables we need
        self.ipaddress = '';
        self.port = 3000;
        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            self.ipaddress = "127.0.0.1";
        }
    };
    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig) {
        if (typeof sig === "string") {
            console.log('%s: Received %s - terminating sample app ...', Date(Date.now()), sig);
            process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()));
    };
    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function() {
        //  Process on exit and signals.
        process.on('exit', function() {
            self.terminator();
        });
        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'].forEach(function(element, index, array) {
            process.on(element, function() {
                self.terminator(element);
            });
        });
    };
    /**
     *  Middle Ware.
     */
    self.middleware = function() {
        var app = self.app;
        // all environments
        app.set('views', path.join(__dirname, './'));
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'ejs');
        app.use(express.favicon());
        app.use(express.json({ limit: '50mb' }));
        app.use(express.urlencoded({ limit: '50mb' }));
        app.use(express.logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded());
        app.use(express.methodOverride());
        app.use(express.cookieParser('nifi-registry'));
        app.use(express.session({ secret: 'nifi-registry' }));
        app.use(app.router);
        app.use('/nifi-registry', express.static(path.join(__dirname, './')));
        // Handle 404
        app.use(function(req, res) {
            res.status(400);
            res.render('src/400.html');
        });
        // Handle 500
        app.use(function(error, req, res, next) {
            res.status(500);
            res.render('src/500.html');
        });
        // development only
        if ('development' == app.get('env')) {
            app.use(express.errorHandler());
        }
    };
    self.routes = function() {
        self.app.get('/nifi-registry', function(req, res) {
            res.render('src/index.html');
        });
        self.app.get('/nifi-registry/explorer', function(req, res) {
            res.render('src/index.html');
        });
        self.app.get('/nifi-registry/settings/:registryId', function(req, res) {
            res.render('src/index.html');
        });
        self.app.get('/nifi-registry/manage/:registryId/:bucketId', function(req, res) {
            res.render('src/index.html');
        });
        self.app.get('/nifi-registry/manage/:registryId/:bucketId/:userId', function(req, res) {
            res.render('src/index.html');
        });
        self.app.get('/nifi-registry/users-and-groups/:registryId', function(req, res) {
            res.render('src/index.html');
        });
        self.app.get('/nifi-registry/explorer/:registryId', function(req, res) {
            res.render('src/index.html');
        });
        self.app.get('/nifi-registry/explorer/:registryId/:bucketId', function(req, res) {
            res.render('src/index.html');
        });
        self.app.get('/nifi-registry/explorer/:registryId/:bucketId/:dropletId', function(req, res) {
            res.render('src/index.html');
        });
    };
    /*
     *   Initialize Server
     */
    self.initialize = function() {
        self.setEnvironmentVariables();
        self.middleware();
        self.setupTerminationHandlers();
        self.routes();
    };
    /*
     *   Start Server
     */
    self.start = function() {
        //  Start the app on the specific interface (and port).
        http.createServer(self.app).listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...', Date(Date.now()), self.ipaddress, self.port);
        });
    };
};
/**
 *  main():  Main code.
 */
var app = new NifiRegistry();
app.initialize();
app.start();
