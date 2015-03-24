# googledocs-addon-markdowntablethree

![pffy-googledocs-addon-wikitableworks-2](https://cloud.githubusercontent.com/assets/7258373/6681435/cd42f8b2-cc23-11e4-9c83-877550fb1e9e.png)

<<<<<<< HEAD
## ABOUT
=======
[![pffy-googledocs-addon-markdownthree-2](https://cloud.githubusercontent.com/assets/7258373/6681435/cd42f8b2-cc23-11e4-9c83-877550fb1e9e.png)](https://github.com/pffy/googledocs-addon-markdowntablethree/issues/1)


[![pffy-googledocs-addon-markdownthree-2](https://cloud.githubusercontent.com/assets/7258373/6681435/cd42f8b2-cc23-11e4-9c83-877550fb1e9e.png)](https://github.com/pffy/googledocs-addon-markdowntablethree/issues/1)


## GETTING STARTED
>>>>>>> origin/master

  + MarkdownTableMaker.
  + [Google Spreadsheets](http://www.google.com/sheets/about/) Add-On.
  + Converts Google Sheets (Google Docs Spreadsheets) selection into a Markdown table.
  + Use Markdown tables on GitHub, reddit, StackExchange, etc.
  + Wait... What is [Markdown](http://en.wikipedia.org/wiki/Markdown)?
  + Save table to Google Drive with the `.md` file extension.
  + Edit the Markdown file with compatible third-party Drive apps (e.g., StackEdit).
  + Uses the [MarkdownTableMaker](https://github.com/pffy/googlescript-markdowntablethree/) object.
  + Written in Google Apps Script.


## DETAILS
  + [INSTALL](#install)
    + [CHROME WEB STORE INSTALL](#chrome-web-store-install)
    + [MANUAL INSTALL](#manual-install)
  + [PERMISSIONS](#permissions)
  + [REFERENCE](#reference)
  + [LICENSE](#license)


## INSTALL

### CHROME WEB STORE INSTALL

  + [Install MarkdownTableMaker](https://chrome.google.com/webstore/detail/markdowntablemaker/cofkbgfmijanlcdooemafafokhhaeold)
  from Google Chrome Web Store.
  + https://chrome.google.com/webstore/detail/markdowntablemaker/cofkbgfmijanlcdooemafafokhhaeold
  + **Recommended.**
    + Apps and add-ons are actively [monitored and curated by Google](https://support.google.com/chrome_webstore/answer/1047776?hl=en).
    + Better add-on management (install, removal, updates).

[![chromewebstore_badgewborder_v2_340x96](https://cloud.githubusercontent.com/assets/7258373/6788162/ee497942-d154-11e4-934d-ef386061181d.png)](https://chrome.google.com/webstore/detail/markdowntablemaker/cofkbgfmijanlcdooemafafokhhaeold)

### MANUAL INSTALL

> **NOTE:** MANUAL INSTALLS ARE FOR DEVELOPERS OR POWER USERS.

  + You can build your own copy of the app using the Google Docs Script Editor.
  + First, you will setup the project containers. Next, you will copy and paste the code. Finally, you will finish the install by closing the editor, refreshing the spreadsheet and authorizing the add-on.

#### SETUP THE PROJECT

  + Open a spreadsheet created in Google Sheets.
  + Go to the **Tools** menu. Click on **Script Editor**.
  + If prompted, create a script for a **Blank Project**.
  + Delete all the code in **Code.gs**. The file should be blank.
  + Go to the **File** menu. **Save** the project with any name you want. (e.g., **MARKDOWNTABLE**)
  + Make a copy of the blank **Code.gs** file. There should be 2 files now.
  + Go to the **File** menu. Select **New** > **Html file**.
  + Rename the HTML file to **MarkdownTableMakerSidebar**. Delete all the code in this file.
  + Rename one of the Google Script files to **obj**.
  + Rename the other Google Script file to **addon**.
  + You should now have three files:
    + **obj.gs**
    + **addon.gs**
    + **MarkdownTableMakerSidebar.html**

> NOTE: While the Google Apps Script (.gs) server-side files can be named anything,
the HTML files must match exact names given. Otherwise, HtmlService cannot import client-side files.


#### COPY AND PASTE

  + Copy all the contents of [**WikiTableMaker.gs**](https://raw.githubusercontent.com/pffy/googledocs-addon-markdowntablethree/master/WikiTableMaker.gs) and paste them into **obj.gs**.
  + Copy all the contents of [**MarkdownTableMakerAddOn.gs**](https://raw.githubusercontent.com/pffy/googledocs-addon-markdowntablethree/master/MarkdownTableMakerAddOn.gs) and paste them into **addon.gs**.
  + Copy all the contents of [**MarkdownTableMakerSidebar.html**](https://raw.githubusercontent.com/pffy/googledocs-addon-markdowntablethree/master/MarkdownTableMakerSidebar.html) and paste them into **MarkdownTableMakerSidebar.html**.

#### FINISHING

  + Close the **Script Editor**.
  + Save and/or refresh your spreadsheet in Google Sheets.
  + **MarkdownTableMaker** should now appear as one of your main menu items.
  + Start using the add-on by choosing any of the **MarkdownTableMaker** menu items.
  + You will need to authorize [PERMISSIONS](#permissions) before you can activate the add-on.


## PERMISSIONS
  + Needs access to Google Docs, Google Drive.
  + When you first run the Add-On, Google will request authorization for the app.
  + If authorization is given,
  you can always [revoke it here](https://security.google.com/settings/security/permissions) when
  no longer needed.
  + You can see why distributing [free software](https://www.gnu.org/philosophy/free-sw.html)
   is so important to your privacy.


## REFERENCE

  + `text/markdown` internet type is pending:
    + https://tools.ietf.org/html/draft-ietf-appsawg-text-markdown-06


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

