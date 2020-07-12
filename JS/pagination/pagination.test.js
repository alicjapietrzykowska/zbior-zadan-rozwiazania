const paginateArray = require("./pagination");

function getArrayOfEntries(items) {
    let i;
    const array = [];
    for (i = 0; i < items; i++) {
        array.push(i);
    }
    return array;
}

test("Should return 50 elements", () => {
    const entries = getArrayOfEntries(1000);
    const settings = {
        actualPageIdx: 9, 
        entriesOnPage: 50
    }

    expect(paginateArray(entries, settings).length).toBe(50);
});

test("Should return the expected array of numbers", () => {
    const entries = getArrayOfEntries(1000);
    const settings = {
        actualPageIdx: 9, 
        entriesOnPage: 50
    }

    const expectedFirstElementOfArray = entries[(settings.actualPageIdx - 1) * settings.entriesOnPage];
    const expectedLastElementOfArray = entries[settings.actualPageIdx * settings.entriesOnPage - 1];

    const result = paginateArray(entries, settings);

    expect(result[0]).toBe(expectedFirstElementOfArray);
    expect(result[result.length - 1]).toBe(expectedLastElementOfArray);
});

test("Should throw an error when entries aren't provided", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const entries = null;
    const settings = {
        actualPageIdx: 1, 
        entriesOnPage: 5
    }
    expect(paginateArray(entries, settings)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid array of entries');
});

test("Should throw an error when array of entries is empty", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const entries = [];
    const settings = {
        actualPageIdx: 1, 
        entriesOnPage: 5
    }
    expect(paginateArray(entries, settings)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid array of entries');
});

test("Should throw an error when type of entries is invalid", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const entries = 'random_string';
    const settings = {
        actualPageIdx: 1, 
        entriesOnPage: 5
    }
    expect(paginateArray(entries, settings)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid array of entries');
});

test("Should throw an error when actualPageIdx isn't provided", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const entries = getArrayOfEntries(50);
    const settings = {
        actualPageIdx: null, 
        entriesOnPage: 5
    }
    expect(paginateArray(entries, settings)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid page index');
});

test("Should throw an error when actualPageIdx is 0", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const entries = getArrayOfEntries(50);
    const settings = {
        actualPageIdx: 0, 
        entriesOnPage: 5
    }
    expect(paginateArray(entries, settings)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid page index');
});

test("Should throw an error when actualPageIdx is a negative number", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const entries = getArrayOfEntries(50);
    const settings = {
        actualPageIdx: -1, 
        entriesOnPage: 5
    }
    expect(paginateArray(entries, settings)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid page index');
});

test("Should throw an error when called with an invalid type of actualPageIdx", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const entries = getArrayOfEntries(50);
    const settings = {
        actualPageIdx: 'random_string', 
        entriesOnPage: 5
    }
    expect(paginateArray(entries, settings)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid page index');
});

test("Should throw an error when entriesOnPage isn't provided", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const entries = getArrayOfEntries(50);
    const settings = {
        actualPageIdx: 9, 
        entriesOnPage: null
    }
    expect(paginateArray(entries, settings)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid number of entries');
});

test("Should throw an error when entriesOnPage is 0", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const entries = getArrayOfEntries(50);
    const settings = {
        actualPageIdx: 9, 
        entriesOnPage: 0
    }
    expect(paginateArray(entries, settings)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid number of entries');
});

test("Should throw an error when entriesOnPage is a negative number", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const entries = getArrayOfEntries(50);
    const settings = {
        actualPageIdx: 9, 
        entriesOnPage: -5
    }
    expect(paginateArray(entries, settings)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Invalid number of entries');
});

test("Should return all elements when page index is 1 and number of entries on page is larger than number of elements", () => {
    const entries = getArrayOfEntries(1000);
    const settings = {
        actualPageIdx: 1, 
        entriesOnPage: 2000
    }
    expect(paginateArray(entries, settings)).toStrictEqual(entries);
});

test("Should throw an error when there aren't enough elements to generate a page with the provided index", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const entries = getArrayOfEntries(50);
    const settings = {
        actualPageIdx: 9, 
        entriesOnPage: 50
    }
    expect(paginateArray(entries, settings)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith("The page with this index doesn't exist");
});