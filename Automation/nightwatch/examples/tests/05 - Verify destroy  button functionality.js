module.exports = {
	'Verify destroy button functionality' : function (browser) {
		browser
			//Navigates to the TodoMVC page
			.url('http://todomvc.com/examples/angular2/')

			//Waits until input box is visible
			.waitForElementPresent('input', 1000)

			//Types 'test 1' into the input box
			.setValue('input', 'test 1')

			//Presses the enter key to add to list
			.sendKeys('input', browser.Keys.ENTER)

			.moveTo('.view > label:nth-child(2)', 100, 100, function () {
            	browser.doubleClick();
        	})


			//Ends test and closes browser
			//.end();
		}
	};
