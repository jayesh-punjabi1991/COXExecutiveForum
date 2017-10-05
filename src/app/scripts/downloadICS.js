var buildICSEntry = function( javascriptExampleDateObject ){

    	var calEntry = icsFormatter();
    	var title = '2018 Cox Communications Executive Forum';
    	var place = 'California';
    	var begin = new Date(1540224000000);
    	var end = new Date(1540483200000);
    	var description = `The Cox Executive Forum is held every two years for Cox's senior leaders to align on strategy, set priorities, and celebrate success. The forum also presents a special opportunity to make a charitable impact through the Silent and Live Auction, benefiting the Boys & Girls Clubs of America.`;
      

		calEntry.addEvent(title,description, place, begin.toUTCString(), end.toUTCString());
		calEntry.download('2018 Cox Communications Executive Forum');
 }
