# Ujwal Power Portfolio V3

Fixes included:

- Resume button visible in navbar, hero and contact section.
- Navbar links are brighter and stay in one clean line on desktop.
- Mobile menu improved.
- Typing line changed from `specialized_in:` to clean `Specialized in` label.
- Floating cards are moved away from face area.
- Back to top remains fixed.
- Experience is dynamic from `experienceStartDate` in `js/main.js`.

## Dynamic experience

Change this value in `js/main.js` only:

```js
experienceStartDate: "2021-02-01"
```

The website calculates years live whenever it opens.

## Required paths

```text
images/profile.png
resume/Ujwal_Dangi_Resume.pdf
```

If your photo is JPG, the code also tries `images/profile.jpg`.
