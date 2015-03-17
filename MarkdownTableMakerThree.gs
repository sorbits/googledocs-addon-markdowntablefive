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
 * MarkdownTableMakerThree.gs
 * Designed for Google Drive Spreadsheets. Converts Spreadsheet Range of
 *  selected values into a GitHub Markdown table described here:
 *    https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables
 *    https://guides.github.com/features/mastering-markdown/
 *
 * @license The Unlicense http://unlicense.org/
 * @version 3.1
 * @updated 2015-03-16
 * @author  The Pffy Authors https://github.com/pffy/
 * @link    https://github.com/pffy/googlescript-markdowntablethree
 *
 */
var MarkdownTableMaker = function (range) {

  // parts
  var _borderPipe = '|',
      _tableSpacer = '-------',
      _CRLF = '\r\n',
      _rows = 0,
      _cols = 0,
      _emptyRange = true;

  // templates
  var _headerRow = ' ' + _tableSpacer + ' ' + _borderPipe;
  var _newRowPrefix = _CRLF + _borderPipe + ' ';
  var _emptyRangeMarkdown = _newRowPrefix + ' Empty Range |'
        + _newRowPrefix + _headerRow;

  // input-output
  var _markdown = '',
      _range = {};


  // set Range, then convert
  _range = (typeof range == 'object') ? _range = range : {};
  range = null;

  _convert();

  // converts Range object into Markdown string
  function _convert() {

    // if empty, do not convert
    if(Object.keys(_range).length < 1) {
      _markdown = _emptyRangeMarkdown;
      return false;
    }

    var output = '';
    var textFormat = '';

    // NOTE: zero-based arrays
    var fontStyles = [];
    var fontWeights = [];
    var fontLines = [];

    _emptyRange = false;

    // rows and columns
    _rows = _range.getNumRows();
    _cols = _range.getNumColumns();

    // font strikethrough, italic, and bold
    fontStyles = _range.getFontStyles();
    fontWeights = _range.getFontWeights();
    fontLines = _range.getFontLines();

    for (var i = 1; i <= _rows; i++) {

      output += _newRowPrefix;

      // cell value Markdown
      for (var j = 1; j <= _cols; j++) {

        // strikethrough
        if(fontLines) {
          if(fontLines[i-1][j-1] == 'line-through') {
            textFormat += '~~';
          }
        }

        // italic
        if(fontStyles) {
          if(fontStyles[i-1][j-1] == 'italic') {
            textFormat += '*';
          }
        }

        // bold
        if(fontWeights) {
          if(fontWeights[i-1][j-1] == 'bold') {
            textFormat += '**';
          }
        }

        output += ' ' + textFormat + _range.getCell(i,j).getValue()
          + textFormat + ' ' + _borderPipe;

        // reset formatting each time
        textFormat = '';
      }

      // table header Markdown
      if(i < 2) {
        output += _newRowPrefix;
        for (var k = 1; k <= _cols; k++) {
          output += _headerRow;
        }
      }
    }

    _markdown = output;
  }

  return {

    /**
     * Returns the string representation of this object.
     * @return string text
     */
    toString: function() {
      return this.getMarkdown();
    },

    /**
     * Returns markdown table text string.
     * @return string text
     */
    getMarkdown: function() {
      return _markdown;
    },

    /**
     * Returns spreadsheet Range of values.
     * @return Range
     */
    getRange: function() {
      return _range;
    },

    /**
     * Sets spreadsheet Range of values.
     * @return this object
     */
    setRange: function(range) {
      _range = (typeof range === 'object') ? _range = range : {};
      _convert();
      return this;
    },

    /**
     * Returns true if spreadsheet range is empty; false, otherwise.
     * @return boolean value
     */
    isRangeEmpty: function() {
      return _emptyRange;
    }
  };
};