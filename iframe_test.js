var ifrm = document.createElement('iframe');
ifrm.setAttribute('id', 'ifrm'); // assign an id
// to place before another page element
var el = document.getElementById('marker');
el.parentNode.insertBefore(ifrm, el);

// assign url
ifrm.setAttribute('src', 'https://github.com/RichardOberdieck/test_html/blob/main/test.html');
