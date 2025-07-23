# 📱 Phone Link Redirector

**Edge my ass!**  
Bing tries to lure you into Microsoft Edge with its "Phone Link" redirects.  
This extension sends you **straight to the right app** – like WhatsApp Web, Outlook Calendar, or your banking site.  
Simple. Fast. No nonsense.

---

## ⚙️ TODO/Wishes
- Prevent to open Whatsapp Chrome-Tabs/Windows when there is already one active, try to focus/go-to Chrome Tab/Windows with corresponding URL (for example https://web.whatsapp.com/)

## 🚀 What does this extension do?

When you search on Bing for terms like:

- `Whatsapp`
- `Bankieren` (Banking)
- `Calendar`

Bing redirects you to a vague Edge-only "linking" page.  
This extension recognizes those fake links and **immediately replaces them** with real URLs:

| Search Term          | Redirects to                                 |
|----------------------|---------------------------------------------|
| `Whatsapp`           | [web.whatsapp.com](https://web.whatsapp.com/)           |
| `Bankieren`          | [mijn.ing.nl](https://mijn.ing.nl/login/)              |
| `Calendar`           | [outlook.office.com/calendar](https://outlook.office.com/calendar/) |

(if you want you can change rules.json to add/change)

---

## 🧰 Installatie (Developer Mode)

### From GitHub (Development Mode):
1a. Download ([.zip](https://github.com/jhonniedj/Phone-Link-Redirector/archive/refs/heads/main.zip)) this repository and unpack in a folder

or

1b. Clone ([.zip](https://github.com/jhonniedj/Phone-Link-Redirector/archive/refs/heads/main.zip)) this repository:

```bash
git clone https://github.com/jonadev/phone-link-redirector.git
```
2. Visit `chrome://extensions/` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked** and choose the folder from step 1.
5. Select the folder containing this extension.
6. Manage features via the extension popup.

---

## 🧠 How does it work?

This extension uses Chrome's `declarativeNetRequest` API to detect incoming Bing links and automatically rewrite them to the correct web apps.

>No scripts, no tracking, no nonsense.

---

## ⚙️ Customize?

Open the `rules.json` file in the root directory of the extension.
You can easily add more search terms or adjust destinations.

---

## 🔐 Permissions

This extension uses minimal permissions:

- `declarativeNetRequest`
- `host_permissions` for `bing.com`

---

## 🧪 Example Rules (rules.json)

```json
[
{
 "id": 1,
 "priority": 1,
 "action": {
   "type": "redirect",
   "redirect": {
     "url": "https://web.whatsapp.com/"
   }
 },
 "condition": {
   "urlFilter": "bing.com/search?q=Whatsapp",
   "resourceTypes": ["main_frame"]
 }
},
{
 "id": 2,
 "priority": 1,
 "action": {
   "type": "redirect",
   "redirect": {
     "url": "https://mijn.ing.nl/login/"
   }
 },
 "condition": {
   "urlFilter": "bing.com/search?q=Bankieren",
   "resourceTypes": ["main_frame"]
 }
},
{
 "id": 3,
 "priority": 1,
 "action": {
   "type": "redirect",
   "redirect": {
     "url": "https://outlook.office.com/calendar/"
   }
 },
 "condition": {
   "urlFilter": "bing.com/search?q=Calendar",
   "resourceTypes": ["main_frame"]
 }
}
]




