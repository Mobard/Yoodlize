var seeAllButtonClass = "(//a[@class='sc-esjQYD cZSeUZ'])";
//"//A[@class='sc-esjQYD cZSeUZ']"
module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com/')
        .waitForElementPresent('body')
    },
    after: browser => {
        browser.end()
    },
    'Drega Man': browser => {
        browser
            .useXpath()
            .click(seeAllButtonClass + '[1]')
            .waitForElementPresent('//*[contains(text(),"Recreational Vehicles")]')
            //.verify('//*[contains(text(),"Recreational Vehicles")]')
            .url('https://alpha.yoodlize.com/')
    },
}

