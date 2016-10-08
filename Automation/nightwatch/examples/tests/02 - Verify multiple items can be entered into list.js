module.exports = {
	'Verify multiple items can be added to list' : function (browser) {
		browser
			//Navigates to the TodoMVC page
			.url('http://todomvc.com/examples/angular2/')

			//Waits until input box is visible
			.waitForElementPresent('input', 1000)

			//Types 'test 1' into the input box
			.setValue('input', 'test 1')

			//Presses the enter key to add to list
			.sendKeys('input', browser.Keys.ENTER)

			//Types 'test 2' into the input box
			.setValue('input', 'test 2')

			//Presses the enter key to add to list
			.sendKeys('input', browser.Keys.ENTER)

			//Verifies that 2 line items are present in todo-list class
			.elements('css selector','.todo-list li', function (result) {
    			browser.assert.equal(result.value.length, 2);
			})
			
			//Ends test and closes browser
			.end();

		}
	};
