/**
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <http://unlicense.org/>
 */

/**
 * name     : MarkdownTableMakerAddOn.gs
 * version  : 6
 * updated  : 2015-09-02
 * license  : http://unlicense.org/ The Unlicense
 * git      : https://github.com/pffy/googledocs-addon-markdowntablefive
 *
 */
var product = {

  "name": "MarkdownTableMaker",
  "version": "6",

  "license": "This is free, libre and open source software.",
  "licenseUrl": "http://unlicense.org/",

  "author": "The Pffy Authors",
  "authorUrl": "https://github.com/pffy",

  "sidebarTitle": "MarkdownTableMaker",
  "sidebarFilename": "MarkdownTableMakerSidebar",

  "exportTextFileExtension": ".txt",
  "exportMarkdownFileExtension": ".md",
  "exportPrefix": "Markdown-",

  "convertMenuItem": "Convert range to table...",
  "loading": "Loading...",

  "tagline": "Live long and prosper."
}

var menuItems = {
  "convertSheet": "Convert entire sheet to table ...",
  "convertRange": "Convert range to table ...",
  "derp": "derp"
}


/**
 * Add-On UI/Menus
 **/

// updates from Range
function updateMarkdownFromRange() {
 convertRange_();
}

// updates from Sheet
function updateMarkdownFromSheet() {
  convertSheet_();
}

// saves Range as markdown, returns Google Drive URL
function saveAsMarkdownFromRange() {

  var outfile = product.exportPrefix + '-'
    + getSheetName_() + '-'
    + generateFileId_() + product.exportMarkdownFileExtension;

  var drv = DriveApp.createFile(outfile,
    '' + convertMarkdownFromRange_(), MimeType.PLAIN_TEXT);

  return drv.getUrl();
}

// saves Sheet as markdown, returns Google Drive URL
function saveAsMarkdownFromSheet() {

  var outfile = product.exportPrefix + '-'
    + getSheetName_() + '-'
    + generateFileId_() + product.exportMarkdownFileExtension;

  var drv = DriveApp.createFile(outfile,
    '' + convertMarkdownFromSheet_(), MimeType.PLAIN_TEXT);

  return drv.getUrl();
}

// converts Range, displays sidebar
function convertRange_() {

  var ui = HtmlService
    .createHtmlOutputFromFile(product.sidebarFilename)
    .setTitle(product.sidebarTitle);

  ui.append(''
    + '<div class="wrapper">'
    + 'Range Only<br/>'
    + '  <textarea READONLY>'
            + convertMarkdownFromRange_().trim() + '</textarea><br/>'
    + '  <button class="action" onClick="saveMarkdownFromRange();">Save As Markdown</button><br/>'
    + '  <button onClick="updateFromRange();">Update</button>'
    + '  <div id="msg">&nbsp;</div>'
    + '</div><!--div.wrapper->'
  );

  SpreadsheetApp.getUi()
    .showSidebar(ui);
}

// converts entire sheet, displays sidebar
function convertSheet_() {

  var ui = HtmlService
    .createHtmlOutputFromFile(product.sidebarFilename)
    .setTitle(product.sidebarTitle);

  ui.append(''
    + '<div class="wrapper">'
    + 'Entire Sheet<br/>'
    + '  <textarea READONLY>'
            + convertMarkdownFromSheet_().trim() + '</textarea><br/>'
    + '  <button class="action" onClick="saveMarkdownFromSheet();">Save As Markdown</button><br/>'
    + '  <button onClick="updateFromSheet();">Update</button>'
    + '  <div id="msg">&nbsp;</div>'
    + '</div><!--div.wrapper->'
  );

  SpreadsheetApp.getUi()
    .showSidebar(ui);
}

// converts Markdown from the active Range
function convertMarkdownFromRange_() {
  Logger.log('range');
  var range = SpreadsheetApp.getActiveSheet().getActiveRange();
  var mtm = MarkdownTableMaker();
  mtm.setRange(range);
  return '' + mtm;
}

// converts Markdown from entire Sheet
function convertMarkdownFromSheet_() {
  var mtm = MarkdownTableMaker();
  mtm.setSheetAsRange();
  return '' + mtm;
}

// returns name of the container spreadsheet
function getSheetName_() {
  return SpreadsheetApp.getActiveSpreadsheet().getName();
}

// returns file id based on date and time
function generateFileId_() {
  return Utilities.formatDate(new Date(), "PST", "yyyymmdd-HHmmss");
}

// adds menus to Google Drive Spreadsheets
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createAddonMenu()
      .addItem(menuItems.convertRange, 'convertRange_')
      .addItem(menuItems.convertSheet, 'convertSheet_')
      .addToUi();
}

// automatic start after install
function onInstall() {
  onOpen();
}