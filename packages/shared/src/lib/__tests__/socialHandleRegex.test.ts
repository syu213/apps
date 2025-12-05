import { describe, it, expect } from 'vitest';
import { socialHandleRegex } from '../../graphql/users';

describe('socialHandleRegex', () => {
  const validHandles = [
    '@usuario',
    '@dev_áccent',
    '@çharacteres',
    '@über_cool',
    '@naïve_dev',
    '@mañana',
    '@jóse123',
    '@façade_test',
    'josé-dev',   // no @
    'álvaro_santos'
  ];

  const invalidHandles = [
    '@',                  // nothing after @
    '@ space',            // space inside
    '@!!invalid',         // symbols
    '',                   // empty
    'too-long-username-that-exceeds-39-characters-123456'
  ];

  validHandles.forEach((handle) => {
    it(`matches valid accented handle: ${handle}`, () => {
      expect(socialHandleRegex.test(handle)).toBe(true);
    });
  });

  invalidHandles.forEach((handle) => {
    it(`rejects invalid handle: ${handle}`, () => {
      expect(socialHandleRegex.test(handle)).toBe(false);
    });
  });
});


