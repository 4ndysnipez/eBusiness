// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1_map = Titanium.UI.createWindow({  
    title: 'Map',
    backgroundColor: '#00FF80',
});
var tab1_map = Titanium.UI.createTab({  
    icon: 'KS_nav_views.png',
    title: win1_map.title,
    window: win1_map
});	

var castleKarlsruhe = Titanium.Map.createAnnotation({
	latitude: 49.020751,
	longitude: 8.405126,
	title: "Castle Karlsruhe",
	subtitle: "This is the castle of Karlsruhe",
	pincolor: Titanium.Map.ANNOTATION_RED,
	animate: true
	
});


var map_View = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region:	{
			latitude:49.020751, longitude:8.405126,
  			latitudeDelta:0.5, longitudeDelta:0.5
  			},
	animate: true,
	regionFit: true,
	userLocation: true,
	annotation:castleKarlsruhe,
	window: win1_map
});
map_View.addAnnotation(castleKarlsruhe);
win1_map.add(map_View);







//
// create controls tab and root window
//
var win2_settings = Titanium.UI.createWindow({  
    title:'Settings',
    backgroundColor:'#00FF80'
});
var tab2_settings = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:win2_settings.title,
    window:win2_settings
});



var win3_rates = Titanium.UI.createWindow({  
    title:'Rates',
    backgroundColor:'#00FF80'
});
var tab3_rates = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:win3_rates.title,
    window:win3_rates
});

var win4_facebook = Titanium.UI.createWindow({  
    title: 'Facebook',
    backgroundColor: '#3B5998'
});

var tab4_facebook = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:win4_facebook.title,
    window:win4_facebook
});

var win5_test = Titanium.UI.createWindow({  
    title: 'Button',
    backgroundColor: '#00FF80',
    url: 'test.js'
});

var tab5_test = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Button',
    window:win5_test
});



var face_login = Titanium.Facebook.createLoginButton({
	touchEnabled: true
	
});

win4_facebook.add(face_login);




//
//  add tabs
//
tabGroup.addTab(tab1_map);  
tabGroup.addTab(tab2_settings);
tabGroup.addTab(tab3_rates);
tabGroup.addTab(tab4_facebook);
tabGroup.addTab(tab5_test);    


// open tab group
tabGroup.open();


