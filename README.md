[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/MeStrak/micro-frontend-playground)

# micro-app-playground
This project is a playground to test out some different micro app frameworks.
The code is quite messy, with some formatting and TypeScript errors as I was just trying to hack something together as quickly as possilble.
The different frameworks I'm testing are listed below.

# The contenders

## iFrame + inter frame messaging
- iFrame is the most basic way of hosting an external page within a web app
- iframe-resizer is used to help the iFrames size to their content
- Framebus is used to provide messaging between parent and child apps
- Framebus is really nice as it provides channels, and also the possibility to filter by origin

### Issues so far
- Formatting of scrollbars looks messy when hosted within a dialogue (need to add some styling)
- iFrames don't correctly shrink when page is expanded then shrunk
- Opening a bottom sheet in the long content page seems to open it right at the bottom of the iFrame, outside the current view so it is not visible
- With dropdown open in parent, clicking on child iFrame does not close dropdown (focus change not detected)

## single-spa
- This is a framework actually designed for micro front-ends (unlike iFrames)
- However, my implementation is an anti pattern as the whole application hosting multiple micro frontends is supposed to be built with single-spa https://single-spa.js.org/docs/faq/#should-i-have-a-parentroot-app-and-children-apps
- This implementation only tests embedding of a single page, because I want to see how it will fit into existing applications

### Issues so far

# Setup

## Structure
There are 3 apps contained in this repo:
- parent-app: this is the host application which can display multiple micro front ends
- child-app: one of the micro front end apps
- vue-cytoscape-cola: another micro front end (obviously cloned!) showing a complex graph network layout, just for fun

## Configure parent-app .env

1. Copy `template.env` to a new file called `.env`
2. Configure the URLs of each app for your environment. Note that the port numbers are hard coded in the serve command of each app, so if you change the port you also need to change the serve command in the package.json of the relevant project.

## cd to each project, install and run
`cd parent-app && yarn && yarn serve`
`cd child-app && yarn && yarn serve`
`cd vue-cytoscape-cola && yarn && yarn serve`

That's it - visit the URL of your parent app and you should see it running.
