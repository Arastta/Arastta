$(document).ready(function() {
	tinymce.PluginManager.add('readmore', function(editor, url) {
		editor.addButton('readmore', {
			text: '',
			tooltip: "Read More",
			icon: 'readmore',
			onclick: function() {
				var html  = '<p></p>';
					html += '<img src="view/image/read-more.png" alt="Read More" title="Read More" />';
					html += '<p></p>';

				editor.insertContent(html)
			}
		});

		editor.addMenuItem('readmore', {
			text: 'Read More',
			icon: 'readmore',
			context: 'tools',
			onclick: function() {
				var html  = '<p></p>';
					html += '<img src="view/image/read-more.png" alt="Read More" title="Read More" />';
					html += '<p></p>';

				editor.insertContent(html)
			}
		});
	});
});