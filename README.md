# Pastanaga - The new UX framework for editing the web

Pastanga is a new user experience framework for the web. It has been created by Albert Casada and it is maintained by the Plone community.

Implementations for React and Angular are currently under active development:

- React: https://github.com/plone/plone-react
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

![Pastanaga](https://github.com/plone/pastanaga/raw/master/pastanaga-logo.jpg)
