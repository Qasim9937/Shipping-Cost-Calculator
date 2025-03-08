# Shipping Tools

## Overview

The **Shipping Tools** web application provides users with two essential calculators:

1. **CBM (Cubic Meter) Calculator** - Helps users calculate the cubic meter volume of a shipment.
2. **Landing Price Calculator** - Computes the total landing cost of goods, factoring in price, weight, shipping fee, clearing fee, and exchange rate.

This application features an intuitive UI, responsive design, and smooth animations to enhance user experience.

## Features

- **CBM Calculator:** Computes cubic meter (m³) volume based on length, width, and height inputs.
- **Landing Price Calculator:** Calculates total cost including price, shipping fee, clearing fee, and exchange rate.
- **Interactive Navigation:** Users can toggle between calculators with a simple click.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Dynamic Results Display:** Outputs appear dynamically with clear formatting.
- **Modern UI:** Uses Material Icons and CSS animations for a sleek interface.

## Files Structure

```
├── index.html      # Main HTML file
├── shipping.css    # Stylesheet for UI design
├── shipping.js     # JavaScript logic for calculations and interactivity
```

## Installation and Usage

### 1. Clone or Download the Repository

```bash
git clone <repository-url>
cd shipping-tools
```

### 2. Open the Project in a Browser

Simply open the `index.html` file in any modern web browser:

```bash
open index.html
```

### 3. How to Use

1. Select **CBM Calculator** or **Landing Price Calculator**.
2. Enter the required values in the input fields.
3. Click the **Calculate** button to get the results.
4. The results will be displayed dynamically with formatted output.

## Technologies Used

- **HTML** - Page structure
- **CSS** - Styling and animations
- **JavaScript** - Calculator logic and dynamic content handling

## JavaScript Logic

- **CBM Calculator:**
  - Takes `length`, `width`, and `height` inputs.
  - Calculates `CBM = (length × width × height) / 1,000,000`.
  - Displays the result in cubic meters and cubic feet.
- **Landing Price Calculator:**
  - Takes `price`, `weight`, `shipping fee`, `clearing fee`, and `exchange rate` inputs.
  - Computes total landing cost with the formula:
    ```
    Landing Cost = Price + (Shipping Fee × Weight × Exchange Rate) + (Clearing Fee × Weight)
    ```
  - Displays a breakdown of the total cost.

## Responsive Design

The application is fully responsive:

- **Mobile-friendly Navigation:** Menu adapts for smaller screens.
- **Form Layout Adjustments:** Forms resize dynamically based on screen width.
- **Optimized User Experience:** Ensures accessibility and usability on all devices.

## Future Enhancements

- Add a currency converter for international users.
- Implement real-time exchange rate fetching.

## License

This project is open-source and available under the **MIT License**.

## Author

Developed by **Qasim Adebisi**
