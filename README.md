# PARALLAX

This repository contains a simple Liquid theme structure with placeholder sections.

## Structure

- `templates/index.liquid` renders three snippets:
  - `section-hero`
  - `section-services`
  - `section-faq`
- Each snippet lives under the `snippets/` directory and provides minimal markup.

These files resolve missing asset errors like:
```
Liquid error (templates/index line 4): Could not find asset snippets/section-hero.liquid
```

You can extend each snippet with your own design and content.
