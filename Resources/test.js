var win = Titanium.UI.currentWindow;

var button1 = Titanium.UI.createButton({
	title: 'Knopf',
	borderRadius: 1,
	bottom: 50,
	width: 100,
	borderColor: '#ffffff',
	backgroundColor: '#3B5998'	
});

win.add(button1);
Titanium.UI.currentTab.open(win);

button1.addEventListener('click', function(e){
	
	alert('gejjjjd');
	var newWin = Titanium.UI.createWindow({
		title: 'new Window',
		url: 'newwin.js'
		
	});
	newWin.myvar = 'Das ist mein XxXx Text';
	Titanium.UI.currentTab.open(newWin, {animation: true})
	
});
