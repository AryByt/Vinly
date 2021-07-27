# Vinly README <!-- omit in toc -->

> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details.

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Vinly** is a website wher you can view Vinyls see their price and read their descriptions and decide if you would like to purchase it.You can log-in and add your own Vinly to the list sell it on Vinly, whilie providing the description and genre of the vinly plus a price._


<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Vinly** Users being able to view a vinly list and a detailed page of the Vinly and being able to add one._

<br>

### Goals

- _Vinyl website with various vinyls_
- _Being able to Sing-up and Login_
- _Users adding Vinyls to sell._
- _TailwindCSS_
- _

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. _ |
|   React Router   | _Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!_ |
| React SemanticUI | _Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML._ |
|     Express      | _Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js_ |
|  Express Router  | _You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. For a full list, see app.METHOD. You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function (See Using middleware for details).
._ |

<br>

### Client (Front End)

#### Wireframes

>Figma Design. https://www.figma.com/file/ZnqWAxRfPHmlbTZWesxa7B/Vinly?node-id=0%3A1

[Desktop Landing](https://drive.google.com/file/d/1Sh7ZDCVSAchqFzir3Rq14K_4z7BAgMoB/view?usp=sharing)


[List All Products](https://drive.google.com/file/d/1lJSEk1QuCsMwW7s5nP5vJ2UVJt-XZ0Q5/view?usp=sharing)

[Edit Screen](https://drive.google.com/file/d/1-gx4xHuv7F8b_6-3aurq7qa-fhOTxbTh/view?usp=sharing)

[Sign-in](https://drive.google.com/file/d/12U6SziNtXCkfgdyvs9LsnrLykHbp-9gL/view?usp=sharing)

[Login](https://drive.google.com/file/d/12U6SziNtXCkfgdyvs9LsnrLykHbp-9gL/view?usp=sharing)

[Add Screen](https://drive.google.com/file/d/1XH-BGOc5Te75dQCXysUnv5AJkgkFmszJ/view?usp=sharing)

[Detail Screen](https://drive.google.com/file/d/11Zm1Mz665h78RtVkpTCJvfKJSCd35RKZ/view?usp=sharing)

[Mobile Resource Index](https://drive.google.com/file/d/1YHbFm0JEnScgryl-n5-c4CeLu5IjSlMO/view?usp=sharing)


#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://lucid.app/lucidchart/invitations/accept/inv_42eb356d-fd51-4de5-b55d-4b9d832878eb)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ css
|__ components/
      |__ Vinly.jsx
      |__ VinlyCard.jsx
      |__ VinlyForm.jsx
      |__ Search.jsx
      |__ Dropdown.jsx
      |__ Button.jsx
      |__ Footer.jsx
      |__ ListHolder.jsx
      |__ Navbar.jsx
|__ layouts/
      |__Layout.jsx
      |__Nav.jsx
      |__Footer.jsx
|__ screens/
      |__ HomePage.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
      |__ VinylList.jsx
      |__ DetailPage.jsx
      |__ EditPage.jsx
      |__ AddPage.jsx
|__ services/
      |__ api_config.js
      |__ auth.js
      |__ Vinyl.js
      |__ Add.js


```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| pseudocode   |    h     |     1 hrs      |      hrs     |     hrs    |
| Back End Set-up|    H     |     1    |      TBD    |     TBD     |
| Create CRUD	|    H     |     6hrs    |      TBD    |     TBD     |
| Creat Seed Data|    H     |     3hrs    |      TBD    |     TBD     |
| Testing|    H     |     1hrs    |      TBD    |     TBD     |
|  Debugging|    H     |     2hrs    |      TBD    |     TBD     |
| Create Client|    H     |     1hr    |      TBD    |     TBD     |
| Set Up Directories|    H     |     3hrs    |      TBD    |     TBD     |
| Fill out Services|    H     |     3hrs    |      TBD    |     TBD     |
| Set up Sign in/up	|    H     |     3hrs    |      TBD    |     TBD     |
| Set Up MainContainer	|    H     |     3hrs    |      TBD    |     TBD     |
| Set up Homepage.jsx	|    H     |     3hrs    |      TBD    |     TBD     |
| Minor Styling	|    H     |     3hrs    |      TBD    |     TBD     |
| Set up Add.jsx|    H     |     3hrs    |      TBD    |     TBD     |
| Set up Edit.jsx|    H     |     3hrs    |      TBD    |     TBD     |
| Set up delete functionality |    H     |     3hrs    |      TBD    |     TBD     |
| Major styling |    H     |     6hrs    |      TBD    |     TBD     |
| Styling for different screen sizes |    H     |     6hrs    |      TBD    |     TBD     |
| TOTAL               |     48    |      TBD     |      TBD    |     TBD     |


> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1hYVkMggac3lD5UJokBzr4YLKYtfvmyW0/view?usp=sharing)
<br>

***

## Post-MVP

> Add to the Cart.
> Dropdown for mobile
> Filter
> Sort

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
