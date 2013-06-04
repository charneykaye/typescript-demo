TypeScript App Build Demo
=========================
Using Grunt to compile TypeScript to ECMA5.  Proof of Concept by Nick Kaye

## Documentation

From the command line, navigate to the project folder.

Use the Node package manager to automatically install all of the dependecies listed in the `package.json` file:

    npm install

Simply run grunt to build the application for deployment, populating the `/build/` folder:

    grunt

While you're working, you can use the preconfigured watch plugin to automatically build as you modify files:

    grunt watch

## TODOS Demo App

Code borrowed from http://www.typescriptlang.org/Samples/#TodoMVC

Created by Jérôme Gravel-Niquet.

Cleanup, edits: Addy Osmani.

TypeScript version by Luke Hoban.
