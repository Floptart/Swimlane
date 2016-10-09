module.exports = {
	'Verify completed status persist through refresh' : function (browser) {
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
			
			//Checks to make 5 items were added to list
			.assert.containsText('span.todo-count strong', 5)
			
			//Clicks the second and fourth list items
			.click('.todo-list li:nth-of-type(2) input.toggle')
			.click('.todo-list li:nth-of-type(4) input.toggle')
			
			//Checks to make sure items were properly checked
			.assert.containsText('span.todo-count strong', 3)
			
			//Refreshes browser page
			.refresh()
			
			//Waits for page to finish reloading
			.waitForElementPresent('span.todo-count strong', 1000)
			
			//Checks to make sure completed status persisted through refresh
			.assert.containsText('span.todo-count strong', 3)
			
			//Ends test and closes browser
			.end();

		}
	};
