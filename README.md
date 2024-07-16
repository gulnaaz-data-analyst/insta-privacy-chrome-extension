# insta-privacy-chrome-extension


## Overview
Instagram Privacy chrome extension is a Chrome extension designed to help you maintain your privacy while browsing Instagram. This extension allows you to blur sensitive information, such as usernames, profile photos, posts, comments, and messages. Whether you're sharing your screen or simply browsing in public, Instagram Privacy Blurrer ensures your personal information remains confidential.

## Features
- **Blur Stories:** Easily blur usernames on Instagram stories to protect your identity.
- **Blur Posts:** Blur usernames and content on Instagram posts to safeguard your privacy.
- **Blur Messages:** Keep your conversations private by blurring usernames in Instagram messages.
- **Blur Profile Photos:** Blur profile photos across Instagram for enhanced privacy.
- **Blur Profile Photos in Messages:** Specifically blur profile photos within Instagram messages.
- **Blur Comments:** Protect your privacy by blurring usernames and content in Instagram comments.
- **Blur Messages on Chat:** Blur usernames and content in Instagram chat.
- **Blur Messages on Chatbox:** Blur entire chatboxes on Instagram for complete discretion.

## Installation
1. Clone or download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded/cloned the repository.
5. The extension will be added to your Chrome browser.

## Usage
1. Click on the Instagram Privacy Blurrer icon in the Chrome toolbar to open the extension popup.
2. Use the checkboxes to enable or disable the blurring of specific content on Instagram.
3. Changes are automatically saved and will take effect immediately.

## Development
### `content.js`
Handles the application of blur effects to Instagram elements based on the classes specified for different sections of the site.

### `background.js`
Listens for changes to the extension's storage and updates the blur settings accordingly.

### `popup.js`
Manages the extension's user interface, allowing users to toggle blurring options via checkboxes.

### `popup.html`
The HTML file for the extension's popup interface, containing the checkboxes for each blurring option.

### `style.css`
Provides basic styling for the extension's popup interface.

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to create an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

