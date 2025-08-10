## XSplit Broadcaster – Select A Chat

Select A Chat lets you pick individual messages from a YouTube Live chat and display them on your stream as a clean overlay.

- Video overview: `https://youtu.be/UwJOd8Vjer8`
- No API keys needed. It reads the public live chat page and updates every ~1.5s.

### What’s in this repo
- `index.html`, `index.xml`, `js/SelectAChatExtension.js`: the XSplit extension UI where you enter a YouTube Video ID and pick messages.
- `Xsplit_Broadcaster_Select_A_Chat_Source/`: a simple on-stream overlay (HTML source) that shows the currently selected message.

### Requirements
- XSplit Broadcaster (Windows)
- A YouTube livestream with Live Chat enabled

---

### Quick Start
1) Install the extension UI in XSplit
- In XSplit: Tools → Extensions → Add extension → From local…
- Select the folder containing this README (it includes `index.xml`).
- After install, you’ll see an entry named “Select A Chat” under Tools → Extensions.

2) Add the on‑stream overlay source
- In XSplit: Add Source → Widgets → Webpage.
- For the URL/Path, browse to this file in the repo: `Xsplit_Broadcaster_Select_A_Chat_Source/index.html` (local file path on your machine).
- Place and size it where you want your chat highlight to appear.

3) Use it during your stream
- Open Tools → Extensions → Select A Chat.
- Paste your YouTube Video ID (example: from `https://www.youtube.com/watch?v=jfKfPfyJRdk`, the ID is `jfKfPfyJRdk`).
- The extension will list incoming chat messages. Click the “+” button next to any message to push it to the overlay. Click “–” to clear.

Notes
- Keep both the overlay source and the extension UI open in the same XSplit project while streaming. The extension sends the selected message and the overlay displays it.
- If you schedule streams in advance, the Video ID is available as soon as the watch page exists.

---

### Troubleshooting
- No messages appear in the UI:
  - Confirm the Video ID is correct and the stream’s Live Chat is enabled.
  - Wait a moment; the extension polls roughly every 1.5 seconds.
- Clicking “+” does nothing on the overlay:
  - Ensure you added the overlay as a Webpage source pointing to `Xsplit_Broadcaster_Select_A_Chat_Source/index.html`.
  - Make sure the overlay source is visible (not hidden) and on the active scene.
- Need to remove the current message:
  - Click the “–” button in the extension UI to clear the overlay.

---

### How it works (high level)
- The extension UI fetches recent chat items from the public YouTube Live Chat page and lists them.
- When you click “+”, it marks that item as the “current” message.
- The overlay source listens for the current selection and renders it as a large, readable on‑stream card.
