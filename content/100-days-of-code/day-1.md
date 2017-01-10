+++
author = "Ha Link"
comments = true
date = "2017-01-10T11:58:57+08:00"
draft = false
image = ""
menu = "100-days-of-code"
share = true
slug = "github-page-with-hugo"
tags = ["100DaysOfCode", "github", "hugo", "page"]
title = "Day 1 - Github page with Hugo"
type = "post"

+++

This is my first post for #100DaysOfCode from [Boot Up 2017 with the #100DaysOfCode Challenge](https://medium.freecodecamp.com/start-2017-with-the-100daysofcode-improved-and-updated-18ce604b237b#.c5xcsjeiy). Maybe I start quite late for the challenge but better late than never. 

Following with the challenge, besides writing log about it everyday as the rules, I will try to figure out new things and write frequently blog about them. Therefore, I start this blog. I used to build my github page with jekyll, but one day, when randomly surfing the internet, I unexpectedly met Hugo and I decided to build a new site with it [halink.space](http://halink.space).

Since there is another tutorial about this on Hugo official documentation [site](https://gohugo.io/tutorials/github-pages-blog/#hosting-personal-organization-pages), it is a little bit complicated and outdated cos recently github alows github page to generate site from "docs" folder in the git repository. Then, the key factor for using hugo with github page here is only the config.toml file.

With gihub page there are two types of site you can generate, first one is personal/organization page which has the url structure like *https://your-github-username.github.io* or *https://your-organization-name.github.io* and the second type is git repository page, this page usually for repository documentation and has the url structure like *https://your-github-user-name.github.io/the-git-repository-slug* or *https://your-organization-name.github.io/the-git-repository-slug*. 

The different between two types of site above is not only the url structure but more important is the source folder which Github used for build the site. The first types of site, Github only allow you to render from master branch, you need to put your hugo render (puslish code) into the master branch, so there is only one thing you need to do here is modify the config.toml and point the publish folder to your master branch of your git repository so here is my config.toml:

```toml
	pushlishDir = './'
```

The second type of github page, you can either build the site from master branch or docs folder of your master branch, I prefer having a docs folder where I can store all the documetation for that project, then the config should be:

```toml
	publishDir = './docs'
```

publishDir option tells Hugo where the site should be generate, then all you need is to run hugo, commit and push it to github. Remember to go to repository settings and activate the github page option, the your site is ready to online.

