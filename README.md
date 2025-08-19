# PARALLAX

PARALLAX is a lightweight template for building AL extensions on Microsoft Dynamics 365 Business Central. It offers a clean starting point and simple examples to help you get productive quickly.

## Getting Started

### Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)
- [AL Language extension](https://marketplace.visualstudio.com/items?itemName=ms-dynamics-smb.al)
- Access to a Business Central sandbox environment

### Setup & Build
1. Clone this repository.
2. Open the folder in Visual Studio Code.
3. Update **app.json** and **launch.json** with your environment information.
4. Use `Ctrl+Shift+B` or run **AL: Package** to build the extension.
5. Use **AL: Publish** to deploy the generated `.app` file to your sandbox.

## Sample Code

The `src/` folder contains a tiny "Hello World" page extension showing how to add an action to the Role Center. It illustrates the project's layout and basic AL syntax.

## Contributing

We welcome contributions!

1. Fork the repository and create a new branch for your work.
2. Make your changes following standard AL best practices.
3. Ensure the project builds before submitting.
4. Open a pull request describing your changes.

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.
