importScripts('./ngsw-worker.js');

(function () {
  'use strict';

  self.addEventListener('notificationclick', (event) => {{

      if(event.action){
        console.log(event.notification)
        event.waitUntil(clients.openWindow(event.notification.data.actionLinks[event.action]));
      }else {
        event.waitUntil(clients.openWindow(event.notification.data.actionLinks['default']));
      }
    }

  });}
());
