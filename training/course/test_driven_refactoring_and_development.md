---
layout: course
permalink: test_driven_refactoring_and_development/
title: Test Driven Refactoring and Development
duration: 3 days
sidebar: |
 <img src="/static/images/training/action/action2.jpg" style="" />
 <img src="/static/images/training/action/shower-thinking6a500.jpg" style="" />

---

# Test Driven Refactoring and Development

This course provides a comprehensive, practical and, where possible, context sensitive approach to learning two of the most critical techniques needed by modern software developers, namely Enabling Emergent Design, Test-Driven Development and Refactoring. Together these techniques help teams build applications quicker and more reliably, regardless of language, platform or framework.

This course follows a carefully paced approach to learning the topics, providing opportunities to learn, contemplate, question and apply these techniques.



Logistics
---------

This course can be taken on its own or using attendee's own codebases as the backdrop for the topics learned. The latter option is recommended as it maximises the learning available and delivers context-sensitive knowledge that can be immediately applied when the attendee returns to work.

High Level Topic Flow
---------------------

* Day 1
	* Architecture, Emergent & Up-Front Design, TDD and Clean Code
* Day 2
	* Using Tests and Refactoring to work with Legacy Code
* Day 3
	* Refactoring Patterns
	
<div class="hr dotted clearfix">&nbsp;</div>

<a name="day1"></a>Day 1 "Design, TDD and Clean Code":
------
	
	
* Goals of Modern Software Development
	* Build the Right Thing
	* Build the Right Thing, Right
	* Evolutionary Architecture and Design
	* Adaptability
* The Purpose of Code
	* Clarity,
	* Communication,
	* Simplicity
	* Complexity
	* Beauty? No, Cartoon Code
* Architecture and Design Tools: Thinking Tools for Software
	* Life Preserver and all its facets
	* Design your last piece of software using the Life Preserver
	* Simple, easy to work with components
	* Characteristics of Simple Components
* What and WhyTDD?
	* Testing and Confidence
	* Confidence to Change
	* Knowing when you're done
	* Focus
	* Defeating the desire for detour and complexity
	* Mocking and Stubbing
	* Programming by Difference
* Unit Tests in Action
* Mocking in Action
* TDD exercise, simple Tic Tac Toe programming Problem implanted using TDD and JUnit.
* Summary and Recap

Day 2 - "Using Tests and Refactoring to work with Legacy Code":
----

* Full day or just the afternoon: Brown Fields Forever
* Exercise: Brainstorm Define Legacy Systems: Everything Yesterday is Legacy
* Software Vise and Testing to Detect Change
* Legacy Code Change Algorithm
	* Identify Change Points
	* Find Test Points
	* Break Dependencies
	* Write Tests
	* Make Changes and Refactor
* The Seam Model
	* Types
		* Preprocessing
		* Object Seams
		* Functional Seams
* I don't have much time and I just need to make this change
	* Sprout Method
	* Sprout Class
	* Wrap Method
* It takes forever to make a change
	* Break Dependencies
* How do I Add a Feature?
	* Parameters
	* Global Dependencies
* I can't run this method in a test harness
	* Hidden Methods
	* Helpful language features
	* Undetectable Side Effects
* Interception Points
* Dependency Breaking Techniques
	* Adapt Parameter
	* Break Out Method Object
	* Encapsulate Global References
	* Expose Static Method
	* Extract and Override Getter
	* Extract Implementer
	* Extract Interface
	* Instance Delegator
	* Static Setter
	* Link Substitution
	* Parameterise Constructor
	* Parameterise Method
	* Primitivise parameters - events
	* Pull-up Feature
	* Push-down Dependency
	* Replace Function with Function Pointer
	* Supersede Instance Variable
	* Template Redefinition
	* Extract Method
* Exercise to apply these techniques to your own codebase (ideally). An existing Java codebase otherwise.
* Roundup and "What will you take away"?

Day 3 - "Refactoring Patterns"
----

* Recap on Testing Enabling Confidence
* Code Clarity and Comprehensibility is key to embracing Change.
* Refactoring Defined
	* Refactoring
	* Re-Design
	* Both good
* Why refactor?
	* Clarity
	* Adaptability
* SOLID
	* Single Responsibility
* Refactor this code
	* Ensuring Tests continue to pass
* Baby-steps
	* Commit every time tests pass
* Handling re-design?
	* Avoiding long-preiods being unable to commit
* Introducing Patterns
	* Language to communicate
	* Recipes that work in a given context
* Refactoring Patterns Part 1
	* Structural?
* Exercise: Take a given codebase and, in a competitive scenario, apply patterns to it
* Refactoring Patterns Part 2
* Refactoring Patterns Part 3
* Compare and contrast solutions at the end of the day.



Applying for this course
-----

{% include contact_form.html %}