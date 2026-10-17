const SPREADSHEET_ID = '1EEYpTndZCIlHCw1nr3ChHMnyuxyy9IdG1C-HjEWv_KI';
const SHEET_NAME = 'Enquiries';
const SECRET = 'INNOVEL_SHEETS_2026_CHANGE_ME';

function doGet() {
  return json_({ ok: true, service: 'INNOVEL enquiry sheet' });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json_({ ok: false, message: 'Missing request body.' });
    }

    const body = JSON.parse(e.postData.contents);
    if (body.secret !== SECRET) {
      return json_({ ok: false, message: 'Unauthorized.' });
    }

    const sheet = getSheet_();
    sheet.appendRow([
      new Date(),
      body.name || '',
      body.phone || '',
      body.email || '',
      body.course || '',
      body.description || ''
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, message: String(error) });
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Submitted At',
      'Name',
      'Phone',
      'Email',
      'Interested Course',
      'Message'
    ]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function json_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
