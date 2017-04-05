describe('Selenium Test Case', function() {
  it('should execute test case without errors', function() {
    var text, value, bool, source, url, title;
    var TestVars = {};
    browser.get("http://localhost:8000/app/");
    var img1 = element(by.xpath("//inb-body/ui-view/inb-stars[1]/img[5]")).click();
    expect(img1.getAttribute('src')).toContain('yellow');
    element(by.xpath("//inb-body/ui-view/inb-stars[2]/img[5]")).click();
    element(by.xpath("//inb-body/ui-view/inb-stars[4]/img[5]")).click();
    element(by.xpath("//inb-body/ui-view/inb-stars[1]/img[5]")).click();
    element(by.xpath("//inb-body/ui-view/inb-stars[5]/img[5]")).click();

    element(by.linkText("Produits")).click();
    element(by.css("button.ng-binding.ng-scope")).click();
  });
});
