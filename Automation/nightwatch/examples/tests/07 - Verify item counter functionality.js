module.exports = {
	'Verify item counter functionality' : function (browser) {
		browser
			//Navigates to the TodoMVC page
			.url('http://todomvc.com/examples/angular2/')

			//Waits until input box is visible
			.waitForElementPresent('input', 1000)

			//Loops through entering text and pressing enter 5 times
			.perform(function() {
				for (var i = 0; i < 5; i += 1) {
					browser.setValue('input', 'test ' + i)
					browser.sendKeys('input', browser.Keys.ENTER);
					//Checks that "item left" count == entry count
					browser.assert.containsText('span.todo-count strong', i + 1);
				}})
	
			//Ends test and closes browser
			.end();
		}
	};
