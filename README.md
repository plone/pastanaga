# Pastanaga

## Prerequisits

Before we can start, you need Node.js 6 and the Node package manager (npm) installed. Please check https://nodejs.org for install instructions.
To ease development with multiple Node versions, we recommend to use nvm (https://github.com/creationix/nvm).

We will also use the yarn package manager (https://yarnpkg.com/en/) which provides you with repeatable and stable builds, amongst other features. To install yarn globally run:

  $ npm install yarn -g


## Setup

  $ yarn


## Start

  $ yarn start

## Development

### Test Setup

  $ make

### Run Acceptance Tests

  $ bin/pybot test.robot

By default we run our tests headless. If you want to run them in the foreground use::

  $ bin/pybot --variable HEADLESS:False test.robot

## Minimal Viable Product

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

## Contributors

- Albert Casado
- Victor Fernandez de Alba
- Timo Stollenwerk
