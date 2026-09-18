Aniimo Atlas VN - Settings close fix

This patch fixes the Settings overlay not closing because a later redesign CSS rule used `display:grid !important`, overriding the `[hidden]` rule.

Replace `app.js` and `styles.css` in the existing repository with these two files, then commit and push with GitHub Desktop.
