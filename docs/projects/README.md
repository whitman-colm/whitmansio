# Projects

I learn through doing, so everything I done is a functional, holistic application (albeit, not with a high level of polish).

<MarkdownCard>

## [Dotfile Docker Stack](https://git.dotfile.sh/dotfile/docker-composers)

Server Stack is a project done with the end goal of making a fully independant web presence, i.e. done entirely without reliance on AWS or other cloud services. The only service which isn't directly provided is domain names, which have to come from ICANN.

### What it Taught Me
- Docker-everything
	- Use of docker swarm mode and its networking mesh
		- General TCP load balancing for overlay networks.
		- HTTP/S load balancing through traefik.
	- Handing logical distributed volumes
	- Using multiple end nodes for distributing tasks across systems
	- Using multiple manager nodes at different locations for (at least partial) continuous uptime

The entire system uses docker swarm to deploy and manage hosting a numerous ammount of services and containers. Currently there is only one node in this swarm but it is designed to be able to be scaled to however many machines one would like to provide. While the `docker-compose.yml` files setup and provide many of these systems automatically but one would still have to setup the server and configure physical network. The next steps for this is to provide these same services in a way that doesn't require a user to interact with the command line at all.

</MarkdownCard>

<MarkdownCard>

## Becoming a Linux Weirdo

I'm not sure I actually learned anything except how to commit acts of huberis, but I want to go on this rant so

Towards the end of 2018, I decided to migrate all my machines from macOS (which I had been using since I'd started using computers) to proper Linux. (Side note: I say Linux instead of GNU/Linux because I refer to the cumulative sum of all systems that run on the Linux Kernel, RMS don't interact.) This conversion for me was massive, as I had previously entirely relied on macOS. This taught me more closely lower level linux architecture and gave me a serious appreciation to the miracle that this works (which isn't to say it doesn't, however my customizing is a destructive act of huberis)

</MarkdownCard>

<MarkdownCard>

## [Aurum](https://git.dotfile.sh/aurum)

Aurum is a chatbot for Discord in Golang with expandable commands.

### What it Taught Me
- Using an API to communicate with an an external application.
- Creating a system daemon (although this feature was later written out for ease of use)
- Multi-threading go and using goroutines
- Using bash and perl to bodge turning on/off the bots
	- Parsing data through regular expressions.
- Taking advantage of binary plugins in go
- Data persistence in go through Json
- Partitioning code into easily reusable libraries.

</MarkdownCard>

<MarkdownCard>

## [whits.io](https://git.dotfile.sh/colm/whitsio)

WhitsIO is this website. It is markdown-based and generated in VuePress (using [vuepress-homepage](https://github.com/mtobeiyf/vuepress-homepage) by Fing).

### What it Taught Me
- Using Vuepress to create an HTML website in Markdown
- Setting up HTTPS Certificates through [LetsEncrypt](https://letsencrypt.org)
- Configuring name records correctly to point where they need to.
- Working with Nginx to host files correctly.

</MarkdownCard>

<MarkdownCard>

## [Flashy](https://github.com/HyperChicken-Interactive/flashcard)

Flashy is a flashcard app for iOS written in Swift.

### What it Taught Me
- Developing within the Apple SDK for cross-iOS devices using Xcode.
- Higher level object oriented programming and protocol-oriented programming.
- Managing data persistence using NSUserDefaults
- Model-View-Controller oriented design
- Using optionals

</MarkdownCard>