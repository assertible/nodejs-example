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

**The ideal workflow**

- Push code to GitHub
- Run unit tests and build the application on CircleCI
- Deploy the new application to Heroku
- Run post-deployment tests with Assertible

At Assertible, we've created a continuous testing platform to help
developers automate their QA tests and complete their CI pipeline.

Read the accompanying blog post to the
repo:
[https://assertible.com/blog/set-up-continuous-testing-with-nodejs](Tutorial: Set up a continuous testing pipeline with Node.js)

## Documentation and resources

- [Getting started with assertible](https://assertible.com/docs)
- [GitHub deployments API](https://developer.github.com/v3/repos/deployments/)
- [assertible/deployments repo and scripts](https://github.com/assertible/deployments)

## License

The code in this repository is licensed under
MIT. [View the license](https://github.com/assertible/deployments/blob/master/LICENSE)

---

> [assertible.com](http://assertible.com) &nbsp;&middot;&nbsp;
> GitHub [@assertible](https://github.com/assertible) &nbsp;&middot;&nbsp;
> Twitter [@AssertibleApp](https://twitter.com/AssertibleApp)
