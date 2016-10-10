module.exports = {
	'Verify edit functionality' : function (browser) {
		browser
			//Navigates to the TodoMVC page
			.url('http://todomvc.com/examples/angular2/')

			//Waits until input box is visible
			.waitForElementPresent('input', 1000)

			//Types 'test 1' into the input box
			.setValue('input', '1')

			//Presses the enter key to add to list
			.sendKeys('input', browser.Keys.ENTER)
			
			//Checks that initial entry is "test 1"
			.assert.containsText('label', '1')

			//Waits for item to be added to list
			.waitForElementPresent('input.toggle', 1000)
			
			//Moves to entry and double clicks to edit
			.moveToElement('label', 0, 0).doubleClick()
			
			//Changes intial entry value
			.setValue('input.edit', ' edited')
			
			//Presses enter key to finalize edit
			.sendKeys('input.edit', browser.Keys.ENTER)
			
			//Checks to make sure text has been edited
			.assert.containsText('label', '1 edited')
			
			//Ends test and closes browser
			.end();
		}
	};
