# Three.js Room Experiment

A work-in-progress 3D scene built while following JavaScript Mastery's Three.js portfolio tutorial. I used this project to learn how a 3D model fits into a React website and to experiment with scene positioning, rotation, scale, lighting, and camera settings.

[Video Example of experimentation](https://github.com/user-attachments/assets/087d6895-fe66-4741-8b75-41a75e958234)

The current version focuses on the room scene. It is not a finished portfolio.

## Tutorial and credits

- [JavaScript Mastery video tutorial](https://www.youtube.com/watch?v=kt0FrkQgw8w)
- [Original tutorial repository and assets](https://github.com/adrianhajdin/threejs-portfolio)

The starting design, room model, and supporting tutorial code/assets come from the tutorial. My work involved following the implementation and experimenting with its settings. The room component includes code generated with gltfjsx; I did not model the room from scratch.

## Current features

- A 3D room loaded with React Three Fiber and Drei.
- Textures, a perspective camera, ambient light, and directional light.
- A Leva control panel for changing the room's position, rotation, and scale.
- A basic React page with navigation and introductory text.

## Run locally

Install Node.js with npm first. Use a supported Node.js LTS release. Git is only needed if you clone the repository; downloading and extracting its ZIP also works.

If you do not already have the project:

```sh
git clone https://github.com/Acmevita/three.js-website.git
cd three.js-website/twProject
```

If you already have it, open a terminal in the `twProject` folder—the folder containing `package.json`.

Install the saved dependencies and start Vite:

```sh
npm ci
npm run dev
```

Open the **Local** URL printed in the terminal, usually `http://localhost:5173`. Keep the terminal running while using the site. Press `Ctrl+C` to stop it.

On later visits, run `npm run dev` from `twProject`; you do not need to reinstall dependencies unless they have changed or `node_modules` is missing.

Do not open `index.html` directly: the app needs Vite to serve its modules and assets.

## Experiment with the scene

Expand **Hacker Room** in the control panel. Adjust `positionX/Y/Z`, `rotationX/Y/Z`, and `scale` to change the room. Rotation values are in radians.

These controls change the current browser session; they do not save edits to the source. To keep a setting, edit its default value in `twProject/src/sections/Hero.jsx`.

The same file contains the camera position and light settings. Lighting and camera settings are edited in code; they are not currently exposed in the control panel. Particle effects are not implemented in this committed version.

## Other commands

Run these inside `twProject`:

```sh
npm run build
npm run preview
```

`build` creates a production version in `dist`. `preview` serves that build locally. `npm run lint` runs the configured code checks.

## Current limitations

- Only the navigation and opening scene are implemented. About, Work, and Contact sections have not been built.
- Placeholder text and unused tutorial sample content remain in the source. Example testimonials, projects, and work histories are tutorial data, not my credentials.
- The text/canvas overlay and overall layout still need cleanup.
- The loading fallback is not yet wrapped around the model-loading component.

## Screenshot
<img width="1211" height="803" alt="image" src="https://github.com/user-attachments/assets/129c9bc9-69bf-4278-9e23-ebb418c712cd" />

