module.exports = {
	'Verify item can be added to list' : function (browser) {
		browser
			//Navigates to the TodoMVC page
			.url('http://todomvc.com/examples/angular2/')

			//Waits until input box is visible
			.waitForElementPresent('input', 1000)

			//Types 'test 1' into the input box
			.setValue('input', '1')

			//Presses the enter key to add to list
			.sendKeys('input', browser.Keys.ENTER)

			//Waits for item to be added to list
			.waitForElementPresent('input.toggle', 1000)

			//Ends test and closes browser
			.end();
		}
	};
