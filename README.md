# deborahdenenfelddotcom
Clone of website at that domain, since it is broken.

It looks like some service didn't get started when the server started so now there are all these error messages all over the page. Also, the blog doesn't load but she said she doesn't mind losing the blog content.

Here is the web archive of it, the earliest version doesn't have the MySQL error message:

[https://web.archive.org/web/*/http://www.deborahdenenfeld.com/](https://web.archive.org/web/*/http://www.deborahdenenfeld.com/)

But those should be pretty easy to clean up. Here's the wget command I used:

` wget --recursive --level=inf --page-requisites --convert-links --html-extension -rH http://www.deborahdenenfeld.com/ `

**WARNING** don't use this command, it crawls the entire web and several other websites, oops. But it worked.

I'll put up the page now and see what happens. If this works all that's left is to add a blog of some sort for her, but that's low priority.
