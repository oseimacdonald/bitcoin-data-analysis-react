# Bitcoin Data Analysis – React & TypeScript

## Overview
This project is a React and TypeScript–based data analysis application focused on analyzing Bitcoin market data.  
The application retrieves historical Bitcoin price data from a public API, cleans and structures the data, computes analytical indicators, and presents insights through interactive visualizations.

The goal of this project is to demonstrate a complete data analysis workflow:
- Data collection
- Data preprocessing
- Analytical computation
- Interpretation and presentation of results

This project was developed to fulfill the **CSE 310 – Data Analysis module requirements**.

---

## Features
- Fetches historical Bitcoin price data (USD)
- Cleans and validates raw market data
- Calculates analytical indicators:
  - Moving averages
  - Percentage price change
- Applies rule-based logic to generate market insights
- Visualizes trends using interactive charts
- Built with React and TypeScript for maintainability and clarity

---

## Technologies Used
- **React**
- **TypeScript**
- **Vite**
- **Public Cryptocurrency API (CoinGecko)**
- **Recharts (for data visualization)**

---

## Data Source
Bitcoin market data is retrieved from the CoinGecko public API, which provides free access to historical cryptocurrency price data.

Example data retrieved:
- Timestamp
- Price (USD)

---

## Data Processing and Analysis
The application performs the following analysis steps:

1. **Data Retrieval**
   - Fetches historical Bitcoin price data via HTTP requests.

2. **Data Cleaning**
   - Removes invalid or missing values.
   - Converts timestamps into readable date formats.
   - Ensures numeric consistency.

3. **Analysis**
   - Calculates moving averages over a defined time window.
   - Computes percentage price changes.
   - Applies rule-based logic to identify trends such as upward or downward momentum.

4. **Interpretation**
   - Results are visualized using line charts.
   - Analytical insights are displayed in a readable dashboard format.

---

## Project Structure
