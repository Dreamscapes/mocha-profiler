import { describe, it } from 'mocha'
import * as expect from 'expect'
import * as pkg from '.'

describe('mocha-profiler', () => {
  it('exports a root mocha hook', () => {
    expect(typeof pkg).toBe('object')
    expect(pkg).toHaveProperty('mochaHooks')
    expect(pkg.mochaHooks).toEqual(expect.objectContaining({
      beforeAll: expect.any(Function),
      afterAll: expect.any(Function),
    }))
  })
})
