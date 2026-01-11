# WDProjSectionMembradoReyes
## The Clementine Project
>##### <em> Welcome to the world of Clementine, a girl who found herself through words and lost herself in fame. </em>

#### This website is the personal blog of a fictional writer, Clementine. She owns a semi-popular blog on the internet called Clemmy’s Corner, where she talks about her daily life, her interests in fashion and photography, and all the things you’d expect from a teenage girl. Due to her easygoing and delightful personality, she’s amassed a small yet loyal following over the years and enjoys their kind words and thoughtful gifts. But one day, something unexpected happened. Her blog’s popularity exploded overnight. People began to flock to her website, leaving comments and likes. At first, Clementine tried to keep up, posting more often, smiling more brightly, sharing deeper pieces of herself for relatability. But the internet was never content. Every post, every picture, every word had to be perfect. What began as a simple diary slowly became a stage, and in the crowds of likes and lies, Clementine became no more.

## Website Outline
<ul>
<li>P1 (Prologue) - This is the main page of the website where you are introduced to the story and the disclaimers that may come your way. The home page will contain a simple menu that allows access to the other 5 web pages.</li>
<li>P2 (Home)  - This is the official page of Clemmy’s Corner. This page features a directory that links to other webpages.</li>
<li>P3 (Diary) - This page contains all of Clemmy’s public blogs organized through a table of contents. There is also a section where people can comment on her blogs and share their opinions.</li>
<li>P4 (Shrines) - This page contains Clemmy’s interests, all the music she listens to, all the fashion she wants to try, all the pastries she’s baked, you name it!</li>
<li>P5 (Guestbook) - This page allows you to leave a note and view comments from Clemmy’s followers. </li>
<li>P6 (Author’s Note) - This page will contain the list of all the sources used for the project, as well as notes and comments throughout the entire creative process. </li>
</ul>

## Wireframes
<ul>
<li>Prologue: ![Prologue](https://github.com/alena-harriett/WDProjCesiumMembradoReyes/blob/main/image/2.png)</li>
<li>Home: ![Home](https://github.com/alena-harriett/WDProjCesiumMembradoReyes/blob/main/image/3.png)</li>
<li>Diary: ![Diary](https://github.com/alena-harriett/WDProjCesiumMembradoReyes/blob/main/image/4.png)</li>
<li>Shrines: ![Shrines](https://github.com/alena-harriett/WDProjCesiumMembradoReyes/blob/main/image/5.png)</li>
<li>Guestbook: ![Guestbook](https://github.com/alena-harriett/WDProjCesiumMembradoReyes/blob/main/image/6.png)</li>
<li>Author’s Note: ![Author's Note](https://github.com/alena-harriett/WDProjCesiumMembradoReyes/blob/main/image/7.png)</li>
</ul>

## Favicon
### ![Favicon](https://github.com/alena-harriett/WDProjCesiumMembradoReyes/blob/main/image/Untitled_design_1.webp)
## JavaScript Integration
#### JavaScript will be used in the following:
<ul>
<li>As a pop-up window. For example, when the user clicks an element or button, a pop-up window will appear on the page with an ominous message or warning that aligns with the website's lore. This will be used in the Prologue page.</li>
<li>As a collapsible blog entry. For example, a read more button that the user can click to view all the content. This will be used in the Diary page.</li>
<li>As a photo gallery slider for the user to view fashion/photography collages. This will be used in the Shrines page.</li>
<li>As a comment section for the guestbook webpage.</li>
<li>As a live date/time counter. This will be used on the Home page.</li>
</ul>



# Project Proposal: ClemmyOS User Integration & Lore System

## Design & Narrative 
**Purpose:** The website is designed as an immersive "ARG" style narrative experience. The user "discovers" an old laptop running a pink, glitchy operating system called **ClemmyOS**. To make the experience more personal and unsettling, the website needs to "know" who is behind the screen.

**How it is used:**
The website utilizes a **System Initialization Form** upon the first visit. Instead of a standard sign-up, this acts as a registration into the laptop's memory. The form collects the user’s **Name** and **Birthday**. 

**Narrative Integration:**
* **Personalization:** Throughout the site, the entity within the laptop will refer to the user by their chosen name in pop-up windows, alert boxes, and the desktop interface.

**Data Persistence:**
The data is saved to the user's computer via the `localStorage` API. This allows the website to "remember" the user across different sessions without needing an external database, reinforcing the idea that the data is stored locally on this "haunted" machine.

---

## New Webpages Overview

| Page | Title | Purpose |
| :--- | :--- | :--- |
| **Page 1** | `index.html` | A login page that recognizes the user's name and asks for a passcode. |
| **Page 2** | `moth.html` | The "Setup Wizard" form used to collect user name and birthdate. |
| **Page 3** | `desktop.html` | The main hub that displays a personalized greeting and birthday countdowns. |

---

## Wireframes & Layout

### Page 1: ClemmyOS Login
**Header:** `✿ ClemmyOS v1.0 - Setup Wizard ✿`  
**Section Header:** `User Identification`

