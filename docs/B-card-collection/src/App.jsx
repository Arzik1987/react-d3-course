import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import * as d3 from "d3";

const aggregationMethods = [
  {
    id: 1,
    name: "Mean quality aggregator",
    input: "score",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 2,
    name: "Median quality aggregator",
    input: "score",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 3,
    name: "Geometric mean quality aggregator",
    input: "score",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 4,
    name: "Harmonic mean quality aggregator",
    input: "score",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 5,
    name: "Rescaled mean quality aggregator",
    input: "score",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 6,
    name: "Threshold quality aggregator",
    input: "score",
    solver: "direct-counting",
    complexity: "polytime",
    maturity: "specialized",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 7,
    name: "Mean rank aggregator",
    input: "rank",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "complete-rankings",
  },
  {
    id: 8,
    name: "Median rank aggregator",
    input: "rank",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "complete-rankings",
  },
  {
    id: 9,
    name: "Best rank count aggregator",
    input: "rank",
    solver: "direct-counting",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "complete-rankings",
  },
  {
    id: 10,
    name: "Worst rank count aggregator",
    input: "rank",
    solver: "direct-counting",
    complexity: "polytime",
    maturity: "specialized",
    domain: "benchmarking",
    assumption: "complete-rankings",
  },
  {
    id: 11,
    name: "Borda count aggregator",
    input: "rank",
    solver: "direct-scoring",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "complete-rankings",
  },
  {
    id: 12,
    name: "Dowdall harmonic aggregator",
    input: "rank",
    solver: "direct-scoring",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "complete-rankings",
  },
  {
    id: 13,
    name: "Reciprocal rank fusion aggregator",
    input: "rank",
    solver: "direct-scoring",
    complexity: "polytime",
    maturity: "standard",
    domain: "information-retrieval",
    assumption: "complete-rankings",
  },
  {
    id: 14,
    name: "Kemeny-Young aggregator",
    input: "rank",
    solver: "exact-enumeration",
    complexity: "factorial-exact",
    maturity: "classical",
    domain: "social-choice",
    assumption: "complete-rankings",
  },
  {
    id: 15,
    name: "Copeland pairwise aggregator",
    input: "pairwise",
    solver: "direct-counting",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 16,
    name: "Margin row sum aggregator",
    input: "pairwise",
    solver: "direct-scoring",
    complexity: "polytime",
    maturity: "standard",
    domain: "sports-rating",
    assumption: "ties-native",
  },
  {
    id: 17,
    name: "Minimax Condorcet aggregator",
    input: "pairwise",
    solver: "direct-counting",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "strict-ranks",
  },
  {
    id: 18,
    name: "Ranked Pairs Tideman aggregator",
    input: "pairwise",
    solver: "greedy-dag",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "strict-ranks",
  },
  {
    id: 19,
    name: "Schulze beatpath aggregator",
    input: "pairwise",
    solver: "path-closure",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 20,
    name: "Split cycle aggregator",
    input: "pairwise",
    solver: "path-closure",
    complexity: "polytime",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 21,
    name: "River aggregator",
    input: "pairwise",
    solver: "greedy-dag",
    complexity: "polytime",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 22,
    name: "Stable voting aggregator",
    input: "pairwise",
    solver: "recursive-elimination",
    complexity: "exponential-recursive",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 23,
    name: "Simple stable voting aggregator",
    input: "pairwise",
    solver: "recursive-elimination",
    complexity: "exponential-recursive",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 24,
    name: "Bradley-Terry aggregator",
    input: "pairwise",
    solver: "mm-iteration",
    complexity: "iterative-polytime",
    maturity: "standard",
    domain: "preference-learning",
    assumption: "ties-native",
  },
  {
    id: 25,
    name: "Thurstone-Mosteller aggregator",
    input: "pairwise",
    solver: "gradient-ascent",
    complexity: "iterative-polytime",
    maturity: "standard",
    domain: "psychometrics",
    assumption: "ties-native",
  },
  {
    id: 26,
    name: "Poly rank aggregator",
    input: "pairwise",
    solver: "alternating-least-squares",
    complexity: "iterative-polytime",
    maturity: "specialized",
    domain: "preference-learning",
    assumption: "ties-native",
  },
  {
    id: 27,
    name: "Markov chain aggregator",
    input: "pairwise",
    solver: "power-iteration",
    complexity: "iterative-polytime",
    maturity: "standard",
    domain: "preference-learning",
    assumption: "strict-ranks",
  },
  {
    id: 28,
    name: "Maximal lottery aggregator",
    input: "pairwise",
    solver: "fictitious-play",
    complexity: "iterative-polytime",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "strict-ranks",
  },
  {
    id: 29,
    name: "Massey ranking aggregator",
    input: "pairwise",
    solver: "gaussian-elimination",
    complexity: "polytime",
    maturity: "standard",
    domain: "sports-rating",
    assumption: "strict-ranks",
  },
  {
    id: 30,
    name: "Colley ranking aggregator",
    input: "pairwise",
    solver: "gaussian-elimination",
    complexity: "polytime",
    maturity: "standard",
    domain: "sports-rating",
    assumption: "ties-native",
  },
  {
    id: 31,
    name: "Linear ordering problem aggregator",
    input: "pairwise",
    solver: "exact-enumeration",
    complexity: "factorial-exact",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 32,
    name: "Plackett-Luce aggregator",
    input: "rank",
    solver: "mm-iteration",
    complexity: "iterative-polytime",
    maturity: "standard",
    domain: "preference-learning",
    assumption: "complete-rankings",
  },
  {
    id: 33,
    name: "PROMETHEE II aggregator",
    input: "score",
    solver: "flow-computation",
    complexity: "polytime",
    maturity: "standard",
    domain: "mcda",
    assumption: "ties-irrelevant",
  },
  {
    id: 34,
    name: "ELECTRE III aggregator",
    input: "score",
    solver: "flow-computation",
    complexity: "polytime",
    maturity: "standard",
    domain: "mcda",
    assumption: "ties-irrelevant",
  },
  {
    id: 35,
    name: "TOPSIS aggregator",
    input: "score",
    solver: "distance-to-ideal",
    complexity: "polytime",
    maturity: "standard",
    domain: "mcda",
    assumption: "ties-irrelevant",
  },
  {
    id: 36,
    name: "VIKOR aggregator",
    input: "score",
    solver: "distance-to-ideal",
    complexity: "polytime",
    maturity: "standard",
    domain: "mcda",
    assumption: "ties-irrelevant",
  },
  {
    id: 37,
    name: "Friedman-Nemenyi rank aggregator",
    input: "rank",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "complete-rankings",
  },
  {
    id: 38,
    name: "DMAUC performance profile aggregator",
    input: "score",
    solver: "profile-integration",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 39,
    name: "DMLBO leave one out profile aggregator",
    input: "score",
    solver: "profile-integration",
    complexity: "polytime",
    maturity: "specialized",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
];

console.log("Aggregation methods:", aggregationMethods.length);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Hello world {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
