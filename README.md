# MarkdownTableMaker

  + Make Markdown tables in Google Sheets.

[![chromewebstore_badgewborder_v2_340x96][storeicon]][storepage]

## About

  + MarkdownTableMaker [Google Spreadsheets][goog_sheets] Add-On.
  + Get the [latest release][latest_release].
  + Converts Google Sheets (Google Docs Spreadsheets) selection into a Markdown table.
  + Used on: Markdown tables on GitHub, StackEdit, enterprise Markdown wikis, and [more](#compatibility)...

![markdown table maker][splash]

  + Wait... What is [Markdown][wiki_markdown]?
  + Save table to Google Drive with the `.md` file extension.
  + Edit the Markdown file with compatible third-party Drive apps (e.g., [StackEdit][cws_stackedit]).
  + Uses the [MarkdownTableMaker][gh_markdowntablefive] object.
  + Written in Google Apps Script.
  + You can also [render Markdown][gh_render] elsewhere with the GitHub API.


## Details
  + [Features](#features)
  + [Installs](#install)
    + [Chrome Web Store Install](#chrome-web-store-install)
    + [Manual Install](#manual-install)
  + [User Guide](#user-guide)
  + [Compatibility](#compatibility)
  + [Permissions](#permissions)
  + [License](#license)
  + [Feedback](#feedback)


## Features

  + Detects bold, italic and strikethrough font styles. Converts them to Markdown.
  + Detects multi-line cells. Converts them to [Markdown Line Breaks][gh_linebreaks].
  + Detects HYPERLINK formulas with URLs and Titles. Converts to Markdown links: `[title](url)`
  + Detects table column alignment for first row of a selected range. Applied in Markdown.
  + Detects Google monospace type fonts (e.g, Courier New) and converts text to `inline syntax`, with back-ticks.
  + Auto-crops ranges to row and column boundaries with content in cells.
  + Converts vertical pipes into inline code syntax to avoid Markdown engine rendering errors.
  + [Learn more][gh_gettingstarted].

## Install

### Chrome Web Store

  + [Install MarkdownTableMaker][storepage] from Google Chrome Web Store.
  + **Recommended.**
    + Apps and add-ons are actively [monitored and curated by Google][goog_monitor].
    + Better add-on management (install, removal, updates).

[![chromewebstore_badgewborder_v2_340x96][storeicon]][storepage]

### Manual Install

> **NOTE:** Supported open beta program has concluded. Please use Google Chrome Web Store.


## User Guide

  + Learn more about [MarkdownTableMaker features][gh_gettingstarted] in detail.

## Compatibility

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


## Permissions
  + Needs access to Google Docs, Google Drive.
  + When you first run the Add-On, Google will request authorization for the app.
  + If authorization is given,
  you can always [revoke it here][goog_monitor] when
  no longer needed.
  + You can see why distributing [free software][fsf]
   is so important to your privacy.

## [License][license_link]

> **COMPLIANCE OFFICERS:**  This software is released under The Unlicense. For your software compliance paperwork mandated by your corporate policy, you can simply print/save this LICENSE file as proof of our software licensing agreement and completed acquisition. Please consult your legal department or a licensed attorney.

## Reference

+ **Does the name Gruber mean anything to you? It should ring a few bells. Markdown was created by [John Gruber][df_markdown].**

[license_link]: LICENSE
[latest_release]: ../../releases/latest


[df_markdown]: http://daringfireball.net/projects/markdown/
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
