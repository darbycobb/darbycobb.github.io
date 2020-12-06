VISUALIZING DENTAL SHORTAGE AREAS FOR CHILDREN (USER GUIDE)
-----------------------------------------------------------
Quality oral health care is the topmost unmet healthcare need for children in the United States - especially for impoverished children qualifying for public insurance. Publicly insured children are 50% more likely to lack access to healthcare in one or more areas than children covered by private insurance.  Almost 25% of US children living in poverty had untreated dental cavities which can lead to problems with eating, speaking, and learning. Increasing access and use of preventive dental care services is a health goal of Healthy People 2030 and the public health community. 

Unfortunately, finding shortage areas can be difficult due to the large amount of data to parse through to determine how large the supply of dentists in an area is compared to the demand of children who need quality dental care. We have provided a (locally hosted) web application portal for healthcare professionals and policy makers to identify shortage areas for children who are eligible for public insurances including CHIP and Medicaid.

The web portal has a country level view and a state level view. Clicking on a specific state will take you to the state level view to display the dental provider availability for that particular state. In order to better visualize shortage areas in both the US as a whole and by state, we used a density based clustering algorithm (DBSCAN) to group counties with similar dentist distributions in order to group similar counties and make more general assessments concerning the availability of dental health care for children. On the state level, you can view the clusters and the average summary statistics per cluster. This will allow you to discover groups of counties that have similar dentist distributions, and those that are areas that need help/funding. 

On both the country and state level, you can view the counties we have designated as shortage areas, as well as the distribution of total dentists throughout each county. We encourage you to explore the different states, and various visualization options. You will discover the varying distributions of dentists and the subsequent shortage areas across the country. You will notice that not all of the states are present in the map -- this is because the data cleaning process for each state is unique and labor-intensive. Please note that some of the states that appear on the country level view do not have complete data on the state level. We recommend viewing Minnesota, Arizona, and Massachusetts, but you are free to explore all of the states, of course.

DATA
----
The data we used was downloaded from a private DropBox owned by Health Analytics Georgia Tech whose research group had been working on the data collection process for the past year. There were two main databases our information was extracted from: The Insured Kids Now Organization and the Board of Dentistry from each state. Getting access to data from Insured Kids Now requires gaining access approval to the Centers for Medicare & Medicaid Services database which can be granted for research purposes after submitting a research protocol, Data Use Agreement (DUA), and other documents (https://healthdata.gov/dataset/insure-kids-now-ikn-dental-care-providers). Getting access to the Board of Dentistry information requires navigating to each state’s Board of Dentistry website and submitting a Dental License Census Data Form which is impacted by local state legislation making the process varied and challenging to gather for each state. An example of Georgia's website and form can be found at this link (https://gbd.georgia.gov/applications-and-forms) under "Dental License Census Data Form - Posted 9/16/19". The data used in the visualization has been cleaned, geocoded, matched with Census data, and processed to provide aggregated statistics for counties across the available states. The processed data is available for download on a state-by-state basis using the "Download CSV" button in our state-level visualization.

INSTALLATION
------------
Installation is relatively simple. There is still work to be done on this project; more state data needs to be collected and processed. So for now, installation is simply downloading the code from this repository.  

EXECUTION
---------
You can run our application locally by hosting the web app using Python's http-server. After downloading the code from this repository:

1. Open a terminal window

2. Navigate to the CODE directory
    > cd CODE

3. Create a Python http-server
    > python -m http.server 8000
    > or python3 -m http.server 8000

4. Copy and paste http://localhost:8000/dental_visualization/visual_app/templates/country_level.html in your favorite browser! We recommend Firefox. 

Note: If you have issues running the http.server on port 8000, try another port (8001, 8002, etc)! Then the link to follow would be http://localhost:8001/dental_visualization/visual_app/templates/country_level.html ,..., etc.


