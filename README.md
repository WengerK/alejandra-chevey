# Alejandra Chevey

[Hugo](https://gohugo.io/) website generated with [Toolbox](https://frontend.github.io/toolbox/) styleguide & [Codeship](https://codeship.com) CI/CD.

production status: [ ![Codeship Status for WengerK/alejandra-chevey](https://app.codeship.com/projects/17efd080-54fc-0135-37a2-66916a474cf7/status?branch=master)](https://app.codeship.com/projects/235460)

staging status: [ ![Codeship Status for WengerK/alejandra-chevey](https://app.codeship.com/projects/17efd080-54fc-0135-37a2-66916a474cf7/status?branch=dev)](https://app.codeship.com/projects/235460)

## 🔧 Prerequisites

First of all, you need to have the following tools installed globally on your environment:

* hugo
* npm
* yarn

## 🚛 Install

1. Setup your virtualhost (like `http://alejandra-chevey.dev`) to serve `/public`.

1. Install Hugo and dependencies using brew

    ```bash
    brew install hugo
    ```

1. Install Toolbox and dependencies using yarn

    ```bash
    yarn install
    ```

1. Build the website

    ```bash
    hugo server -D
    ```

## After a git pull/merge

  ```bash
  yarn build
  hugo server
  ```

## 🎨 Build the theme

The main styleguide of **Alejandra Chevey** is inside this project under `themes/alejandra-chevey/assets/`.
The styleguide is then processed using [Toolbox](https://frontend.github.io/toolbox/).

You first need to setup the work environment by running `yarn install`.

You can generate the styleguide and watch it:

  ```bash
  yarn start
  ```

You can generate only the built assets for production by running:

  ```bash
  yarn build
  ```

For more help about Toolbox, the [official documentation](http://frontend.github.io/toolbox/toolbox/#build-the-styleguide) is your best friend.

## 🚀 Deploy

### First time

  ```bash
  # You need to have ruby & bundler installed
  bundle install
  ```

### Each times

We use Capistrano to deploy:

  ```bash
  bundle exec cap -T
  bundle exec cap staging deploy
  ```

## 🌐 Hosting & DNS

Solution hosted at [Webfaction](https://www.webfaction.com) & DNS at [Gandi](https://www.gandi.net).


