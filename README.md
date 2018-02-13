# Bloc Jams

Bloc Jams is a digital music player like Spotify. This is a  single-page application built on AngularJS framework.

## Pull Down the Code

Start by cloning the repository:

```
$ git clone https://github.com/duyhong/bloc-jams-angular.git <your-project-name>
```

## Reset Git

This will be your personal application. So all of the past commit history that I used to build this  app aren't needed. Also you will want to be able to push/pull code from your personal remote (Github) repository and NOT my remote (Github) repository.

Remove the existing local Git repository:

```
$ rm -r -f .git
```

## Configuration

The project uses Node to run a JS server in development. This will be important when we want to use urls /album or /collection instead of the basic album.html or collection.html. 

### Install Node and NPM

NodeJS and NPM are installed together by [downloading an installer from the Node website](https://nodejs.org/). The install button should automatically detect your operating system, but if it doesn't, you can choose the proper version from the [downloads page](https://nodejs.org/download/).

![](https://github.com/duyhong/bloc-jams-angular/screenshots/node-install-button.png)

Install the project dependencies by running:

```
$ npm install
```

## Run the Application

Run the application server:

```
$ npm start
```

## Usage

Once the dependencies are installed, you can run npm start to start the application. You will then be able to access it at localhost:3000

The server will start up. To stop the server, press `cntrl + c`.

## Directory Structure

```
├── LICENSE
├── README.md
├── app
│   ├── assets
│   │   └── images
│   │       └── bloc-logo-white.png
│   ├── pages
│   │   └── index.html
│   ├── scripts
│   │   └── app.js
│   ├── styles
│   │   └── style.css
│   └── templates
│       └── home.html
├── package.json
└── server.js
```


## Usage

Add images to the `app/assets/images` directory. To reference images in HTML, use the path `/assets/images/<image file name>.jpg`. For example, to include the image called `bloc-white-logo.png`, the path for the `src` attribute in the HTML would be:

```html
<img src="/assets/images/bloc-white-logo.png">
```

__Note:__ A sample image has been added to `app/images`. To remove the image from the application, run the following command from the root of repo:

```bash
$ rm -f app/assets/images/bloc-white-logo.png
```

To reference any other assets, like the music in Bloc Jams, use the path `assets/<asset-type>/<asset-file-name>`.

### Difference between Pages and Templates

The `templates` directory should hold any HTML files used as templates in Angular states configured by UI Router. All other HTML files belong in the `pages` directory.
