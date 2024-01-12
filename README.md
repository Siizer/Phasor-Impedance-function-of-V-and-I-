![image](https://github.com/Siizer/Impedance/assets/7024095/2b153dab-2382-49df-8ebd-df28e5b37882)

### HTML Documentation

#### Overview:
The provided HTML code establishes a webpage for visualizing a three-phase electrical system. It includes various elements like buttons, divs, paragraphs, and scripts to handle data visualization and interactivity.

#### Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Title -->
    <title>Three-Phase Electrical System Visualization</title>

    <!-- Stylesheets -->
    <link rel="stylesheet" type="text/css" href="style - Cópia.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <!-- Scripts -->
    <script src="d3.v7.min.js"></script>
</head>
<body class="dark-mode">
    <!-- Toggle Button -->
    <button id="toggle-button">
        <i type="solid" class='bx bxs-sun'></i>
    </button>

    <!-- Main Container -->
    <div id="main-container">
        <!-- Page Title -->
        <p class="pageTitle">Impedance relationship to Voltage and Current (p.u.)</p>

        <!-- First Row Container -->
        <div id="first-row">
            <div id="input-fields1"></div>
            <div id="visualization"></div>
            <div id="input-fields"></div>
        </div>
    </div>

    <!-- Inline JavaScript -->
    <script>
        // Script for handling dark/light mode toggle and visualization initialization...
    </script>

    <!-- External JavaScript -->
    <script type="module" src="index.js"></script>
</body>
</html>
```

#### Key Elements:
1. **Head Section**: Contains metadata, the page title, links to external CSS, and a D3.js script for data visualization.
2. **Body Section**: 
   - **Toggle Button**: A button to switch between dark and light modes.
   - **Main Container**: Houses the page title and a row containing input fields and the visualization area.

### JavaScript (index.js) Documentation

#### Overview:
This JavaScript file, `index.js`, imports modules and handles the interactivity and visualization of the three-phase electrical system.

#### Key Components:
1. **Module Imports**: Various modules like `ComplexOperatorAid`, `AddMarkers`, `MainSVG`, and `Inputs` are imported for specific functionalities.
2. **Marker Initialization**: Initializes visual markers in the SVG element.
3. **Input Fields Initialization**: Sets up input fields for impedance and current/voltage tables.
4. **Event Handlers**: Functions like `onInputChanged`, `dragstarted`, `dragended`, and `dragged` handle user interactions.
5. **Visualization Updates**: Functions `updateMainVisualization` and `updateInputFields` update the visualization and input fields based on the data.
6. **Drag Behavior**: The drag behavior for the SVG elements is defined.
7. **Impedance Calculations**: Functions `calculateImpedances` and `calculateSequenceImpedances` perform complex calculations for impedance values.
8. **CSV Export**: A function `exportCSV` is provided for exporting data to a CSV file.

### Module (Inputs.mjs) Documentation

#### Overview:
`Inputs.mjs` is a JavaScript module focused on creating dynamic input fields within a given container element.

#### Functionality:
- **Inputs Function**: 
  - **Parameters**:
    - `SelectInputFieldsID`: The ID of the container where the input fields will be appended.
    - `classForTable`: A class name for the table element.
    - `SelectInputFieldsClass`: A class name for each row of input fields.
    - `data`: An array of data objects, each containing a `key` and `value`.
    - `onInputChanged`: A callback function triggered on input change.
  - **Process**:
    1. Selects the container based on `SelectInputFieldsID`.
    2. Appends a table with headers for labels, real, and imaginary parts.
    3. Dynamically creates rows with input fields for each data entry, binding the provided data.
    4. Sets up event listeners for the input fields to trigger `onInputChanged`.

This structure allows for a modular and dynamic way to handle user inputs related to the electrical system visualization.
