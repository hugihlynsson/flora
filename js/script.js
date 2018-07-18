/* sticky navbar */
$(document).ready(function() {
	var theLoc = $('nav').position().top;
	$(window).scroll(function() {
		if(theLoc >= $(window).scrollTop()) {
			if($('nav').hasClass('fixed')) {
				$('nav').removeClass('fixed');
			}
		} 
		else { 
			if(!$('nav').hasClass('fixed')) {
				$('nav').addClass('fixed');
			}
		}
	});
});

/* smooth scroll */
$(function() {
    $('a').bind('click',function(event){
        var $anchor = $(this);
        
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800,'easeOutQuint');
        event.preventDefault();
    });
});
            
/* slideshows */
$(function(){
	$('.slides').slides({
		preload: true,
		play: 5000,
		pause: 2500,
		slideSpeed: 450,
		hoverPause: false,
		bigTarget: true
	});
});
		
/* MapBox loader */
var layer = mapbox.layer().id('hugihlynsson.map-zrzwry8e');
var map = mapbox.map('map', layer, null, [easey_handlers.DragHandler(), easey_handlers.DoubleClickHandler(), easey_handlers.TouchHandler()]);

map.ui.zoomer.add();
map.centerzoom({lat: 65.6808, lon: -18.088 }, 15);

var markerLayer = mapbox.markers.layer();
mapbox.markers.interaction(markerLayer);
map.addLayer(markerLayer);

markerLayer.add_feature({
    geometry: { coordinates: [-18.0889, 65.6805] },
    properties: {'marker-color': '#ff793d', 'marker-size': 'large', 'title': 'Hér er Flóra staðsett', 'description': 'Flóra is located here' }
});

/* language switcher */
var currentLang = '<span>íslenska</span>';
function setLang(lang) {

	if ( document.getElementById('langRight').innerHTML == lang ) {
		document.getElementById('langRight').innerHTML = '' + currentLang;
	}
	else if ( document.getElementById('langLeft').innerHTML == lang ) {
		document.getElementById('langLeft').innerHTML = '' + currentLang;
	}
	
	if ( lang == '<span>english</span>') {
		document.getElementById('navAbout').innerHTML = "about flóra";
		document.getElementById('navStore').innerHTML = "concept store";
		document.getElementById('navHappenings').innerHTML = "happenings";
		document.getElementById('navStudio').innerHTML = "studio";
		document.getElementById('navLocation').innerHTML = "location";
		/*document.getElementById('textBanner').innerHTML = "Flóra has recently moved to a new and better location.<br />Visit us at <a href='#location'>Hafnarstræti 90</a>, downtown Akureyri.";*/
		document.getElementById('headerAbout').innerHTML = "About flóra:";
		document.getElementById('textAboutRight').innerHTML = "<b>Opening hours:<br /><br />Mondays:<br />12am - 6pm<br />Tue - Sat:<br />12am - 4pm</b><br /><span id='facelink'><br />Flóra on <a href='https://www.facebook.com/flora.akureyri/' target='_blank'>facebook</a>.</span>";
		document.getElementById('textAbout').innerHTML = "Flóra is a concept store and a workshop with happenings and exhi&shy;bitions. Flóra offers sel&shy;ected new and renewed articles from Iceland, Germany, France and Switzerland.<br /><br />Flóra is located in <a href='#location'>Hafnar&shy;stræti 90</a>, down&shy;town Akur&shy;eyri, Northern-Iceland.";
		document.getElementById('headerStore').innerHTML = "Store:";
		document.getElementById('textStore').innerHTML = "Flóra offers selected new and renewed articles from Eyjafjord, Iceland, Germany, France and Switzerland. The focus is on things hand crafted made in small fabrics or homemade ones that are produced under friendly circumstances for people and nature. Flóra carries things from local artists, craftsman and producers. Here, you will find clothes, honey, coffee, books, wollen things, icelandic herbs, lace, art, candles, cups, bottles, bags among many, many other things.";
		document.getElementById('textStoreLinks').innerHTML = "Flóra offers products from these producers and artists:";
		document.getElementById('headerHappenings').innerHTML = "Happenings:";
		document.getElementById('textHappeningsTop').innerHTML = "Flóras happenings are mostly art exhibitions, but Flóra also features films and smaller lectures and other various happenings all year around.";
		document.getElementById('headerStudio').innerHTML = "Studio:";
		document.getElementById('textStudio').innerHTML = "In flóra is Kristin´s workshop. She does sociology, gardening and manages Flóra.";
		document.getElementById('headerLocation').innerHTML = "Location:";
		document.getElementById('tel').innerHTML = "tel. +354 6610168";
	}

	if ( lang == '<span>deutsch</span>') {
		document.getElementById('navAbout').innerHTML = "über flóra";
		document.getElementById('navStore').innerHTML = "der laden";
		document.getElementById('navHappenings').innerHTML = "happenings";
		document.getElementById('navStudio').innerHTML = "werkstatt";
		document.getElementById('navLocation').innerHTML = "wo ist flóra";
		/*document.getElementById('textBanner').innerHTML = "Flóra has recently moved to a new and better location.<br />Visit us at <a href='#location'>Hafnarstræti 90</a>, downtown Akureyri.";*/
		document.getElementById('headerAbout').innerHTML = "Über flóra:";
		document.getElementById('textAboutRight').innerHTML = "<b>Öffnungszeiten:<br /><br />Montags:<br />12:00 - 18:00 Uhr<br />Di - Sa:<br />12:00 - 16:00 Uhr</b><span id='facelink'><br />Flóra auf <a href='https://www.facebook.com/flora.akureyri/' target='_blank'>facebook</a>.</span><br />";
		document.getElementById('textAbout').innerHTML = "Flóra ist ein Konsept-Laden und Werkstatt mit Happenings und Aus­&shy;stellungen, mit Schwer&shy;punkt auf weiter&shy;verwendung, wieder&shy;ver&shy;wendung, Her&shy;stellungs&shy;kultur&shy;/&shy;Werk&shy;kultur und Natur&shy;nahe Lebens&shy;art.<br /><br />Flóra ist in <a href='#location'>Hafnar&shy;stræti 90</a> im Stadt&shy;zentrum von Akureyri.";
		document.getElementById('headerStore').innerHTML = "Der Laden:";
		document.getElementById('textStore').innerHTML = "Flóra bietet eine Vielfalt von ausgewählten neuen und wiederverwendeten Artikeln an. Diese stammen von lokalen, Isländischen und auch Deutschen und französische Künstlern, Kleinproduzenten und von Firmen, die ihre Waren unter freundlichen Umständen herstellen. Hier mischen sich Kunst, Design, Hausgemachtes und Kunsthandwerk als Kleidungsstücke, Honig, Kaffee, Bücher, Kunstobjekte, Postkarten, Kerzen, Wollpullis, Taschen, Holzspielzeug, Tücher, Isländische Kräuter…";
		document.getElementById('textStoreLinks').innerHTML = "Flóra hat Artikel von diesen Produzenten, Designern, und Künstlern:";
		document.getElementById('headerHappenings').innerHTML = "Happenings:";
		document.getElementById('textHappeningsTop').innerHTML = "In Flóra macht das ganze Jahr herum Ausstellungen, hauptsächtlich mit isländischen Künstlern, aber Filme werden auch gezeigt und kleinere Vorträge gehalten.";
		document.getElementById('headerStudio').innerHTML = "Werkstatt:";
		document.getElementById('textStudio').innerHTML = "Kristin arbeitet als Soziologin und Gärtnerin in Flóras Werkstatt, wo sie über Gartenkultur forscht und schreibt. Ihr Augenmark sind unsere Erfahrungen in der Konsumkultur, unserer Lebensmittelkultur und der Art des Eigenanbaus. Kristin fertigt auch Artikel an wie Möbelstücke, Gestricktes, Postkarten, Kräuter und weiteres unter der Marke ´Flóra`.";
		document.getElementById('headerLocation').innerHTML = "Wo ist flóra:";
		document.getElementById('tel').innerHTML = "tel. +354 6610168";
	}
	
	if ( lang == '<span>íslenska</span>') {
		document.getElementById('navAbout').innerHTML = "um flóru";
		document.getElementById('navStore').innerHTML = "verslun";
		document.getElementById('navHappenings').innerHTML = "viðburðir";
		document.getElementById('navStudio').innerHTML = "vinnustofa";
		document.getElementById('navLocation').innerHTML = "staðsetning";
		/*document.getElementById('textBanner').innerHTML = "Flóra hefur opnað í nýju húsi, <a href='#location'>Hafnarstræti 90</a>.<br />Verið velkomin.";*/
		document.getElementById('headerAbout').innerHTML = "Um flóru:";
		document.getElementById('textAboutRight').innerHTML = "<b>Opnunartímar:<br /><br />Mánudaga:<br />12:00 - 18:00<br />Þri - Lau:<br />12:00 - 16:00</b><span id='facelink'><br /><br />Flóra á <a href='https://www.facebook.com/flora.akureyri/' target='_blank'>facebook</a>.</span>";
		document.getElementById('textAbout').innerHTML = "Flóra er verslun, viðburðar&shy;staður og vinnu&shy;stofur. Flóra býður upp á vörur úr íslenski og þýskri menningarflóru, viðburði og sýningar.<br /><br />Flóra er til staðar í <a href='#location'>Hafnar&shy;stræti 90</a>, í miðbæ Akureyrar.";
		document.getElementById('headerStore').innerHTML = "Verslun:";
		document.getElementById('textStore').innerHTML = "Flóra býður upp á sérvalda muni úr íslenskri og þýskri menningarflóru. Áherslan er á áfram-nýtingu, endurnýtingu og nýja muni sem eru framleiddir í heimaframleiðslu eða hjá litlum framleiðendum undir vænum kringumstæðum fyrir fólk og náttúru. Í flóru má meðal annars finna fatnað, hunang, kaffi, bækur, tímarit, myndlist, kerti, krúsir, dúka, flöskur, töskur, tuskur, reykelsi.";
		document.getElementById('textStoreLinks').innerHTML = "Flóra er með vörur eftirtalinna framleiðanda og listafólks:<br />";
		document.getElementById('headerHappenings').innerHTML = "Viðburðir:";
		document.getElementById('textHappeningsTop').innerHTML = "Flóra stendur fyrir sýningum, viðburðum og uppákomum. Arna Guðný Valsdóttir, myndlistarkona var fyrst til að sýna í kjallara Flóru, en á eftir henni komu Þórarinn Blöndal og svo Snorri Ásmundsson, myndlistarmenn. Í júní 2011 voru stutt&shy;myndir Ellu von der Haide “Another World is plantable” sýndar og ræddar. Á Akureyrarvöku 2011 stóð Flóra fyrir gjörningnum “Menningarbrautin” ásamt Mjólkurbúðinni.";
		document.getElementById('headerStudio').innerHTML = "Vinnustofa:";
		document.getElementById('textStudio').innerHTML = "Í Flóru er vinnustofa Kristínar Þóru Kjartansdóttur sem starfar sjálfstætt sem félagsfræðingur, garðyrkjukona og er einnig framkvæmdastýra Flóru. Samhliða rekstri Flóru, þá vinnur Kristín að rannsóknum sem liggja á mörkum garðmenningar, umhverfis-náttúrumála, neyslu-matar&shy;menningar, en tekur líka að sér skipulagningu viðburða, starfar sem lausapenni, endurgerir og vinnur muni undir vörumerkinu Flóra.";
		document.getElementById('headerLocation').innerHTML = "Staðsetning:";
		document.getElementById('tel').innerHTML = "s. +354 6610168";
	}
	
	currentLang = lang;
}