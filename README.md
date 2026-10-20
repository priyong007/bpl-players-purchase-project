# BPL Players Purchase Project

A web application where users can browse available football players, select the ones they want to buy, and manage their selections using in-game coins. The system validates the user’s remaining balance and prevents purchases when the available coins are insufficient.

## Overview

This project is designed as a simple player purchasing platform where users can:
- View available players
- Select players for purchase
- Remove players from the selected list
- Check total cost against available coins
- Prevent purchase when balance is insufficient

The main goal of this project is to provide a smooth and interactive user experience for managing player selections and purchase decisions.

## Features

- Display list of available players
- Add players to the cart/selection list
- Remove players from the selected list
- Calculate total purchase cost
- Validate coin balance before purchase
- Block transaction when coins are not enough
- Responsive and user-friendly interface

## How It Works

1. The user views the list of available players.
2. The user selects players they want to buy.
3. The selected players are added to a purchase list.
4. The total cost is calculated automatically.
5. If the user has enough coins, the purchase can proceed.
6. If the user does not have enough coins, the system prevents the purchase and shows that the purchase is not possible.

## Tech Stack

- React
- TypeScript
- Vite
- JavaScript
- CSS

## Project Purpose

This project demonstrates a basic e-commerce-style purchasing flow in a sports-themed application. It focuses on:
- State management for selected items
- Conditional logic for purchase validation
- User interaction and dynamic UI updates
- Coin-based balance checking

## Example User Flow

- User opens the application
- User sees available players
- User selects a player
- User may remove a selected player if needed
- User checks total cost
- If sufficient coins are available, the purchase is allowed
- If coins are insufficient, the system denies the action

## Conclusion

This project is a simple but practical web application that combines player selection logic with coin-based purchasing rules. It is a good example of implementing interactive frontend functionality with validation and user experience in mind.

---

