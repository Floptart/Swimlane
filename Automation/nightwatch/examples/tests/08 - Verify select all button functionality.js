module.exports = {
	'Verify toggle all button functionality' : function (browser) {
		browser
			//Navigates to the TodoMVC page
			.url('http://todomvc.com/examples/angular2/')

			//Waits until input box is visible
			.waitForElementPresent('input', 1000)
			
			//Loops through entering text and pressing enter 5 times
			.perform(function() {
				for (var i = 0; i < 5; i += 1) {
					browser.setValue('input', i)
					browser.sendKeys('input', browser.Keys.ENTER);
				}})
			
			//Checks to make sure all 5 items are present in list
			.assert.containsText('span.todo-count strong', 5)
			
			//Clicks toggle all button
			.click('input.toggle-all')

			/*Checks that toggle all button has been pressed
			  by checking to see if todo-all is set to 0*/
			.assert.containsText('span.todo-count strong', 0)
			
			//Ends test and closes browser
			.end();
		}
	};
