import { defineConfig } from 'vite';
import markdown from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    markdown({
      mode: ['html', 'vue']  // Ensure HTML parsing
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@blog': '/blog',
      //'@tensorflow/tfjs': '@tensorflow/tfjs/dist/tf.esm.js',
      //'face-api.js': path.resolve(__dirname, 'node_modules/face-api.js/dist/face-api.esm.js'),
      //'tracking.js': path.resolve(__dirname, 'node_modules/tracking/build/tracking.js'),
      //'three': path.resolve(__dirname, 'node_modules/three/build/three.module.js')
    }
  },
  /*optimizeDeps: {
    include: [
      '@tensorflow/tfjs',
      '@tensorflow-models/blazeface',
      '@mediapipe/face_detection',
      'face-api.js',
      'tracking.js',
      'three'
    ]
  },
  esbuildOptions: {
    resolveExtensions: ['.js', '.ts', '.mjs', '.cjs', '.json']
  }*/
});