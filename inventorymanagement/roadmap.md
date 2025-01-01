# The main goal of the inventory manager:
- Track the pharmaceutical stock of a veterinary clinic
- Save all the information on a database
- add and subtract items from the stock
- Follow orders and deliveries so that the stock is always updated
- Send notification in case of low stock or expired stock
- Generate reports on the stock and sales in a graph format
- EVENTUALLY integrate AI that can predict the stock and sales + serve as a chatbot for the clinic

# HOW WE WILL BUILD THIS
- This projext in built in Next.js and Tailwind CSS
- To have a clean and aesthetic UI, we will use shadcn/ui
- The vector database will be postgres
- The AI will be integrated using openai or claude ANthropic
- It is essential that the project is modular and easy to extend and modify
- write as little code as possible and use the most efficient algorithms and data structures

Stage 1:
 - Create a new Next.js project
 - Install shadcn/ui
 - Install tailwind css
 - Install postgres
 - Install openai or claude anthropic
 - Install clerk for authentication

 Stage 2: 
 - Create categories, products and suppliers.
 - Example of categories and products:
    - Different drug groups (Tranquilizers, Opioids, Sedatives, Anesthetics, NSAIDs,... )
	- Individual names of drugs within these groups (opioids= morphine, apomorphine, butorphanol )
-Suppliers of these drugs (VetCare, Anicura, Vetmedica, etc)

Stage 3:
- Orders should have interaction with the suppliers data
- Orders and deliveries that follow the status of the order (pending, in progress, delivered, cancelled) 
- Stock should be added and subtracted from the stock
- Notifications should be sent in case of low stock or expired stock with email


#Journal 
## Day 1 (23/12/24)
### I tried to connect my Django backend and my Next.js frontend. I am not confident that it working. 
The Ui should be changed to fit the UI of a vet management system.
It should contain Sales, Products, Orders, 


# Day 2 (24/12/24)
## Somehow the frontend and backend is connected. Do not know how. So now I made the UI better for building the 1st MVP.
I updated and made a better UI for my webpage.
It contains stock, orders, chat and a dashboard. That have charts and graphs.
There is a lot to fix in each, but there is a semi structure goin on
Important for next time:
    -make sure basic functionaily is working
    - test database and CRUD
    -make FOcus on the UI and genreal functionality better

# Day 3 (26/12/24)
- I changed the UI of the dashboard and Orders
- Busy, but not finished with the Orders
- I still have no idea if the backend is working or not. 
Somehow the goal will be to intregrate the database with the UI and make sure it is working.
Then to tweak the Layout and functionality.
I would love to add the AI chatbot that can be built on top of the database.

# Day 4 (27/12/24)
- SO supposedly I added the chatbot and gave it the ability to answer by connecting it to my back end.
- Then I started doing things in my backend. That was an absolute mess.
- It does not even want to migrate 
- The UI is going well and I am happy enough with that, but the next big job will be to fix ,my backend and then have the data flow from the backend to the UI.
- Chatbot can wait (But look into RAG system. I was lecommended LangChain)

# Day 5 (31/12/24)
- Putting everything on Github today
- My orders and stock Ui is not functional
- test123
