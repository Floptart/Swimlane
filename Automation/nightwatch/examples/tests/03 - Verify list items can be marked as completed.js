module.exports = {
	'Verify list items can be marked as completed' : function (browser) {
		browser
			//Navigates to the TodoMVC page
			.url('http://todomvc.com/examples/angular2/')

			//Waits until input box is visible
			.waitForElementPresent('input', 1000)

			//Types 'test 1' into the input box
			.setValue('input', 'test 1')

			//Presses the enter key to add to list
			.sendKeys('input', browser.Keys.ENTER)

			//Waits for item to be added to list
			.waitForElementPresent('input.toggle', 1000)

			//Clicks on toggle to mark as completed
			.click('input.toggle')

			//Waits for completed status
			.waitForElementPresent('li.completed', 1000)

			//Ends test and closes browser
			.end();
	}
};