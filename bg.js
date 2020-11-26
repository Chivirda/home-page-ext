const protocol = window.location.protocol
const home = window.location.hostname
const port = window.location.port

port
   ? document.location.replace(protocol + '//' + home + ':' + port)
   : document.location.replace(protocol + '//' + home)