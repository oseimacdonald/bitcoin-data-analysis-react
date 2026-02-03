# Bitcoin Data Analysis – React & TypeScript

## Overview
This project is a **React and TypeScript–based data analysis application** focused on analyzing Bitcoin market data.  
The application retrieves historical Bitcoin price data from a **public cryptocurrency API**, cleans and structures the data, computes analytical indicators, and presents insights through interactive visualizations.

The goal of this project is to demonstrate a **complete data analysis workflow**:
- Data collection
- Data preprocessing
- Analytical computation
- Interpretation and presentation of results

This project was developed to fulfill the **CSE 310 – Data Analysis module requirements**.

---

## Features
- Fetches historical Bitcoin price data (BTC/USDT)
- Cleans and validates raw market data
- Calculates analytical indicators:
  - Simple moving averages (7-day and 14-day)
  - Percentage price change over time
- Applies rule-based logic to generate market insights
- Visualizes price trends and indicators using interactive charts
- Built with React and TypeScript for maintainability and clarity

---

## Technologies Used
- **React**
- **TypeScript**
- **Vite**
- **Binance Public API**
- **Recharts** (for data visualization)

---

## Data Source
Bitcoin market data is retrieved from the **Binance public API**, which provides free access to historical market data without authentication.

Example data retrieved:
- Timestamp
- Open price
- High price
- Low price
- Close price
- Trading volume

---

## Data Processing and Analysis
The application performs the following analysis steps:

### 1. Data Retrieval
- Fetches historical Bitcoin candlestick (kline) data from the Binance API using HTTP requests.

### 2. Data Cleaning
- Converts raw API response arrays into structured TypeScript objects.
- Ensures numeric consistency by parsing string values.
- Converts timestamps into readable date formats.

### 3. Analysis
- Calculates simple moving averages over configurable time windows.
- Computes percentage price change between the first and last data points.
- Applies rule-based logic to identify market trends (uptrend, downtrend, or sideways).

### 4. Interpretation and Visualization
- Price data and moving averages are visualized using line charts.
- Analytical summaries and insights are displayed in a dashboard-style interface.

---

## Project Structure
