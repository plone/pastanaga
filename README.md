![Pastanaga](https://github.com/plone/pastanaga/raw/master/pastanaga-logo.jpg)

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

# Pastanaga UI - The new UX framework for editing the web

Pastanaga UI is a new user experience framework for the web. It has been created by Albert Casado (@albertcasado) and it is maintained by the Plone community.

This repo contains UI/UX specs for Pastanaga UI. There's a Zeplin repository with more mockups, if you are working on any Pastanaga implementation and want to have access to it, please ask to @tisto or @sneridagh.

# Pastanaga UI icons

There is an initial release of the Pastanaga icons on https://github.com/plone/pastanaga-icons. These icons are intended to be used only in "official" Pastanaga UI, so please refrain to use them on personal projects unless they are based on Pastanaga UI.

# License

The Pastanaga UI mockups, specs and Pastanaga Icons are released under [Creative Commons Attribution-ShareAlike License]( https://creativecommons.org/licenses/by-sa/4.0/).

# Implementations

Implementations for React and Angular are currently under active development:

- React: https://github.com/plone/volto
- Angular: https://github.com/plone/pastanaga-angular

# Minimal Viable Product

- As a registered user I can log in. -> plone.restapi JWT
- As a logged in user I can add a page. -> A single folderish type with title, body text
- As a logged in user I can view a page.
- As a logged in user I can add a page within an existing page.
- As a logged in user I can navigate the site structure.
- As a logged in user I can edit a page.


- As a logged in user I can mark body text as bold.
- As a logged in user I can mark body text as italic.
- As a logged in user I can mark body text as a link.

- As a logged in user I can add an image to the body text of a page. -> drag & drop, upload to folder with resizing

- As a user I can see a page fully rendered within 500ms. -> small bundle/server side rendering
- As Google I can crawl the contents of a page. -> server side rendering
