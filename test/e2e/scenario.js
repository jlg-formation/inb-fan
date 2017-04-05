describe('Selenium Test Case', function() {
	beforeEach(function() {
		browser.get("http://localhost:8000/app/");
	});
	it('should execute test case without errors', function() {

		var img1 = element(by.xpath("//inb-body/ui-view/inb-stars[1]/img[5]")).click();
		expect(img1.getAttribute('src')).toContain('yellow');
		element(by.xpath("//inb-body/ui-view/inb-stars[2]/img[4]")).click();
		expect(element(by.xpath("//inb-body/ui-view/inb-stars[2]/img[5]")).getAttribute('src')).toContain('white');
		var img3 = element(by.xpath("//inb-body/ui-view/inb-stars[4]/img[5]")).click();
		expect(img3.getAttribute('src')).toContain('yellow');
		var img4 = element(by.xpath("//inb-body/ui-view/inb-stars[1]/img[5]")).click();
		expect(img4.getAttribute('src')).toContain('yellow');
		var img5 = element(by.xpath("//inb-body/ui-view/inb-stars[5]/img[5]")).click();
		expect(img5.getAttribute('src')).toContain('yellow');


	});

	it('test 2', function() {
		element(by.linkText("Produits")).click();
		expect(browser.getCurrentUrl())
			.toBe('http://localhost:8000/app/product');


	});

	it('test 3', function() {
		element(by.linkText("Produits")).click();
		element(by.css("button.ng-binding.ng-scope")).click();
		var div = element(by.xpath("//inb-body/ui-view/inb-log/div[7]"));
		expect(div.getText()).toContain('finished');
	});

});
