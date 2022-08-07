const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se retorna o próprio objeto quando não passado argumento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa se o zoológico está aberto as 14h de domingo', () => {
    expect(getOpeningHours('Sunday', '02:00-PM')).toBe('The zoo is open');
  });
  it('Testa se as horas passadas no segundo argumento estão entre 0 e 12', () => {
    expect(() => {
      getOpeningHours('Monday', '14:00-PM');
    }).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('Testa se os minutos no segundo argumento estão entre 0 e 60', () => {
    expect(() => {
      getOpeningHours('Monday', '10:60-PM');
    }).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('Testa se são passados números nas horas', () => {
    expect(() => {
      getOpeningHours('Monday', 'xx:00-PM');
    }).toThrow(new Error('The hour should represent a number'));
  });
  it('Testa se são passados números nos minutos', () => {
    expect(() => {
      getOpeningHours('Monday', '10:xx-PM');
    }).toThrow(new Error('The minutes should represent a number'));
  });
  it('Testa se as abreviações são passadas em AM ou PM', () => {
    expect(() => {
      getOpeningHours('Monday', '10:00-xx');
    }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Testa se o dia da semana passado como argumento é valido', () => {
    expect(() => {
      getOpeningHours('Mondayy', '10:00-AM');
    }).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('Testa se retornamos a consulta de Wednesday', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa se retornamos corretamente a consulta de Tuesday', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testa se retornamos corretamente a consulta de Monday', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
});
