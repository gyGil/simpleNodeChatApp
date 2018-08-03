var socket = io();

socket.on('connect', function() {
    console.log('Connected on server');

    socket.emit('createMessage', {
        from: 'Gil',
        text: 'Hey, this is Gil'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('New Message', message);
});