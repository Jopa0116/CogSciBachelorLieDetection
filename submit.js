const URL = 'https://script.google.com/macros/s/AKfycbyoOUDb98nBahxxZkKhXuw0wrqqx44j6IgQUXxnDMTL3GFwTVQ/exec'

/**
 * Stores data in the spreadsheet that is specified in the URL above.
 * @param {object} data JSON object whose keys correspond to column headers in the spreadsheet
 * 
 * Example function call:
 * ``submit({ age: 42, gender: 'male', education: 'bachelor' })``
 * 
 */
function submit(data) {
    //const url = `${URL}?${new URLSearchParams(data).toString()}`
    var toSend = new URLSearchParams(data).toString()
    console.log(URL)
    fetch(URL,
    { method: 'post', 
    mode: 'no-cors', 
    headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
    body: toSend
    })
    .then( result => console.log(result) )
}