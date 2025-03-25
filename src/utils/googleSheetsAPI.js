const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet('YOUR_SPREADSHEET_ID');

async function accessSpreadsheet() {
    await doc.useServiceAccountAuth({
        client_email: 'YOUR_SERVICE_ACCOUNT_EMAIL',
        private_key: 'YOUR_PRIVATE_KEY',
    });
    await doc.loadInfo();
}

async function addGuest(guestData) {
    await accessSpreadsheet();
    const sheet = doc.sheetsByIndex[0]; // Assuming you want to write to the first sheet
    await sheet.addRow(guestData);
}

module.exports = {
    addGuest,
};