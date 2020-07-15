// Stwórz funkcję paginateArray
const paginateArray = (dataEntries, settings) => {

    if (!settings) {
        const error_msg = 'No settings object';
        console.log(error_msg);
        throw new Error(error_msg);
    }

    if (!settings.hasOwnProperty('actualPageIdx')) {
        const error_msg = "No 'actualPageIdx' property in the settings parameter";
        console.log(error_msg);
        throw new Error(error_msg);
    }

    if (!settings.hasOwnProperty('entriesOnPage')) {
        const error_msg = "No 'entriesOnPage' property in the settings parameter";
        console.log(error_msg);
        throw new Error(error_msg);
    }

    const {actualPageIdx, entriesOnPage} = settings;

    if (!Array.isArray(dataEntries)) {
        const error_msg = 'Invalid array of entries';
        console.log(error_msg);
        throw new Error(error_msg);
    }

    if (!dataEntries.length) {
        const error_msg = "Array of entries shouldn't be empty";
        console.log(error_msg);
        throw new Error(error_msg);
    }

    if (typeof actualPageIdx !== 'number' || actualPageIdx <= 0)  {
        const error_msg = "Invalid page index";
        console.log(error_msg);
        throw new Error(error_msg);
    }

    if (typeof entriesOnPage !== 'number' || entriesOnPage <= 0) {
        const error_msg = 'Invalid number of entries';
        console.log(error_msg);
        throw new Error(error_msg);
    }

    if (dataEntries.length / entriesOnPage < actualPageIdx && actualPageIdx !== 1) {
        const error_msg = "The page with this index doesn't exist";
        console.log(error_msg);
        throw new Error(error_msg);
    }

    const entriesOnSelectedPage = dataEntries.slice((actualPageIdx - 1) * entriesOnPage, actualPageIdx * entriesOnPage);

    return entriesOnSelectedPage;
}

module.exports = paginateArray;


// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx=9, entriesOnPage=50 }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony
