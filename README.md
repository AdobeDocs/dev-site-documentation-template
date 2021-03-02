# Adobe I/O Documentation Template

This is a Gatsby site template built with [Adobe I/O Gatsby Theme](https://github.com/adobe/gatsby-theme-aio).

View the [demo](https://adobedocs.github.io/dev-site-documentation-template/) running on Github Pages.  

## Where to ask for help
The slack channel #adobeio-onsite-onboarding is our main point of contact for help. Feel free to join the channel and ask any questions. 

## How to develop

For local development, simply use :
```
$ npm install
$ npm run dev
```

For the documentation developer, please read these sections on how to:
- [Arrange the structure content of your docs](https://github.com/adobe/gatsby-theme-aio#content-structure)
- [Linking to pages](https://github.com/adobe/gatsby-theme-aio#links)
- [Using assets](https://github.com/adobe/gatsby-theme-aio#assets)
- [Setting Global Navigation](https://github.com/adobe/gatsby-theme-aio#global-navigation)
- [Setting Side Navigation](https://github.com/adobe/gatsby-theme-aio#side-navigation)
- [Using content blocks](https://github.com/adobe/gatsby-theme-aio#jsx-blocks)
- [Notes on using Markdown](https://github.com/adobe/gatsby-theme-aio#writing-enhanced-markdown)

For more indepth [instructions](https://github.com/adobe/gatsby-theme-aio#getting-started).

## How to deploy

For any team that wishes to deploy to the adobe.io and stage.adobe.io website, they must be in contact with the dev-site team. Teams will be given a path that will follow the pattern `adobe.io/{product}/`. This will allow doc developers to setup their subpaths to look something like:
```
adobe.io/{product}/docs
adobe.io/{product}/community
adobe.io/{product}/community/code_of_conduct
adobe.io/{product}/community/contribute
```

### Launching a deploy
The current process to deploy to either stage or production requires at least two people. One to raise a pull request and another to approve it. Currently this process is a bit cumbersome and the dev-site team is looking to improve the experience to be more self-sufficient but is still a to-do item.

So in order to deploy:
- raise a pull request with your changes
- assign a reviewer to it (typically someone else on your team or a member of the dev-site team can also do this)
- use the label `deploy` for production and `deploy:dev` for stage. If these labels are not already in the list of labels, you can just add them. You can also use one or both labels at the same time to launch just a stage or prod or both. 
- Once a pr with the proper labels are approved, the process will start the deploys. If all goes well, the site will be automatically updated. 
- Merge pr back into `main` or whichever is your working branch 