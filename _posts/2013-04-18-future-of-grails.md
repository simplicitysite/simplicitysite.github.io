---
layout: post
title: Future of Grails
external: false
permalink: /article/future-of-grails
author: David Dawson
category: blog
excerpt: This is a response to a blog post by Peter Ledbrook on his blog. In it he asks about the future of Grails (and links to a recent talk of mine, thanks Peter!). I've briefly had this discussion with him before and I'm very glad that he's banging the drum on the subject and driving deep thoughts required around the future of Grails as a platform.
---

 The Future of Grails
====================

This is a response to a blog post by Peter Ledbrook on [his blog](http://www.cacoethes.co.uk/blog/groovyandgrails/where-next-for-grails)

In it he asks about the future of Grails (and links to a recent talk of mine, thanks Peter!).
I've briefly had this discussion with him before and I'm very glad that he's banging the drum on the subject and driving deep thoughts required around the future of Grails as a platform.

I've been pondering this for some time.

As a background; I am a long term Grails user, with a particular interest in programming in the large. I've been playing in several fields over the past couple of years, functional languages and frameworks (mainly clojure/ ring), architecture with DDD and CQRS, high volume HTTP back ends, rich clients and virtualisation to name the big ones on my plate.

I've especially watched the gathering functional hype with interest, less out of wanting to adopt it (although Clojure is really quite lovely), more out of seeing alternate development philosophies in action and understanding the value that they bring.

A Broken Consensus
------------------

We have reached an inflection point in Java web development.  The last one we met on this scale was the rise of Spring, as it aggressively displaced most of J2EE.

A consensus formed soon after Spring was paired with Struts, that this, finally, was the way to do Java web development. Take some MVC implementation, attach to a Spring IoC container, or Guice if you want to be radical, add other elements (mail, view, REST, messaging, DB), bake for a week and you have a best practice web stack.

Grails is born out of this consensus, and was built (to my mind) to be Java/ Spring web development done right.  It is, in almost every way, a better Spring MVC paired with a better Java.   This has been an enormous boon to the industry and to companies that have adopted it for this purpose.

The industry has changed, and the consensus upon which Grails rests, is now broken.

The rebirth of functional programming and languages and the web frameworks built upon them, do not, as a general rule, use Spring. They do not use an IoC container that is analogous to Spring, they have taken a different path, and our consensus is being erroded with every project that opts to use one of them.

Is this a problem?  Of course not!   We must decide what Grails should be in this new world. What form it should take, what parts are the core value and what is less so.

The spring consensus has been undermined, so the core beliefs and philosophy that Grails is based on are also no longer firm.    We need some other philosophy to base Grails on.  One that Peter has alluded to in his articles.

The rise of the plethora web frameworks (Play, Lift, Ring, Node, Vert.x, Sinatra ... ) is evidence that there is a dissatisfaction with the current state of affairs.  Developers are wanting to address different problems in new and innovative ways.   Node.js, Vert.x and Play all apply some derivative of the Reactor threading pattern to web development, Sinatra, Ratpack and Ring have a lightweight philosophy. Each is approaching a reasonably specific question or issue and applying techniques to that problem.

Grails' philosophy is not so clear.  It has absorbed many technologies, techniques and philosophies and attempted (with a lot of success, it must be said) to create a cohesive development environment out of them.  This process of absorbtion has caused a lot of growing pains, which are well documented (code reloading, json/ xml mapping are two that jump to mind).

What has fallen out of the end is a large core, and lots, and lots, and lots of plugins, of variable quality.  Some plugins are truly excellent, others less so.   The sheer breadth of adoption in plugins is astonishing.

Many of the issues in Grails, as I see it, are based on the core being too large.  The core team has done excellent work breaking things out, however it is a large job.  Many of these issues could be alleviated if, for example, the hot reloading was replacable and the community decided to implement another way.
The community has taken plugins to their heart in a big way, but not core development.

Where should we go then?
-------------------------------

I have always characterised Groovy as pragmatists language.  It has almost the same level of functionality as Scala, but this is seldom discussed. Instead I observe the language slowly fading into the background as the developer becoming proficient, still giving impressive power whenever requried, but otherwise getting out of the way.   This is a good thing.

Grails has some of these same characteristics, but has become somewhat unwieldy, and so pops up into the developers consciousness more often that Groovy does.  One of the best pieces of Grails is the conventions it gives you.   Putting something visually in a bucket and so knowing what it is is a very powerful tool.
These conventions are implemented by plugins, for the most part now.

So, plugins are good, giving us lots of conventions.

Thats actually it for me.  What I want out of Grails core is a rich and expansive plugin ecosystem, delivering decent conventions for me to use.   A plugin that does not contribute some convention is not useful to me.  I'll import the jar, js or script in some other way.

I now believe that grails core should be stripped down to the essentials of marshalling, loading and giving hooks for plugins to create conventions.  This would be a much easier thing to port onto Gradle.   Grails would effectively become the runtime twin, central to the application runtime.

Plugins should then be given a richer set of hooks to play with, but more structure to play within too.   So, for example, currently plugins can say they rely on particular plugins for their features.   This could be changed to have them rely on some functionality instead, rather than an implementation.

I am asserting that we should de-couple plugins further from the core, and from each other.  If they can instead declare their requirements in terms of functionality, we open the doors to competing implementations of conventions, while still having the benefits of the standardised conventions themselves.

We might even replace spring dependency injection with something else, given enough decoupling (although too much flexibility would run counter to the conventional nature)

This would also allow plugins to form the replacement for 'archetypes' or standardised project structures.   The 'classic web development' plugin could declare that it requires an http controller plugin, a view plugin and a gorm implementation. With the defaults being the plugins as shipped today.
This would allow us to maintain consistency with Grails as it is now.  This is important too!

Gradle is an excellent build tool, we should embrace it soon, as the core team have said they want to.  Grails is not a build tool.  Grails is a runtime architecture that, today, has a built tool attached.

That runtime architecture is based on plugins, and could, with some slimming down and extra work, be a truly fantastic structure for making conventionally powered, plugin based applications.  They wouldn't even need to be web applications.
Being able to use a Grails powered conventional architecture in places outside of web development is a tremendously exciting possibility (although highly speculative!)

So, I want the Grails of the future to be a coherent, stable, conventional, runtime architecture with plugins communicating based on their provided features.

Could we make the Grails of the future something akin to OSGI, but finally done conventionally, and so done right?