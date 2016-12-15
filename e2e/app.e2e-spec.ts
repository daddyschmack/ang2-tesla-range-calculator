import { Ang2TeslaRangeCalculatorPage } from './app.po';

describe('ang2-tesla-range-calculator App', function() {
  let page: Ang2TeslaRangeCalculatorPage;

  beforeEach(() => {
    page = new Ang2TeslaRangeCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
