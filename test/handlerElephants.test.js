const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se recebe o número inteiro 4 quando dado o argumento count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Teste se retorna undefined quando invocada a função sem parâmetro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Testa se retorna mensagem de erro quando passado parâmetro que não seja string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se Jefferson é retornado quando passado names como parâmetro', () => {
    const test = handlerElephants('names');
    expect(test.includes('Jefferson')).toBe(true);
  });
  it('Testa se recebe perto de 10.5 quando passado avarageAge como parâmetro', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testa se o default da função é null', () => {
    expect(handlerElephants('')).toBe(null);
  });
  it('aiusd', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
});
