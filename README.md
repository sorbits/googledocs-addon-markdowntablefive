# MarkdownTableMaker Google Sheets Add-On

[![chromewebstore_badgewborder_v2_340x96][storeicon]][storepage]

### ABOUT

  + MarkdownTableMaker [Google Spreadsheets][goog_sheets] Add-On.
  + Converts Google Sheets (Google Docs Spreadsheets) selection into a Markdown table.
  + Used on: Markdown tables on GitHub, StackEdit, enterprise Markdown wikis, and [more](#compatibility)...

![markdown table maker][splash]

  + Wait... What is [Markdown][wiki_markdown]?
  + Save table to Google Drive with the `.md` file extension.
  + Edit the Markdown file with compatible third-party Drive apps (e.g., [StackEdit][cws_stackedit]).
  + Uses the [MarkdownTableMaker][gh_markdowntablefive] object.
  + Written in Google Apps Script.
  + You can also [render Markdown][gh_render] elsewhere with the GitHub API.


## DETAILS
  + [FEATURES](#features)
  + [INSTALL](#install)
    + [CHROME WEB STORE INSTALL](#chrome-web-store-install)
    + [MANUAL INSTALL](#manual-install)
  + [USER GUIDE](#user-guide)
  + [COMPATIBILITY](#compatibility)
  + [PERMISSIONS](#permissions)
  + [LICENSE](#license)
  + [FEEDBACK](#feedback)


## FEATURES

  + Detects bold, italic and strikethrough font styles. Converts them to Markdown.
  + Detects multi-line cells. Converts them to [Markdown Line Breaks][gh_linebreaks].
  + Detects HYPERLINK formulas with URLs and Titles. Converts to Markdown links: `[title](url)`
  + Detects table column alignment for first row of a selected range. Applied in Markdown.
  + Detects monospace type (Courier New) and converts text to `inline syntax`, with back-ticks.
  + Auto-crops ranges to row and column boundaries with content in cells.
  + [Learn more][gh_gettingstarted].

## INSTALL

### CHROME WEB STORE INSTALL

  + [Install MarkdownTableMaker][storepage] from Google Chrome Web Store.
  + **Recommended.**
    + Apps and add-ons are actively [monitored and curated by Google][goog_monitor].
    + Better add-on management (install, removal, updates).

[![chromewebstore_badgewborder_v2_340x96][storeicon]][storepage]

### MANUAL INSTALL

> **NOTE:** Supported open beta program has concluded. Please use Google Chrome Web Store.


## USER GUIDE

  + Learn more about [MarkdownTableMaker features][gh_gettingstarted] in detail.

## COMPATIBILITY

Your Markdown table can be copied and pasted into these GitHub-Flavored Markdown (GFM) editors:

|  **GitHub Flavored <br/>Markdown Editors** | **Supports<br/>Multi-line cells** | **Supports<br/>Alignment** |
|  ------ | :------: | :------: |
|  https://github.com | YES | YES |
|  [Atom][gh_atom] by GitHub for Mac | YES | YES |
|  [StackEdit][cws_stackedit] for Chrome<br/>https://stackedit.io/editor | YES | YES |
|  [Minimalist Markdown Editor][cws_minimed] for Chrome | YES | YES |
|  [Mado][cws_mado] for Chrome | YES | YES |
|  https://jbt.github.io/markdown-editor/ | YES | YES |
|  http://mdp.tylingsoft.com/ | YES | YES |
|  http://epiceditor.com/ | YES | NO |
|  http://markable.in/editor/ | YES | NO |
|  http://dillinger.io/ | NO | YES |


## PERMISSIONS
  + Needs access to Google Docs, Google Drive.
  + When you first run the Add-On, Google will request authorization for the app.
  + If authorization is given,
  you can always [revoke it here][goog_monitor] when
  no longer needed.
  + You can see why distributing [free software][fsf]
   is so important to your privacy.


## LICENSE

```
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org>

```

## FEEDBACK

+ [Feedback][hellopage] is greatly appreciated. Please do not include personal contact info in your feedback. Thank you.

[![contact support][helloicon]][hellopage]

[gh_gfm]: https://help.github.com/articles/github-flavored-markdown/
[gh_atom]: https://atom.io/
[cws_minimed]: https://chrome.google.com/webstore/detail/minimalist-markdown-edito/pghodfjepegmciihfhdipmimghiakcjf
[cws_stackedit]: https://chrome.google.com/webstore/detail/stackedit/iiooodelglhkcpgbajoejffhijaclcdg
[cws_mado]: https://chrome.google.com/webstore/detail/mado/gmmlaihnodfojphcmjeemhaeajaldcdj
[hellopage]: https://goo.gl/0um8uY
[helloicon]:https://raw.githubusercontent.com/pffy/qr/master/png/qrcode-pffy-sayhello.png
[gh_gettingstarted]: https://github.com/pffy/googledocs-addon-markdowntablefive/issues/9
[gh_render]: https://developer.github.com/v3/markdown/
[splash]: https://cloud.githubusercontent.com/assets/7258373/9272973/65887e38-423c-11e5-93be-38abd6e1556d.png
[goog_sheets]: http://www.google.com/sheets/about/
[wiki_markdown]: http://en.wikipedia.org/wiki/Markdown
[gh_markdowntablefive]: https://github.com/pffy/googlescript-markdowntablefive
[fsf]: https://www.gnu.org/philosophy/free-sw.html
[goog_permissions]: https://security.google.com/settings/security/permissions
[goog_monitor]: https://support.google.com/chrome_webstore/answer/1047776?hl=en
[storepage]: https://chrome.google.com/webstore/detail/markdowntablemaker/cofkbgfmijanlcdooemafafokhhaeold
[storeicon]: https://cloud.githubusercontent.com/assets/7258373/6788162/ee497942-d154-11e4-934d-ef386061181d.png
[cws_stackedit]: https://chrome.google.com/webstore/detail/stackedit/iiooodelglhkcpgbajoejffhijaclcdg
[gh_linebreaks]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#line-breaks
