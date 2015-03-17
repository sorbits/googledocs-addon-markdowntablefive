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
 * MarkdownTableMakerAddOn.gs
 * Designed for Google Drive Spreadsheets. Converts a range of
 *  selected values into a GitHub Markdown table by using
 *  the MarkdownTableMaker object. Adds Sidebar preview.
 *  Version 3 offers a streamlined workflow and better user experience.
 *
 *
 * @license The Unlicense http://unlicense.org/
 * @version 3.1
 * @updated 2015-03-12
 * @author  The Pffy Authors https://github.com/pffy/
 * @link    https://github.com/pffy/googledocs-addon-markdowntablethree
 *
 */
var product = {
  
  "name": "MarkdownTableMaker",
  "version": "3.1",
  
  "license": "This is free, libre and open source software.",
  "licenseUrl": "http://unlicense.org/",
  
  "author": "The Pffy Authors",
  "authorUrl": "https://github.com/pffy",
  
  "sidebarTitle": "MarkdownTableMaker",
  "sidebarFilename": "MarkdownTableMakerSidebar",

  "exportTextFileExtension": ".txt",
  "exportMarkdownFileExtension": ".md",  
  "exportPrefix": "Markdown-",
  
  "convertMenuItem": "Convert range to Markdown table...",
  
  "tagline": "Live long and prosper." 
}

var menuItems = {
  "convert": "Convert range to Markdown table ...",
  "derp": "derp"
}


/**
 * Add-On UI/Menus
 **/



// saves spreadsheet selection as markdown, returns Google Drive URL
function saveAsMarkdown() {
  
  var outfile = product.exportPrefix + '-' 
    + _getSheetName() + '-' 
    + _generateFileId() + product.exportMarkdownFileExtension;
  
  var drv = DriveApp.createFile(outfile, '' + _convertMarkdown());
  return drv.getUrl();
}

// saves spreadsheet selection as text, returns Google Drive URL
// EXPERIMENTAL: might be removed
function saveAsText() {
  
  var outfile = product.exportPrefix + '-' 
    + _getSheetName() + '-' 
    + _generateFileId() + product.exportTextFileExtension;
  
  var drv = DriveApp.createFile(outfile, 
    '' + _convertMarkdown(), MimeType.PLAIN_TEXT);
  return drv.getUrl();
}

// handles convert menu item
function _convertItem() {

  var ui = HtmlService
    .createHtmlOutputFromFile(product.sidebarFilename)
    .setTitle(product.sidebarTitle);

  ui.append('<div class="wrapper"><h2>Copy and Paste (READ-ONLY):</h2>'
    + '<textarea READONLY>' + _convertMarkdown() + '</textarea></div>');

  SpreadsheetApp.getUi()
    .showSidebar(ui);
}

// converts range to markdown, returns markdown
function _convertMarkdown() {
  var range = SpreadsheetApp.getActiveSheet().getActiveRange();
  return '' + new MarkdownTableMaker(range);
}

// returns name of the container spreadsheet
function _getSheetName() {
  return SpreadsheetApp.getActiveSpreadsheet().getName();
}

// returns file id using date and time
function _generateFileId() {
  return Utilities.formatDate(new Date(), "PST", "yyyymmdd-HHmmss");
}

// adds menus to Google Drive Spreadsheets
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createAddonMenu()
      .addItem(menuItems.convert, '_convertItem')
      .addToUi();
}