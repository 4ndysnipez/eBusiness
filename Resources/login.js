var win = Titanium.UI.currentWindow;

var face_login = Titanium.Facebook.createLoginButton({
	touchEnabled: true
	
});

win.add(face_login);

Titanium.UI.currentTab.open(win, {animation: true})

Titanium.Facebook.appid = '497491486936008';
//Titanium.Facebook.permissions = ['publish_stream']; // Permissions your app needs
Titanium.Facebook.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged In');
    } else if (e.error) {
        alert(e.error);
    } else if (e.cancelled) {
        alert("Cancelled");
    }
});
Titanium.Facebook.authorize();

