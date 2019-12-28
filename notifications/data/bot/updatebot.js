document.querySelector('#show_button').addEventListener('click', function() {
  if (window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
    // function defined in step 2
    window.webkitNotifications.createNotification(
        'discord.png', 'Notification Title', 'Notification content...');
  } else {
    window.webkitNotifications.requestPermission();
  }
}, false);
