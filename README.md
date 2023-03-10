# Mashed

Mashed is an application revolved around bringing people together through a love for cooking and shared recipes. 
The main focus of the front-end development for Mashed is to properly convey the feelings and thematic messages of what we want Mashed to represent. 
In order to make sure that those messages and themes are portrayed, we focused on the implementation of the design philosophies we created in the previous milestones. 

>_We are still working on the responsiveness and accessibility of our application. Because of this, Mashed is currently best viewed through the iOS simulator with an iPhone 14 Plus/iPhone 14 Pro Max display._

Navigate through our screens:

# Splash Screen
This is the Mashed Splash Screen. This is the first screen the user will encounter before entering the app, displaying our logo.

# Sign Up
Here users can enter their information to create an account on Mashed. User information is validated with various RegExpressions in charge of preventing unformatted data to enter our database.

# Login
Existing users are able to enter their credentials or login through other applications. Implements cookies and start of session set to until reload. Allows for application to detect which user is currently logged in so that any changes they make while exploring Mashed are tied to their account.

# Home
Landing page for users. Displays story highlights, posts from your following and for you page, and provides navigation to Chat and other screens. Showcases different Posts pulled from our Posts table.

# Chat
Send messages to other users and connect!

# Explore
Search our database and find hundreds of different recipes from various cultures and lifestyles. Displays information collected from new recipes created through Post screen through small cards linking to Recipe page.

# Recipe
Displays one of our recipes along with rating, directions, and additional details. Ingredient dropdown allows users to select needed ingredients for recipe and head straight to check out.

# Post
Upload a media, recipe, or text post to share with others! Displays various text inputs for Recipe Name, Recipe Ingredients, and Recipe Steps. Upon onPress of the 'Share Recipe' button, user information is then sent off to display on the 'Explore' page.

# Challenge
Engage in challenges against fellow Mashers by a swipe left-right challenge that gives you limited attempts to try out a new recipe.

# Profile
Displays user's public profile along with their posts and a link to Settings. Users are able to select the 'Edit Profile' Pressable to input the text they'd like to display for their bio and then pressing 'Save' to display said information. Value is stored in 'users' table.

# Settings
Allows users to edit their profile and account information.
