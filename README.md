# [Google analytics dashboard](https://cristianpb.github.io/analytics-google/)

Customized dashboard which:

- connect to the google analytics api to fetch your analytics data ;
- make interactive charts using the popular javascript library d3.js and dc.js ;
- deploy your dashboard automatically in github pages serveless architecture by using github actions.

More details are included in [my article](https://cristianpb.github.io/blog/analytics-google)

![google analytics dashboard](https://cristianpb.github.io/assets/img/analytics-google/main.jpg 'google analytics dashboard')

## Installation

Most important commands are in `Makefile`. So in order to start a development environment you only need to type:

```
make up
```

## Deploy

I create a static html page by using:

```
make build
```

This creates a `dist` folder that can be used as a static page. I use github
pages to publish the html at [this
page](https://cristianpb.github.io/analytics-google/) and I use github actions
to update the data.

## Dependencies

- `python`
- You need to have enable google api credentials in order to obtain a token and fetch google analytics data instructions can be found in [my article](https://cristianpb.github.io/blog/analytics-google).
- I name the credentials as `token.json`. If you want to name it different, you have to change the name in `analytics.py` file.
