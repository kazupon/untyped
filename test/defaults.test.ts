import { applyDefaults } from '../src'

describe('applyDefaults', () => {
  it('basic', () => {
    const ref = {
      name: 'default',
      empty: {},
      nested: {
        val: 1,
        list: {
          $resolve: val => ['a'].concat(val)
        }
      }
    }
    const input = {
      name: 'custom',
      nested: {
        list: 'b'
      }
    }

    const applied = applyDefaults(ref, input)

    expect(applied).toMatchObject({
      name: 'custom',
      empty: {},
      nested: {
        val: 1,
        list: ['a', 'b']
      }
    })

    expect(applied.empty).toMatchObject({})
  })
})
