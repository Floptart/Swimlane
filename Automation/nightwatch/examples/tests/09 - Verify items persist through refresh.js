module.exports = {
	'Verify items persist through refresh' : function (browser) {
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
				}})

			//Verifies that 5 line items are present in todo-list class
			.elements('css selector','.todo-list li', function (result) {
    			browser.assert.equal(result.value.length, 5);
			})
			
			//Refreshes browser page
			.refresh()
			
			//Waits for page to finish reloading
			.waitForElementPresent('body', 1000)
			
			//Verifies that 5 line items persisted through refresh
			.elements('css selector','.todo-list li', function (result) {
    			browser.assert.equal(result.value.length, 5);
			})
			
			//Ends test and closes browser
			.end();

		}
	};
