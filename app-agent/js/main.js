var Crewfire = {
	init: function() {
		var self = this;
		self.fillinSuggestContent();
		self.sortingTable();
	},

	fillinSuggestContent: function () {
		var content = $('#samplePost').text();
		$('#buttonCopy').click(function () {
			$("#fillArea").val(content);
		});
	},

	sortingTable: function () {
		$("#tableSorter").tablesorter();
	}
}

Crewfire.init();