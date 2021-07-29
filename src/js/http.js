function httpRequest() {
  let http_request = false;

  if (window.XMLHttpRequest) {
    // Mozilla, Safari, ...
    http_request = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // IE
    http_request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  return http_request;
}

export default httpRequest;
