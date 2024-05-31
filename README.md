# Immoly

Immoly was a SaaS platform dedicated to simplifying property investment decisions for optimal returns in the Swiss real estate market. Its intuitive interface facilitated effortless comparisons of rental and purchase prices per square meter across 200 municipalities. Additionally, Immoly meticulously calculated the Return on Investment (ROI), pinpointing the most lucrative investment opportunities.

## How It Worked

1. **Data Collection**:
   - Scraped data from various real estate listing websites.

3. **Data Cleaning and Organization**:
   - Utilized Python with libraries like Pandas for data cleaning and organization in Jupyter Notebooks.

4. **Visualization**:
   - *Linking Municipalities to Shapes*:
     Linked the cleaned CSV to a publicly available GeoJSON file containing the shapes of every municipality in Switzerland.
   - *Creating the Map*:
     Used Leaflet to generate an interactive map from the GeoJSON.
   - *Exporting the Map to HTML*:
     Exported the interactive map to HTML format for easy visualization.

5. **Front End**:
   - Built using HTML/CSS with the utilization of Tailwind CSS for enhanced styling.

6. **Back End**:
   - Developed using JavaScript with Node.js, providing robust functionality to support the platform's operations.

## Features

### iMap

iMap offered an interactive map where users could explore over 200 Swiss municipalities. It displayed prices per square meter for buying, renting, and ROI for each area, making it effortless to identify lucrative investment opportunities.

### Table

The Table module enabled users to view and analyze data in a structured manner. With options to filter and sort by canton, price, rental rates, or ROI, users could quickly find the information they needed without any hassle.
