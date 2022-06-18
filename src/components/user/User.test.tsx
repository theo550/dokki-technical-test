import customiseDate from '../../functions/dateFormat'

describe('Testing formating date function', () => {
  it('should return the date in european format', () => {
    expect(customiseDate('2022-01-01')).toEqual('01-01-2022')
  })
  it('should return the date in european format', () => {
    expect(customiseDate('2000-11-23')).toEqual('23-11-2000')
  })
  it('should return the date in european format', () => {
    expect(customiseDate('1999-12-31')).toEqual('31-12-1999')
  })
  it('should return an error because of the format of the date', () => {
    expect(customiseDate('23-11-2003')).toEqual('Date format does not fit, it should be yyyy/mm/dd')
  })
  it('should return an error because of the format of the date', () => {
    expect(customiseDate('20031123')).toEqual('Date format does not fit, it should be yyyy/mm/dd')
  })
  it('should return an error because of the format of the date', () => {
    expect(customiseDate('2345-12343214')).toEqual('Date format does not fit, it should be yyyy/mm/dd')
  })
  it('should return an error because of the format of the date', () => {
    expect(customiseDate('2000-14-12')).toEqual('Date format does not fit, it should be yyyy/mm/dd')
  })
  it('should return an error because of the format of the date', () => {
    expect(customiseDate('1999-12-32')).toEqual('Date format does not fit, it should be yyyy/mm/dd')
  })
})
