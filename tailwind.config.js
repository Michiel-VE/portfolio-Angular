module.exports = {
  content: [
    "./src/app/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 75%, #000000 100%),url('assets/img/bg.webp')",
        'social': "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 75%, #000000 100%),url('assets/img/social.webp')",
        'skill': "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%),url('assets/img/tree.webp')",
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [
    {
      tailwindcss: {config: './tailwind.config.js'}
    },
  ],
}
