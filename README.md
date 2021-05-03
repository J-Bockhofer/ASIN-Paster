# ASIN Paster

This is a small Chrome Extension that allows for quick lookup of ASINs on a user-defined selection of Amazon markets.
Define eight links to append the ASIN to and open new tabs with the respective link via hotkey.


# Setup

1. Download the repository
2. Go to chrome://extensions/
3. Enable developer mode
4. Click on "Load Unpacked Extension" and select the folder that contains the downloaded manifest file
5. Right-Click on the Extension Icon and select "Options" from the drop-down. Define your links there.
6. Go to the options menu @ chrome://extensions/shortcuts and set up the corresponding hotkeys. 
   Set hotkeys to "global" if you want to use them without having Chrome in focus.


# Usage

1. Copy a string containing an ASIN to your clipboard (Ctrl+C).
2. Press the hotkey for the desired link

Note: Only works for ASINs that start with X0 or B0. Edit the RegExp in the background.js to suit a different pattern.

