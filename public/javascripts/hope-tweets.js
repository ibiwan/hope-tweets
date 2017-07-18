'use strict'


let userGet  = $.getJSON(
    'http://localhost:3000/user',
    {})

userGet
    .done(function (data) {
        console.log('user data', data)
        if (data.success && data.count > 0) {
            $('#users').html('')

            data.users.forEach(function (user) {
                $('#users').append($('<li>').html(user.username + ' (' + user.first_name + ')'))
            })

        } else {
            $('#users').html('no users found')
        }
    })
    .fail(function (e) {
        console.log('error', e)
    })

let eventGet = $.getJSON(
    'http://localhost:3000/event',
    {})

eventGet
    .done(function (data) {
        console.log('event data', data)
        if (data.success && data.count > 0) {
            $('#events').html('')

            data.events.forEach(function (event) {
                $('#events').append($('<li>').html(event.name + ' (' + event.venue + ')'))
            })

        } else {
            $('#users').html('no users found')
        }
    })
    .fail(function (e) {
        console.log('error', e)
    })
