(function() {
	var _smartsupp = {};
	var smartsupp = window.parent.smartsupp;
	var smartsuppChat = parent.smartsupp.chats[smartchatId];
	
	var _config = {"colors":{"primary":"#3598dc","banner":"#494949"},"translates":{"online":{"title":"","infoTitle":""},"offline":{},"widget":{},"banner":{"arrow":{},"bubble":{}},"privacyNotice":{"title":"Traitement de donn\u00e9es personnelles"}},"theme":{"name":"flat","options":{"widgetRadius":3}},"lang":"fr","muteSounds":false,"orientation":"right","hideBanner":false,"hideWidget":false,"hideOfflineChat":false,"hideOfflineBanner":true,"enableRating":false,"ratingComment":false,"requireLogin":false,"transcriptEnabled":false,"privacyNoticeUrl":"","privacyNoticeEnabled":true,"banner":{"type":"arrow","options":{}},"package":"free","isEnabledEvents":false,"api":{"basic":true,"banner":false,"theme":false,"events":false,"groups":false}};
	_config.baseLang = 'fr';
	_config.browserLang = 'fr';
	_config.avatarPath = '/widgets/avatars/3twRHzkJEq.png';
	_config.host = 'server.smartsupp.com';
	_config.package = 'free';
	_config.packageName = 'free';
	_config.logoUrl = '';
	_config.logoSrc = '';
	_config.logoSmSrc = '';
	
	var smartsuppLoadInterval = setInterval(function() {
		if (!window.miwo) return;
		clearInterval(smartsuppLoadInterval);
		smartsuppChat.setOptions(_smartsupp);
		
		miwo.ready(function() {
			miwo.cookie.document = parent.document;
			miwo.baseUrl = smartsuppChat.getOption('baseUrl');
			miwo.staticUrl = smartsuppChat.getOption('staticUrl');

			var configurator = new Miwo.Configurator();
			configurator.addConfig(App.DefaultConfig.getConfig());
			configurator.addConfig(App.ClientConfig.getConfig(_config));
			configurator.addConfig(App.ChatConfig.getConfig(smartsuppChat));

			configurator.ext(new Chat.ChatExtension());
			var container = configurator.createContainer();
			container.get('miwo.application').run();
		});
	}, 50);
	
	if (_config.api.events && smartsuppChat.getOption('gaKey')) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	}
	
	
	
	!smartsuppChat.getOption('disableInternalApi') && (function() {
		
	})();
})();
