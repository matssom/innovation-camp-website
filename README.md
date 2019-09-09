**Auhtor: Mats Sommervold**

## How to setup development environment (One time per computer)
1.  Download and install the version controll system 'git' and select "use git from command-line": https://git-scm.com/downloads
2.  Download and install 'node.js'. Download LTS version: https://nodejs.org/en/
3.  Open the 'git bash' program and run the command: 'node -v'. If you see a version number, you have done it right.
4.  Create a free account on github: https://github.com
5.  Set up ssh key to connect 'git bash' with your github account:
	- Run: 'cd ~' to change into roor directory
	- Run: 'mkdir .ssh' to create an '.ssh' directory
	- Run: 'cd .ssh' to change directory into the '.ssh' directory
	- Run: 'ssh-keygen -t rsa -C "email@email.com". To generate a ssh key. (Use the email you used to sign up to github)
	- Hit enter when the commandline asks for where to save the ssh key. (This will generate it in the deafult directory)
	- When the commandline asks for a password, you can hit enter to leave it blank or type a password if you desire.
	- NB! when typing passwords in the commandline nothing will show up on screen. Cursor will say in the same position.
	- Finally hit enter to confirm your password if you didn't leave it blank.
	- For windows: Run: 'notepad id_rsa.pub'. For Mac: Run: 'mate id_rsa.pub' to open the public key file in notepad or mate.
	- Copy everything in the file.
	- Go to account settings on github and clik on ssh key in the sidebar. Click 'Add SSH key'
	- Fill in a titel you remember. Example: 'Laptop'
	- Paste the text you copied from the 'id_rsa.pub' file and clik Add key.
	- Go back to the command line and run: 'ssh -T git@github.com' to establish connection. 
	- Type: 'yes' and hit enter
7.  You might be asked to log in to github now or sometime in the future. When you do, just log in.
6.  Install the automation tool 'gulp' globally on your computer by typing the command: 'npm install gulp -g'.
7.  Install the two javascript automation tools globally by typing 'npm install webpack webpack-cli -g'.
8.  Congratulations, you set up git and github with node.js and gulp!

## Connect to and download this repository (One time per repository)
1.  Ask the host of this repository to add you as a developer on github.
2.  Create a folder somewhere on your computer where you would like to store the project when downloaded.
3.  Do not put the folder in onedrive, google filestream, dropbox etc.. It does work, but automation is MUCH slower.
4.  Navigate to the folder and copy the entire path to it.
5.  Run: 'cd thePathYouCopied'. To change directory into your desired folder. You can also type 'cd ' and drag the folder on top of the commandline and hit enter to do this.
6.  Run: 'git init' to tell git that this is a project folder. (You should see '(master)' next to the path to the folder.
7.  When you are added as developer, go to this repository and click the green 'Clone or download' button.
8.  Copy the text you see in the box and run this command: 'git remote add origin theTextYouCopied'. You might be asked to log in.
9.  Now you have told git that this repository is where git should download and upload code to/from and that this folder is where to copy it to/from.
10. Run 'git pull origin master' to download the files from 'origin' (this repository) and download the 'master' branch (the default branch that holds all the main files).
11. Run: 'npm install' to automatically download all the packages needed for automation in this repository. (This might take a while)
12. Open the project folder in your favourite editor (brackets, sublimetext, notepad++ etc...) And open the app folder.
13. The app folder is where you will write code.
14. First time you push changes back up to a repository, you need to use 'git push -u origin master' (see "How to use git" section)
15. Congratulations, you have sucessfully connected and downloaded the repository!

## How to use git
Git is a version controll system that enables possibility for remote repositories (github). This means that you can edit code and easily restore old versions of your code if you mess up anything. It also makes it easier to collaborate with others using github. Two people can work on different parts of a project and merge the changes together on github.

**NB!** When using git on your project you always need to be in the directory of your project folder! Use command 'cd yourDirectoryPath'. (like we did erlier)

**How it works in short:**
You pull down any changes from the repository before you begin coding. Work on a spesific area of the project. When you are done with that task, commit your changes to git and move on ot next task. When you are done working, push the changes back up to github for the other developers to see. Next time you start working you pull down the latest changes again and do it all over.

**These are the basic commands to use git:**
- git status			- Lists all files that has been changed in your project in red.
- git add .			- Stages all changed files to be ready to commit.
- git commit -m "message"	- Commits all files you have staged with 'git add .' (you can write a message in the quotes to comment on what you have changed to the rest of the team.)
- git commit -am "message"	- Does the two commands above in one line. (Stages all files and commits them with a message)
- git push origin master	- Pushes all the commited changes up to githup for the other developers to see. (Do this when done working)
- git push -u origin master	- Same as above exept you need to use -u first time you push to a new reopsitory.
- git pull origin master	- Pulls all the changes form other team members down to your computer. (Do this every time you start working to get the latest code)

**Git branches: (more advanced git)**
When wokring on a spesific feature, you can work on a separat branch. This means that you do not edit the main project, but a copy of it. If you f*** it up, you can just delete the branch and you are back to normal (master). When you are done with that spesific feature you can commit the changes and merge it with the master branch or push the branch up to github and tell another developer to look over the code and merge it for you.

**These are the merge commands:**
- git branch branch-name		- Creating new branch
- git checkout branch-name		- Switching (checkout) to a branch. ex: 'git checkout master'(moves you to master branch)
- git checkout -b branch-name		- Creates an switches to branch in one command
- git merge branch-name			- Merges branch back into master. NB! You need to stage and commit all changes in a branch before you merge it back into master. NB2! You need to be on the master branch to use this command.
- git branch -d branch-name		- Delete's branch. Do this after you finish the feature and have merged the branches or pushed them to github.
- git push origin branch-name		- Push branch up to github. (Do this if you have done a lot of changes)
- If you pushed the changes to github witout merging you (or someone from your team) can create a pull request on github to merge the changes there. Easier to see if you have a lot of code.

**Advanced git (no need to learn)**
- Merge branch (no fast forward): "git merge branch-name --no-ff" + ":wq"

## How to use automation
This repository comes with a lot of automation commands and packages that make your experience as a developer much better.

**Commands:**
Remember to allways be in your project directory in git bash. And be on the branch you want to work on

```gulp watch```
When starting to work, run this command to automatically spin up a web server that refreshes automatically when you save a change to any file in the project. When you are done hit 'ctrl + c' to terminate the task. 'gulp watch' also compiles css and injects it into the running server without evern refreshing.

The other amazing part of 'gulp watch' is that when you stat it up you can see two url's in the command line. If you type in the "remote" url into another device that is on the same wifi network, it will display the website on that device with live changes. All the instances of the server are synced, so if you scroll down the page on your phone, it wil also do it on your computer.

```gulp build-dev```
When you are all done with the project and want to publish the website, use this command to build a test vesion of the website without all the extra developer tools. This will compress all the images, but not the css and javascript files. They are hard to read when compressed and not ideal for testign the build. To check if the build works, run ```gulp previewDev```

```gulp build```
When you have tested the 'gulp build-dev' you can build to a produciton, publish ready version with compressed images, javascript and css for faster pageload. To test if it workes, run ```gulp previewProduction```

## BEM methodology

Naming convension for css classes. Every element should have a class to make the connection between
css and html easy to understand and avoid inheritence problems.

See more at: https://en.bem.info/methodology/quick-start/

## CSS and JS moules
This is a system implemented into the repository. In the ./app/assets/styles/ and ./app/assets/scripts there is a ```styles.css``` and ```App.js``` file. These files are simply places to include other CSS and JS modules that are placed in the modules/ folders. This way we can split up or css and javascript into several files without having to include a lot of files into our index.html file.

When ```gulp watch``` is running and we save a css or jecascript file, the system will re-compile all the modules into one file and put that file in the ./app/temp/styles/ or ./app/temp/scripts folder and then trigger a refresh. The index.html is set up to import the files form the temp folder.

NB! Allways beginn a moduel filename with '_'

## CSS extras
In this repository, you have the option to write some 'PostCSS'. This is a few CSS extras that makes css faster to write. These automatically compile down to normal css every time yo save a file.

**CSS variables:**
Define variables with values you want to reuse multiple times over in your css in the ```_variables.css``` file in the styles/global/ folder.

Example:
```$mainColor: #3456f3;``` From now, when you write $mainColor anywhere in your css, it will be replaced with that color value.

**Nested CSS:**
Enables you to write css nested.

Example:
```css
h1 {
	font-size: 30px;
	
	a {
		color: red;
	}
}
```
The code above will compile to this:
```css
h1 {
	font-size: 30px;
}

h1 a {
	color: red;
}
```

**CSS mixins**
CSS mixins allows you to define a pice of reusable code, perfect for media-queries.

Example:
```css
// Define mixin
@define-mixin atSmall {
	@media (min-width: 330px) {
		@mixin-content;
	}
}

// Use mixin
@mixin atSmall {
	a {
		color: orage;
	}
}
```
The code above will compile into:
```css
@media (min-width: 330px) {
	a {
		color: orage;
	}
}
```
Another example:
```css
// Define mixin
@define-mixin clearfix {
	&::after {
		content: "";
		clear: both;
		display: table;
	}
}

// Use mixin
@mixin clearfix;
```
The code above will compile into:
```css
&::after {
	content: "";
	clear: both;
	display: table;
}
```

**Hidden CSS benefits:**
- PostCSS will automatically add prefixes for better browser support.
- Normalize.css is included in te project to normalize the content for better browsersupport in all browsers.
- PostCSS will make it possible to include modules into one main CSS file.

## Mobile first

1.  Use responsive images like this:
-----------------------------------------------------------------------------------------------
```html
<picture>
	<source srcset="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w" media="(min-width: 1380px)" type="">
	<source srcset="assets/images/hero--medium.jpg 1380w, assets/images/hero--medium-hi-dpi.jpg 2760w" media="(min-width: 990px)" type="">
	<source srcset="assets/images/hero--small.jpg 990w, assets/images/hero--small-hi-dpi.jpg 1980w" media="(min-width: 640px)" type="">
	<img srcset="assets/images/hero--smaller.jpg 640w, assets/images/hero--smaller-hi-dpi.jpg 1280w" alt="Costal view of ocean and mountains" class="large-hero__image">
</picture>
```
2.  Or like this:
-----------------------------------------------------------------------------------------------
```html
<img class="lazyload" sizes="(min-width: 970px) 976px, 100vw" data-srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip-hi-dpi.jpg 1952w" alt="Couple walking down a street.">
```

3.  Always style with the smallest screens in mind first and use media queries (mixins) to ajust for larger
	screens.


## Font
We will use this font for the website
<link href="https://fonts.googleapis.com/css?family=PT+Sans+Caption&display=swap" rel="stylesheet">
