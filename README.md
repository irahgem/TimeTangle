# TimeTangle

## Overview
TimeTangle is a scheduling visualization app that helps users understand patterns in customer scheduling behavior. It fetches data from an external API and uses React and Chart.js to display the data in a user-friendly manner. The app has two main components: a DateGraph and a TimeGraph. The DateGraph shows the number of appointments for each day in the selected month, while the TimeGraph shows the number of appointments scheduled for each time slot during a selected day.

With TimeTangle, users can quickly and easily identify trends in customer scheduling behavior, such as peak appointment times and popular dates for scheduling appointments. Armed with this information, users can make informed decisions about staffing, scheduling, and other aspects of their business operations.

Overall, TimeTangle is a powerful tool for any business looking to better understand and optimize their scheduling processes.

## Problem Statement
To create a graph that aggregates the scheduling date and time for a given item date provided with mock JSON data that contains customer scheduling information, 
which includes the scheduled time, slot, and item date. The graph allows users to click on a date to display the scheduled time for that day. The graph can be 
created using any library and should be visually appealing and well-organized. The data should be organized and displayed creatively.

## Approach
To solve this problem, we need to create two graphs - a DateGraph and a TimeGraph. The DateGraph will show the number of appointments for each day in the selected 
month, while the TimeGraph will show the number of appointments scheduled for each time slot during a selected day.

Here are the general steps to accomplish this:

    Fetch the scheduling data from the API and store it in the state.
    Create a function to aggregate the data by date.
    Convert the dates object to an array for chart.js.
    Create the chart data object for the DateGraph.
    Create a function to handle clicks on the DateGraph bars and store the selected date in the state.
    Create the chart data object for the TimeGraph based on the selected date.
    Display the TimeGraph and the selected date when a bar in the DateGraph is clicked.
    Style the graphs using CSS to make them user-friendly and visually appealing.

To create the graphs, we can use React and Chart.js libraries. We can use the Bar chart type from Chart.js to create the DateGraph and the Line chart type to create the TimeGraph. 
Additionally, we can use CSS to style the graphs and make them more visually appealing.

## Challenges Faced

- Data management: Fetching data from an external API and managing it.
    
- Visualization: Creating effective and visually appealing graphs and charts. The app needs to provide meaningful insights to the user through clear and concise visualizations.
    
- Performance: As the amount of data increases, rendering the graphs and charts in real-time becomes challenging, leading to slow loading times or laggy behavior.
    
- User experience: The app needs to be easy to use and navigate, and provide a seamless experience to the user. The user interface needs to be designed in a way that allows users to quickly identify patterns and insights from the data.
    
- Testing: Thoroughly testing the app to ensure that it works as expected, handles edge cases, and performs well.

Overall, developing a project like Timetangle requires careful planning, attention to detail, and a solid understanding of data management and visualization techniques.

## Deployment

To deploy the Timetangle web app, I have utilized GitHub Pages. GitHub Pages is a free hosting service provided by GitHub, which allows developers to host static websites and web apps directly 
from their GitHub repository. This makes it easy for us to deploy our Timetangle web app to a live server, without needing to set up and manage our own server infrastructure.

To deploy the app, I first created a new repository on GitHub, and pushed the code to this repository. Then, enabled GitHub Pages for this repository by going to the repository settings and 
selecting the branch that contains web app code. Finally, selected the root folder of our project as the source for our GitHub Pages site.

Once this was done, our Timetangle web app was live and accessible at the GitHub Pages URL. We could easily share this URL with others, allowing them to access and use our web app. Any changes made 
to the code could be pushed to the repository, and the GitHub Pages site would automatically update with the new changes.

Overall, deploying our Timetangle web app to GitHub Pages was a simple and effective way to make our app accessible to others, and to quickly iterate on changes and improvements to the app.

Deployed Link: https://irahgem.github.io/TimeTangle/

## TimeTangle Web-app

Dashboard:

![Home](https://user-images.githubusercontent.com/72067722/222778551-7a0f652a-6ee4-45d9-9f91-79aff6c99cbe.png)

Scheduling Information:

![scheduled](https://user-images.githubusercontent.com/72067722/222778814-ac7b9681-0db0-468e-bace-610a9dfc578b.png)

To be Worked on:

![future](https://user-images.githubusercontent.com/72067722/222778964-667f499d-5435-4f4b-a0fc-4fd15c2e4a76.png)

## What's next for TimeTangle

Further implementation to improve the TimeTangle app includes:

- More detailed time analysis: Currently, the TimeGraph component shows the number of appointments scheduled for each hour of the selected day. 
However, it would be useful to break this down further and show the number of appointments for each 15-minute or 30-minute interval.

- Additional visualizations: While the current bar and line charts are effective at displaying the data, additional visualizations could provide more insights. 
For example, a heatmap could show the busiest days and times at a glance.

- User authentication and data privacy: As the app grows and collects more sensitive scheduling data, it will be important to implement user authentication and 
ensure data privacy and security.

- Integration with scheduling APIs: While the app currently uses mock data, it could be integrated with scheduling APIs to provide real-time data and improve accuracy.

- Additional data analysis: The app currently shows the number of appointments scheduled for each day and time slot, but could be expanded to include 
additional data analysis such as average appointment length or popular appointment types.
