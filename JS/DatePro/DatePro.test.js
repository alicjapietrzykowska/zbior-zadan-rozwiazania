const DatePro = require("./DatePro");
jest.mock('./DatePro');

beforeEach(() => {
    DatePro.mockClear();
});
  
it('The class constructor should be called', () => {
    const DateProClass = new DatePro();
    expect(DatePro).toHaveBeenCalled();
});