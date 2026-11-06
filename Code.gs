/**
 * Privacy-conscious visitor logging backend for Google Apps Script.
 * Bound to a Google Sheet.
 */

// Replace this with your secret token (keep it in sync with tracker.js)
const TOKEN = 'bc6cb64a-e8b6-4651-b71c-4233ae22e4ba';

const SHEET_NAME = 'Visits';
const HEADERS = [
  'timestamp',
  'page',
  'referrer',
  'device',
  'language',
  'screen',
  'theme',
  'country',
  'city'
];
const MAX_FIELD_LENGTH = 200;

function doPost(e) {
  try {
    // Reject requests with missing or mismatched token
    if (!e || !e.parameter || e.parameter.token !== TOKEN) {
      return ContentService.createTextOutput('denied')
        .setMimeType(ContentService.MimeType.TEXT);
    }

    const lock = LockService.getScriptLock();
    // Wait up to 10 seconds for concurrent executions
    lock.waitLock(10000);

    try {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      let sheet = ss.getSheetByName(SHEET_NAME);

      // Create sheet and headers if missing or empty
      if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME);
        sheet.appendRow(HEADERS);
      } else if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADERS);
      }

      const p = e.parameter;

      // Cap at 200 characters and escape formula injection triggers (=, +, -, @)
      const sanitize = function (val) {
        if (val === undefined || val === null) {
          return '';
        }
        let str = String(val).trim().substring(0, MAX_FIELD_LENGTH);
        if (/^[=+\-@]/.test(str)) {
          str = "'" + str;
        }
        return str;
      };

      const row = [
        new Date().toISOString(),
        sanitize(p.page),
        sanitize(p.referrer),
        sanitize(p.device),
        sanitize(p.language),
        sanitize(p.screen),
        sanitize(p.theme),
        sanitize(p.country),
        sanitize(p.city)
      ];

      sheet.appendRow(row);

      return ContentService.createTextOutput('ok')
        .setMimeType(ContentService.MimeType.TEXT);
    } finally {
      lock.releaseLock();
    }
       } catch (err) {
       console.error(err);
       return ContentService.createTextOutput('error')
         .setMimeType(ContentService.MimeType.TEXT);
     }
   }

function doGet(e) {
  return ContentService.createTextOutput('denied')
    .setMimeType(ContentService.MimeType.TEXT);
}

