module.exports = {
    content: [
      "./src/**/*.{html,js,jsx}", // Specify where Tailwind should look for class names
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    mode: 'jit', // JIT mode (Just-In-Time) to enable on-demand class generation
  }
  