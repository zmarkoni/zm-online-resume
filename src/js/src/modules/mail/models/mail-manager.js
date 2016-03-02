var $ = require('jquery');
var googleAPI = require('googleapis');

var MailManager = function() {

    var clientId = '402897396216-k7o8njc2iv9aokths744hodeipsu04sa.apps.googleusercontent.com';
    var apiKey = 'AIzaSyAliMDYk4HFP2EWX7wXdBcnZD4jRFbL9qk';
    var scopes =
        'https://www.googleapis.com/auth/gmail.readonly ' +
        'https://www.googleapis.com/auth/gmail.send';


    function handleClientLoad() {
        gapi.client.setApiKey(apiKey);
        window.setTimeout(checkAuth, 1);
    }

    function checkAuth() {
        gapi.auth.authorize({
            client_id: clientId,
            scope: scopes,
            immediate: true
        }, handleAuthResult);
    }

    function handleAuthClick() {
        gapi.auth.authorize({
            client_id: clientId,
            scope: scopes,
            immediate: false
        }, handleAuthResult);
        return false;
    }

    function handleAuthResult(authResult) {
        if (authResult && !authResult.error) {
            console.log('authentitication sucess');
            loadGmailApi();
            // $('#authorize-button').remove();
            // $('.table-inbox').removeClass("hidden");
            // $('#compose-button').removeClass("hidden");
        } else {
            console.log('authentitication error!');
            // $('#authorize-button').removeClass("hidden");
            // $('#authorize-button').on('click', function() {
            //     handleAuthClick();
            // });
        }
    }

    function loadGmailApi() {
        gapi.client.load('gmail', 'v1');
    }

    function sendEmail() {
        $('#send-button').addClass('disabled');

        sendMessage({
                'To': 'markonimobile@gmail.com',
                'Subject': $('#compose-subject').val()
            },
            $('#compose-message').val(),
            composeTidy
        );

        return false;
    }

    function composeTidy() {
        // $('#compose-modal').modal('hide');

        $('#compose-to').val('');
        $('#compose-subject').val('');
        $('#compose-message').val('');

        $('#send-button').removeClass('disabled');
        new messageSuccess();
    }


    function sendMessage(headers_obj, message, callback) {
        var email = '';

        for (var header in headers_obj)
            email += header += ": " + headers_obj[header] + "\r\n";

        email += "\r\n" + message;

        var sendRequest = gapi.client.gmail.users.messages.send({
            'userId': 'me',
            'resource': {
                'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
            }
        });

        return sendRequest.execute(callback);
    }

    function messageSuccess() {
        $('.message_success').removeClass('hidden');
        console.log('message is sent');
    }

    new googleAPI.handleClientLoad();

};

module.exports = MailManager;