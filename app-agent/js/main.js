var Crewfire = {
	init: function() {
		var self = this;
		self.fillinSuggestContent();
	},

	fillinSuggestContent: function () {
		var content = $('#samplePost').text();
		$('#buttonCopy').click(function () {
			$("#fillArea").val(content);
		});
	}
}

Crewfire.init();