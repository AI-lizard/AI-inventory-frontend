# InventoryManagement
An automatic inverntory manager for veterinary practice

# The main goal of the inventory manager:
- Track the pharmaceutical stock of a veterinary clinic
- A simple, easily usable application
- Save all the information on a database
- add and subtract items from the stock
- Orders, sales and deliveries should be immediately updated with POS (point of sale)
- Send notification in case of low stock or expired stock
- Generate reports on the stock and sales in a graph format
- EVENTUALLY integrate AI that can predict the stock and sales + serve as a chatbot for the clinic

# Where we are at rn
- Frontend is built in next.js using TailwindCSS and Shadcn/ui (https://ui.shadcn.com/docs)
- Backend is built in Django
- Database is built in PostgreSQL (Subabase or SQLite still optional)
- There has been API's set up between front and backend. !! No idea if it actually works !!
- The AI chatbot has not been built at all
- Not all features for UI has been built
    - Dashboard has been set up.
    - Orders and stock is not working rn

# Things I have not considered yet
- The safety and Privacy side of inventory management in vet clinics
- Integration into already established software like Ezyvet wit PIMS (https://www.mulesoft.com/resources/api/pim-integration)
- COOL IDEA: completely functional offline

