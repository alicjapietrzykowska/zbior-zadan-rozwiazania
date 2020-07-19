const DatePro = require("./DatePro");
jest.mock('./DatePro');

beforeEach(() => {
    DatePro.mockClear();
});
  
test('The class DatePro should be called', () => {
    const DateProClass = new DatePro();
    expect(DatePro).toHaveBeenCalled();
});

test("Should call format function", () => {
    const instance = new DatePro();
    const formatSpy = jest.spyOn(instance, 'format');
    instance.format();
    expect(formatSpy).toHaveBeenCalled();
});