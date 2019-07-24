// Force HTTPS if connected via HTTP -- https://stackoverflow.com/questions/4723213/detect-http-or-https-then-force-https-in-javascript
if (location.protocol != 'https:') {
  // get the URL for the HTTPS version of this page
  var newURL = 'https:' + window.location.href.substring(window.location.protocol.length);
  
  // overwrite page to inform the user they are being redirected to HTTPS in case it hangs
  document.open('text/html');
  document.write('<!DOCTYPE HTML><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>ShortcutIV - HTTP redirect to HTTPS</title></head><body><p>WARNING: Your connection is using HTTP and is not secure. You are now being redirected to a secure connection over HTTPS.<p><p>To speed up the process, you may <a href="'+newURL+'">click here</a><br><br>Please report this message to us via our discord <a href="https://discord.gg/UD4Temq"><strong>https://discord.gg/UD4Temq</strong></a> and let us know how this happened!</p></body><br><br></html>');
  document.close();
  
  // redirect the user to the HTTPS version of the page
  location.href = newURL;
}