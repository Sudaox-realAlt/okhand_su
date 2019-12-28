document.querySelector('#show_button').addEventListener('click', function() {
  if (window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
    // function defined in step 2
    window.webkitNotifications.createNotification(
        'discord.png', 'Info', 'OK Bot is changing. The original OK Bot wont be used until ever needed. Please add the new one to youre server to continue using OK Bot.');
  } else {
    window.webkitNotifications.requestPermission();
  }
}, false);
