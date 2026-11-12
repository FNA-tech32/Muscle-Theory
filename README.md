# Muscle Theory

Muscle Theory is a static fitness landing site. The header shows the Muscle Theory name, a main phone number, and an alternative phone number. The footer on every page lists the studio address, both phone numbers, and both email addresses.

## Pages

- **Home** (`public/index.html`) — banner, offers, body-mass calculator, courses, class notes, weekly schedule, trainers, membership plans, partner marks, and a member call to action.
- **Generic** (`public/generic.html`) — a shorter page that repeats the offer cards.
- **Elements** (`public/elements.html`) — samples of type, buttons, aligned media, definitions, headings, lists, a form, switches, select boxes, checkboxes, and radios.

The home menu jumps to these sections:

- **We offer** — Regular Exercise, Training on the go, and Body Building Packages
- **Top course** — Running, Weight Lifting, Body Combat, Organic Yoga, Raw Fitness, and Body Building
- **Schedule** — weekday times for Fitness Aero and Senior Fitness
- **Trainer** — Ethel Davis, Rodney Cooper, Dora Walker, and Lena Keller
- **Plan** — Standard (£199), Business (£399), and Ultimate (£499)

Generic and Elements are under the Pages menu.

## Contact

These details appear in the footer on every page. The header shows both phone numbers.

- **Address:** 6 Lift Court, Whitefield, Bengaluru 560066
- **Phone:** +91 80 4720 3300
- **Alternative phone:** +91 80 4720 3301
- **Email:** hello@muscletheory.fit
- **Alternative email:** support@muscletheory.fit

The alternative phone and email are for follow-up when the main line is busy.

## Stack

HTML, Bootstrap, Font Awesome, and custom CSS. Source styles are in `src/assets/sass` (`main.scss`, `generic.scss`, `elements.scss`). The pages load the compiled files in `src/assets/css`.

## Run locally

The pages live in `public/` and load assets from `src/`, so serve the project folder:

```bash
npx --yes serve .
```

Open `http://localhost:3000/public/index.html`.
