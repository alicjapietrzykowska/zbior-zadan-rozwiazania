// Stwórz funkcję paginateArray
const paginateArray = (dataEntries, settings) => {
    const {actualPageIdx, entriesOnPage} = settings;

    if (typeof actualPageIdx !== 'number' || actualPageIdx <= 0)  {
        console.log('Invalid page index')
        return;
    }

    if (dataEntries.length / entriesOnPage < actualPageIdx && actualPageIdx !== 1) {
        console.log("The page with this index doesn't exist");
        return;
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
