# Web Development Project 5 - *Recipe Retriever*

Submitted by: **Jules-Elvin Andrade**

This web app utilizes spoonacular API in order to retrieve recipes to the user, in conjunction with an average of all the main macros for all the recipes generated and two filter options to refine the choices.

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [X] **`useEffect` React hook and `async`/`await` are used**
- [X] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *the average protein, carbs and fats of all retrieved recipes*
- [X] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [X] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [X] Multiple filters can be applied simultaneously
- [X] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [ ] The user can enter specific bounds for filter values

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/a/MCetysD' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Kap! (it's not gonna render)  

## Notes

APIs have proven to be much more challenging then I initially sought - especially in combination with how React components connect with each other and with useEffect. I needed a lot of help from AI, especially when it came to handling how that data was fetched but I understand how the code works after extensive documentation. I hope to see more of it work in future code and for my brain to retain that.

## License

    Copyright [2025] [jules!]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.