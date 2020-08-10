import { priceFormatter } from '..';

describe('priceFormatter()', () => {
  it('should return a EURO price string with two decimals place', () => {
    expect(priceFormatter('76.0', 'en-GB', 'EUR')).toBe('76.00 €');
    expect(priceFormatter('75', 'en-US', 'EUR')).toBe('75.00 €');
    expect(priceFormatter('75.889', 'en-US', 'EUR')).toBe('75.89 €');
    expect(priceFormatter('666.6668', 'de-DE', 'EUR')).toBe('666.67 €');
    expect(priceFormatter('666.4443', 'de-AT', 'EUR')).toBe('666.44 €');
  });

  it('should return a USD price string with two decimals place', () => {
    expect(priceFormatter('76.0', 'en-GB', 'USD')).toBe('76.00 $');
    expect(priceFormatter('75', 'en-AU', 'USD')).toBe('75.00 $');
    expect(priceFormatter('75.889', 'en-NZ', 'USD')).toBe('75.89 $');
    expect(priceFormatter('666.6668', 'de-DE', 'USD')).toBe('666.67 $');
  });

  it('should return a JPY price string with two decimals place', () => {
    expect(priceFormatter('76.0', 'ja', 'JPY')).toBe('76 ¥');
    expect(priceFormatter('75', 'ja', 'JPY')).toBe('75 ¥');
    expect(priceFormatter('75.889', 'ja', 'JPY')).toBe('76 ¥');
    expect(priceFormatter('666.6668', 'ja', 'JPY')).toBe('667 ¥');
  });
});
