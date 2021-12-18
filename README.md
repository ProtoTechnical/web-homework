## TransactionBase - My Divvy Homework Submission
Using the objectives and instructions as a guide, I have developed a transaction tracking software called TransactionBase. These are the four objectives I accomplished through development.

 - Write a basic user interface that allows users to enter, edit, and remove transactions.
 - Provide a pie chart or histogram of the spend per category.
 - Create a user setting that can convert the displayed numbers to Roman Numerals.
 - Add an i18n setting.

In addition to these objectives, I also produced an assortment of unit tests and made sure to use emotion styling.
 
Here is a collection of screenshots showcasing my application.

![Transaction Table](images/TransactionBase with lots of entries.png)
The transaction table, populated with several entries.
![Adding a Transaction](images/Adding a Transaction.png)
Clicking the Add Transaction button will open a modal where a user can create a transaction. Clicking the edit button of a transaction opens a similar modal.
![Deleting a Transaction](images/Deleting a transaction.png)
Clicking a transaction's delete button will open this modal, asking the user for confirmation before removing the transaction from the database.
![Spending Pie Chart](images/Spending chart.png)
This page displays a pie chart showing spending by category. A user can hover over a slice of the pie chart to access a tooltip displaying information about that slice.
![Settings Page Roman Numerals](images/Settings Page Roman Numerals.png)
This is the settings page that contains two features. The first feature turns all of the numbers on the site (not including numbers that are part of strings) into Roman Numerals.
![Settings Page i18n](images/Settings Page i18n)
The second feature turns every string on the site into Japanese, non latin characters. 




---

# Divvy Homework Assignment

This repository provides a starting point for a basic React + GraphQL application.
All of the configuration boilerplate is complete so you can start by writing the code that you want us to see.

Please **fork** this repo a **private repo** on your GitHub account.

Please share your finished project repo with @thawk55 and @jakerichan as part of your submission.

<br />


## Project Setup

This repository is split into a web app directory (eg `/webapp`) and two server directories (eg `/webserver` and `/elixir`).

The `/webserver` one includes a functional GraphQL server in NodeJS with MongoDB backing it.

The `/elixir` one includes a functional GraphQL server in Elixir with Postgresql backing it.

If you are applying for backend, you should use the elixir code.
If you are applying for frontend, feel free to use either.

This project is _intentionally not utilizing 3rd party services or create-react-app_ to give you the opportunity to showcase your talents wherever they are, be it the front end or the back end.

## Instructions

If you are pursuing a full stack or backend position, please include elixir code changes in your homework.

See the [Frontend instructions](webapp/README.md) for frontend focused instructions.  If front end only, use the node server in `/webserver`.

See the [Backend instructions](backend.md) for backend focused instructions.



