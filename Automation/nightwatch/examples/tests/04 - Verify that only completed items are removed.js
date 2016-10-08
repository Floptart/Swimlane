module.exports = {
	'Verify that only completed items are removed' : function (browser) {
		browser
			//Navigates to the TodoMVC page
			.url('http://todomvc.com/examples/angular2/')

			//Waits until input box is visible
			.waitForElementPresent('input', 1000)

			//Loops through entering text and pressing enter 5 times
			.perform(function() {
				for (var i = 0; i < 5; i += 1) {
					browser.setValue('input', 'test ' + i);
					browser.sendKeys('input', browser.Keys.ENTER);
				}})

			//Verifies that 5 list items are present in todo-list class
			.elements('css selector','.todo-list li', function (result) {
    			browser.assert.equal(result.value.length, 5);
			})

			//Clicks the second and fourth list items
			.click('.todo-list li:nth-of-type(2) input.toggle')
			.click('.todo-list li:nth-of-type(4) input.toggle')

			//Checks for and clicks the clear completed button
			.waitForElementPresent('button.clear-completed', 1000)
			.click('button.clear-completed')

			//Verifies that 3 list items are present after clearing completed
			.elements('css selector','.todo-list li', function (result) {
    			browser.assert.equal(result.value.length, 3);
			})
			
			//Ends test and closes browser
			.end();

		}
	};
