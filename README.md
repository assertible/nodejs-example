# Continuous testing example - Node.js

[![Heroku](https://heroku-badge.herokuapp.com/?app=assertible-nodejs-example)](https://assertible-nodejs-example.herokuapp.com/) [![CircleCI](https://circleci.com/gh/assertible/nodejs-example.svg?style=svg&circle-token=54502d43ebe83668441acb3636e4e3eebf2b0fd9)](https://circleci.com/gh/assertible/nodejs-example) [![Service status](https://assertible.com/apis/3cf53b60-235a-4431-9a2d-2d60823d23b9/status?api_token=8b55a286830323effb)](https://assertible.com/dashboard#/services/3cf53b60-235a-4431-9a2d-2d60823d23b9)

This is an example of a complete continuous **integration**,
**delivery**, and **testing** pipeline using a Node.js app.  The
project demonstrates how you can integrate Assertible into your
deployment pipeline for running automated, post-deployment API tests.

Read the full blog post here: []()

## Introduction

A continuous integration and delivery pipeline makes teams and
developers more effective and building and deploying code. But many
teams haven't added continuous testing to their workflow, and resort
to manually testing applications after every deployment.

At Assertible, we've created a continuous testing platform to help
developers automate their QA tests and complete their CI pipeline.

**The ideal workflow**

- Push code to GitHub
- Run unit tests and build the application on CircleCI
- Deploy the new application to Heroku
- Run post-deployment tests with Assertible

## Documentation and resources

Read the full blog post for the code in this repo [here](). For more
information about setting up continuous test, see the Assertible User
Guide:

- [Getting started with assertible]()
- [Why we test every single API deployment]()
- [5 tools to complete your CI pipeline]()
- [assertible/deployments repo and scripts]()
