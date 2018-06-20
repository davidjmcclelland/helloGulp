## tw-mushupbuilder sandbox


* `$ npm init`
* `$ npm install gulp browser-sync --save-dev`
* `$ gulp`
* `$ npm install gulp-nunjucks-render --save-dev`
* `$ gulp nunjucks`

(Dependencies may require modifying .npmrc to bypass Thingworx Artifactory proxy)

templates dir stores all nunjucks partials and other files that will be added to files in the pages dir

pages dir stores files that will be compiled into HTML. They will be compiled into the app folder.

Mashup Builder IDE redesign

Approaches:

* Make IDE more responsive: Flexbox/SASS
* Make IDE more flexible: NunJucks + configuration
* Make IDE modern JS app: Node, gulp, ES6
* Make IDE testable: TDD capable: Karma/Jasmine/esLint
* Make incremental changes: Catalina Linking, json-server, composer preferences

### Runtime Setup:
1: Add link to Tomcat conf catalina/localhost: `Thingworx#dist.xml` containing link:

`<?xml version='1.0' encoding='utf-8'?>
<Context docBase="C:\workspaces\davidjmcclelland\helloGulp\dist\Builder">
	<Resources allowLinking="true" />
</Context>`

2: Build HelloGulp project via gulp build from flexBox branch: https://github.com/davidjmcclelland/helloGulp

* In console 1: `gulp `
* In console 2: `json-server dist/Builder/config/ide.json`

Running instance of TW-server required. Use TW-server URL in tw-prefs.js to get REST calls

* To update styles:
`Gulp sass`
* Javascript/html:
`Gulp copy-js`
* Re-assemble templates:
`Gulp nunjucks`

To add a preference:
* Add a preference entry to the json file in Tomcat `webapps/Thingworx/Composer/layouts/preferences.json`
* Any preference added becomes immediately CRUD enabled from REST.
* I assume committing additions makes them part of the platform.

Mashup Builder IDE redesign

Approaches:

* Make IDE more responsive: Flexbox/SASS
* Make IDE more flexible: NunJucks + configuration
* Make IDE modern JS app: Node, gulp, ES6
* Make IDE testable: TDD capable: Karma/Jasmine/esLint
* Make incremental changes: Catalina Linking, json-server, composer preferences

### Runtime Setup:
1: Add link to Tomcat conf catalina/localhost: `Thingworx#dist.xml` containing link:

`<?xml version='1.0' encoding='utf-8'?>
<Context docBase="C:\workspaces\davidjmcclelland\helloGulp\dist\Builder">
	<Resources allowLinking="true" />
</Context>`

2: Build HelloGulp project via gulp build from flexBox branch: https://github.com/davidjmcclelland/helloGulp

* In console 1: `gulp `
* In console 2: `json-server dist/Builder/config/ide.json`

Running instance of TW-server required. Use TW-server URL in tw-prefs.js to get REST calls
* `gulp` to get autorefresh on changes other than API JSON
* To manually update styles:
`gulp sass`
* Javascript/html:
`gulp copy-js`
* Re-assemble templates:
`gulp nunjucks`
* update API
restart json server (watch was not working last I tried)

To add a preference:
* Add a preference entry to the json file in Tomcat `webapps/Thingworx/Composer/layouts/preferences.json`
* Any preference added becomes immediately CRUD enabled from REST.
* I assume committing additions makes them part of the platform.