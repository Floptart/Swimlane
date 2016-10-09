module.exports = {
	'Verify destroy button functionality' : function (browser) {
		browser
			//Navigates to the TodoMVC page
			.url('http://todomvc.com/examples/angular2/')

			//Waits until input box is visible
			.waitForElementPresent('input', 1000)

			//Types 'test 1' into the input box
			.setValue('input', 'test 1')
			.pause('100')

			//Presses the enter key to add to list
			.sendKeys('input', browser.Keys.ENTER)

			//Mouses over toggle to reveal hidden button
			.moveToElement('input.toggle', 0, 0, function () {
				browser.waitForElementPresent('button.destroy', 1000)
				//Clicks destroy button
            	browser.click('button.destroy');
        	})
			
			//Verifies button was pressed and is no longer present
			.waitForElementNotPresent('button.destroy', 1000)

			//Ends test and closes browser
			.end();
		}
	};
