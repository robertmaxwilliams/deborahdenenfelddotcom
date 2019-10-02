# deborahdenenfelddotcom
Clone of website at that domain, since it is broken.

It's hosted on github pages, and the domain is managed through godaddy. 

To make changes, create a pull request or create an issue telling me to add you as a contributor.

Now live at: 
`http://www.deborahdenenfeld.com/`

`http://deborahdenenfeld.com/` redirects to the `www` one.

`https` is broken at the moment, probably something on godaddy or github that needs to be configured.

The original problem was that there was some service didn't get started when the server started so now there are all these error messages all over the page. Also, the blog doesn't load but she said she doesn't mind losing the blog content.

Here is the web archive of it, the earliest version doesn't have the MySQL error message:

[https://web.archive.org/web/*/https://www.deborahdenenfeld.com/](https://web.archive.org/web/*/https://www.deborahdenenfeld.com/)

This archive is missing some pages and images. I originally scraped the version that was hosted in a mysterious
location, and didn't realize I had missed some pages and images. The Wayback Machine seems to be missing the same things
that I am, perhaps some of these were missing on the original site as well? Not sure.

Here is a site map that lits pages with issues:

```
index.html
    instruction-and-calling.html
        dance-in-schools.html (missing images: "ceremonial dance", "back to back", "colonial elbow turn")
            MISSING residencies-workshops-pds.html
            MISSING large-group-presentations.html`
            MISSING workshop-themes.html
            MISSING fans.html 
        classes-workshops.html (missing image for "couple waltzing" and "intergeneration dance")
        dance-calling.html (mssing image for "calling with Allstars")
    special-projects.html
        spiritual-retreats-team-building.html
        play-party-games-research.html (missing images: "Girl dances, Debora assists", "two-hand turn")
        mountain-folk-festival.html (missing images: "Deborah dances at mountain folk festival")
            DEAD LINK: https://www.berea.edu/peh/mff/default.asp is a 404, should be https://www.berea.edu/mff/
        grant-writing.html
    weddings-and-events.html
    about-deborah-denenfeld-dancer.html
contact-deborah-denenfeld.html
```

This page:

`https://securitytrails.com/domain/deborahdenenfeld.com/history/a`

Lists previous IP's attached to `deborahdenenfeld.com`, and it seems the original is 199.231.144.61 with HostMySite.
Debora isn't able to access this page, nor does she have the source for it. I've tried to access it, but it seems that
that IP address is defunct. That IP serves many websites, so you have to use the "Host" field in the header, this system
is called "dynamic hosts".

The following times out, as do all the websites listed [here](https://securitytrails.com/list/ip/199.231.144.61):

`curl -v -L -H 'Host: deborahdenenfeld.com' 199.231.144.61`

This means to access the server at `199.231.144.61` as if you had typed `deborahdenenfeld.com` into the address bar and
a DNS lookup brought you to `199.231.144.61`.

If you try it with the most recent IP:

`curl -v -L -H 'Host: deborahdenenfeld.com' 184.168.131.241`

It succeeds, at accessing the github version of the site. The original might still be on HostMySite somewhere, or on the
original developer's machine. The version on the wayback machine doesn't have any more than what I have here.

