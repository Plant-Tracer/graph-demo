Graphing the data from movie tracking and analysis from CSV

Steps to getting started:

1. Legacy app - www/app/controllers/Graph.js
  - review Chartist.js
  - https://chartist.dev/api/classes/LineChart

2. Chart.js - 
  - support is more ubiquitous/examples plentiful
  - https://www.chartjs.org/docs/latest/getting-started/
  - Content Delivery Network (CDN) to load a library, <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

3. Preparing demo with CSV
  - Chat GPT - initially generated HTML and js
  - CDN to get Papa parse - <script src="https://cdn.jsdelivr.net/npm/papaparse@5.3.0/papaparse.min.js"></script>


Next steps:

1. Coversion of data
   - pixels to mm
   - frames to minutes
   - total dispalcement (for circumnutation)
  
3. Other data to graph
   - position of x vs y (creates a 2D trail of the apex motion)
   - time vs total displacement
   - data from 2 movies on one graph
   - (hard code the scales so that every graph is the same)
      
4. Using API to access server (JSON or CSV?)
  - From bottle_api.py ? 
  - @api.route('/get-movie-trackpoints',method=GET_POST)
def api_get_movie_trackpoints():
    """Downloads the movie trackpoints as a CSV or JSON
    :param api_key:   authentication
    :param movie_id:   movie
    :param: format - 'xlsx' or 'json'
    
    """

Pages on app - options for output of results:

1. button for graph results immediately after tracking
2. choice on "home" page to compare 2 (or more) movie data results
    
