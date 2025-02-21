# CSC 317 Assignment 2 Submission

**Name:** Tyler Duong 
**Student ID:** 924436120
**GitHub Username:** tduong64
**Assignment Number:** 2  


##  HTML Personal Portfolio Website Assignment

### Description:
Provide a brief overview of the assignment. Explain the objective, key tasks, and any relevant background information.

This assignment was for us to create a personal portfolio that we can eventually take from this class by the end of the semester as a showcase of our skills when it comes to implementing and using HTML, CSS, and Java Script. The object of assignment 2 was for us to progressively work on our portfolio as we learn the basics. Once learning the basics, we immediately implement it into our portfolio, which in turn allows us to learn by action. With the guide and parts, we are allocated time to slowly do this assignment part by part in order to throughly learn and ask questions about the basics. This will be our foundation to our HTML path and portfolio.

## Approach / What I Did:
Describe your approach to building the HTML structure. Explain design choices, layout decisions, and how elements are structured.

For building the HTML structure, I decided to follow off of the professor's guide examples, while putting my own taste onto it. I decided to put all the infortmation in the <main> and used <section> for any new part I was talking about. Whether it was about me, skills, projects, or contact. I had them all as their own section, and decribed it using the <p> tag. Most of my layout and decisions were based on the professor's examples, but I also went my own path to properly describe my extra curricular. I also decided to not do any styling at the moment because I enjoyed the look of simplicity on the website.

## Code Explanation:
Highlight key parts of your HTML code and explain their purpose. Use code blocks for clarity.

```html

<nav>
        <!-- Links to Sections of Page -->
        <ul>
            <li><a href="#About"> About Me </a></li>
            <li><a href="#Projects"> Projects </a></li>
            <li><a href="#Skills"> Skills </a></li>
            <li><a href="#Education"> Education</a></li>
            <li><a href="#Experience"> Experience</a></li>
            <li><a href="#Valorant">Extra Curricular</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
</nav>

<p>The purpose of this chunk is to have a list of links in order to take you to the section you decide to click on. It is for convience and organization sakes.</p>

<a href="https://www.youtube.com/@zekeival" target="_blank"><img src="valorantlogo.jpg" alt="Valorant logo"
                    style="width: 400px; height: 300px"></a>

            <a href="https://linktr.ee/zekeival" target="_blank"><img src="Zekei_Headshot.png" alt="Personal Headshot"
                    style="width: 300px; height: 300px"></a>

<p>For this chunk, I decided to be a little creative and create links that are used once you click on the image. This code allows you to click on the image on the website, and it will create a new window with said website.</p>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, intial-scale=1.0">
    <title> Tyler Duong - Personal Portfolio </title>
    <link rel="icon" href="1a91414ea532bf2b6c4aaa91096969ce.jpg">
</head>

<p>This chunk has the website in english. The meta viewport allows the website to properly and easily be accessed if you are on different devices with smaller or bigger screens. It will shift the text on the website to fit accordingly. The title changes the tab name. The link rel icon creates an image next to the tab name at the top of the browser.</p>

<iframe width="400" height="400" src="https://www.youtube.com/@zekeival"></iframe>

<p> iframe is used to create a smaller window preview of the given website that you decide to put into it. I put my personal youtube brand link, so now it shows on my website as the frontpage of the youtube link in a small box.</p>
