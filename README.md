# Getting Started with Mobile Inventory

Note: This App is not responsive and is suppossed to be viewed on native Desktop screens. I'll make it responsive soon.

1. Clone this repository.
2. Open your terminal (ofc in the repo folder).
3. Run npm install
4. Run npm start

This is a fairly simple app with not so many features.

Tech Stack: ReactJS, Redux, Tailwind CSS, React-Router

# Adding Items:
Click on the Add Items button.

![image](https://user-images.githubusercontent.com/71935782/176692740-c35aeabf-14e7-4654-94dd-e0906824f4ac.png)

A simple form pops up wherein you can fill the details of the product and click Submit to add it to the inventory.

![image](https://user-images.githubusercontent.com/71935782/176694855-1d931a62-796d-490d-9509-adc8faf4cd34.png)

Implemented Using: Redux

# Deleting Items:
Click on the X over the item you want to delete to delete it.

![image](https://user-images.githubusercontent.com/71935782/176693177-a383d2fc-9447-4403-9cfc-02a147a4e26e.png)

Implemented Using: Redux and splicing.

# Changing the View
You can switch between the Gallery View and List View , using the dropdown button on the page.

![image](https://user-images.githubusercontent.com/71935782/176693346-5aaf77b8-07e2-462f-8a51-79ef75900450.png)

Implmented using: State variables and Redux.

# Sorting the inventory
Three methods are available to sort the inventory items:
1. Featured: Sorts according to the id of the product.
2. Price: High to Low: Descending order of prices.
3. Price: Low to High: Ascending order of prices.
Implemented using: Redux, Custom Sorting functions

![image](https://user-images.githubusercontent.com/71935782/176693702-46263c88-a25f-4776-968b-98707d7b6f46.png)

# Filtering the data:
Two Filters are available for filtering the data.
1. Price Under 5000: displays items with price less than 5000
2. Price Over 5000: displays items with price over 5000
Implemented Using: Redux, filter and map.

![image](https://user-images.githubusercontent.com/71935782/176694010-cd93cb28-b119-4406-bf7b-1d1994988cf2.png)

# Product Landing Page:
Click on any item's image in the Gallery view or name in the List View to open its product page.
Implemented Using: React Router

