import Card from "./Card";
import { useState } from "react";

const inputTagStyles = {
  score: {
    background: "#E8F7EE",
    color: "#1E6B3A",
  },
  rank: {
    background: "#EAF2FF",
    color: "#1D4ED8",
  },
  pairwise: {
    background: "#FFF1E8",
    color: "#B45309",
  },
};

const defaultTagStyle = {
  background: "#F3F4F6",
  color: "#374151",
};

export default function App() {
  const [inputButtons, setInputButtons] = useState({
    score: true,
    rank: true,
    pairwise: true,
  });

  function toggleInputButton(input) {
    setInputButtons((current) => ({
      ...current,
      [input]: !current[input],
    }));
  }

  const pageStyle = {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    padding: "16px",
    background:
      "radial-gradient(circle at top left, rgba(196, 73, 0, 0.16), transparent 28%), radial-gradient(circle at bottom right, rgba(15, 76, 129, 0.14), transparent 26%), linear-gradient(180deg, #f9f6ef 0%, #f6f2e8 100%)",
  };

  const titleStyle = {
    margin: "0 auto 24px",
    width: "100%",
    maxWidth: 1100,
    fontSize: 40,
    lineHeight: 1.1,
    color: "#1f2933",
    fontFamily: 'Georgia, "Times New Roman", serif',
    textAlign: "center",
  };

  const cardsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 2fr))",
    gap: 24,
    width: "100%",
    maxWidth: 1100,
    margin: "0 auto",
    boxSizing: "border-box",
  };

  const introStyle = {
    margin: "0 auto 28px",
    width: "100%",
    maxWidth: 1100,
    fontSize: 16,
    lineHeight: 1.6,
    color: "#3e4c59",
    fontFamily: 'Georgia, "Times New Roman", serif',
  };

  const filterRowStyle = {
    width: "100%",
    maxWidth: 1100,
    margin: "0 auto 28px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  };

  const filterLabelStyle = {
    color: "#3e4c59",
    fontSize: 16,
    fontFamily: 'Georgia, "Times New Roman", serif',
  };

  const filterButtonBaseStyle = {
    border: "none",
    borderRadius: 9999,
    padding: "6px 12px",
    fontSize: 16,
    fontFamily: 'Georgia, "Times New Roman", serif',
    cursor: "pointer",
  };

  const deselectedButtonStyle = {
    background: "#F8F5EE",
    color: "#7b8794",
    border: "1px solid #cbd2d9",
  };

  const visibleMethods = aggregationMethods.filter(
    (method) => inputButtons[method.input],
  );

  return (
    <main style={pageStyle}>
      <h1 style={titleStyle}>Aggregation Methods</h1>
      <p style={introStyle}>
        How to draw a conclusion from{" "}
        <strong>multiple benchmark experiments</strong>? Imagine multiple
        competitors, say LLMs, are evaluated across multiple datasets, for
        example coding assignments. Some models perform better on some
        instances, others on different ones. So what is the
        <strong> overall ranking of candidates</strong>, and which one is the
        winner? It turns out there are several dozen ways to answer this
        question, and they are not always consistent with each other. This page
        lists the ones I found and{" "}
        <a href="https://github.com/Arzik1987/aggregation_methods">
          implemented
        </a>{" "}
        with the help of Codex. You can browse the collection of{" "}
        <strong>aggregation methods</strong> and compare them by input type,
        solver, complexity, maturity, domain, and assumptions.
      </p>
      <div style={filterRowStyle}>
        <span style={filterLabelStyle}>
          <strong>Filter by input:</strong>
        </span>

        <button
          type="button"
          onClick={() => toggleInputButton("score")}
          style={{
            ...filterButtonBaseStyle,
            ...(inputButtons.score
              ? {
                  ...inputTagStyles.score,
                  border: `1px solid ${inputTagStyles.score.color}`,
                }
              : deselectedButtonStyle),
          }}
        >
          score
        </button>

        <button
          type="button"
          onClick={() => toggleInputButton("rank")}
          style={{
            ...filterButtonBaseStyle,
            ...(inputButtons.rank
              ? {
                  ...inputTagStyles.rank,
                  border: `1px solid ${inputTagStyles.rank.color}`,
                }
              : deselectedButtonStyle),
          }}
        >
          rank
        </button>

        <button
          type="button"
          onClick={() => toggleInputButton("pairwise")}
          style={{
            ...filterButtonBaseStyle,
            ...(inputButtons.pairwise
              ? {
                  ...inputTagStyles.pairwise,
                  border: `1px solid ${inputTagStyles.pairwise.color}`,
                }
              : deselectedButtonStyle),
          }}
        >
          pairwise
        </button>
      </div>
      <section style={cardsStyle}>
        {visibleMethods.map((method) => (
          <Card
            key={method.id}
            title={method.name}
            text={method.text}
            tag={method.input}
            tagStyle={inputTagStyles[method.input] ?? defaultTagStyle}
            metaTags={[
              method.solver,
              method.complexity,
              method.maturity,
              method.domain,
              method.assumption,
            ]}
          />
        ))}
      </section>
    </main>
  );
}

const aggregationMethods = [
  {
    id: 1,
    name: "Mean quality",
    text: "Averages raw benchmark scores across tasks.",
    input: "score",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 2,
    name: "Median quality",
    text: "Ranks candidates by the median of their raw task scores.",
    input: "score",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 3,
    name: "Geometric mean quality",
    text: "Combines non-negative scores with a multiplicative average that penalizes weak tasks.",
    input: "score",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 4,
    name: "Harmonic mean quality",
    text: "Uses the harmonic mean of positive scores, emphasizing consistently strong performance.",
    input: "score",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 5,
    name: "Rescaled mean quality",
    text: "Min-max rescales each task before averaging scores across tasks.",
    input: "score",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 6,
    name: "Threshold quality",
    text: "Counts how often a candidate clears a chosen score threshold.",
    input: "score",
    solver: "direct-counting",
    complexity: "polytime",
    maturity: "specialized",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 7,
    name: "Mean rank",
    text: "Averages each candidate's rank position across tasks.",
    input: "rank",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "complete-rankings",
  },
  {
    id: 8,
    name: "Median rank",
    text: "Uses the median rank position across tasks.",
    input: "rank",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "complete-rankings",
  },
  {
    id: 9,
    name: "Best rank count",
    text: "Counts how often a candidate finishes in first place.",
    input: "rank",
    solver: "direct-counting",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "complete-rankings",
  },
  {
    id: 10,
    name: "Worst rank count",
    text: "Counts how often a candidate falls to the worst rank.",
    input: "rank",
    solver: "direct-counting",
    complexity: "polytime",
    maturity: "specialized",
    domain: "benchmarking",
    assumption: "complete-rankings",
  },
  {
    id: 11,
    name: "Borda count",
    text: "Assigns position-based points on each task and sums them.",
    input: "rank",
    solver: "direct-scoring",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "complete-rankings",
  },
  {
    id: 12,
    name: "Dowdall harmonic",
    text: "Weights rank positions by reciprocals, giving extra credit to top places.",
    input: "rank",
    solver: "direct-scoring",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "complete-rankings",
  },
  {
    id: 13,
    name: "Reciprocal rank fusion",
    text: "Combines rankings with reciprocal rank weights, common in information retrieval.",
    input: "rank",
    solver: "direct-scoring",
    complexity: "polytime",
    maturity: "standard",
    domain: "information-retrieval",
    assumption: "complete-rankings",
  },
  {
    id: 14,
    name: "Kemeny-Young",
    text: "Searches for the consensus ranking that maximizes agreement with the input rankings.",
    input: "rank",
    solver: "exact-enumeration",
    complexity: "factorial-exact",
    maturity: "classical",
    domain: "social-choice",
    assumption: "complete-rankings",
  },
  {
    id: 15,
    name: "Copeland pairwise",
    text: "Scores each candidate by pairwise wins minus losses.",
    input: "pairwise",
    solver: "direct-counting",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 16,
    name: "Margin row sum",
    text: "Sums pairwise victory margins against all other candidates.",
    input: "pairwise",
    solver: "direct-scoring",
    complexity: "polytime",
    maturity: "standard",
    domain: "sports-rating",
    assumption: "ties-native",
  },
  {
    id: 17,
    name: "Minimax Condorcet",
    text: "Chooses rankings by minimizing each candidate's worst pairwise defeat.",
    input: "pairwise",
    solver: "direct-counting",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "strict-ranks",
  },
  {
    id: 18,
    name: "Ranked Pairs Tideman",
    text: "Locks strongest pairwise victories first while avoiding cycles.",
    input: "pairwise",
    solver: "greedy-dag",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "strict-ranks",
  },
  {
    id: 19,
    name: "Schulze beatpath",
    text: "Uses strongest paths in the pairwise graph to compare candidates.",
    input: "pairwise",
    solver: "path-closure",
    complexity: "polytime",
    maturity: "classical",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 20,
    name: "Split cycle",
    text: "Removes defeats that are only supported through weaker preference cycles.",
    input: "pairwise",
    solver: "path-closure",
    complexity: "polytime",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 21,
    name: "River",
    text: "Builds an acyclic order greedily from the strongest majority edges.",
    input: "pairwise",
    solver: "greedy-dag",
    complexity: "polytime",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 22,
    name: "Stable voting",
    text: "Recursively eliminates candidates using stable-voting Condorcet reasoning.",
    input: "pairwise",
    solver: "recursive-elimination",
    complexity: "exponential-recursive",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 23,
    name: "Simple stable voting",
    text: "A simplified recursive stable-voting variant for pairwise preferences.",
    input: "pairwise",
    solver: "recursive-elimination",
    complexity: "exponential-recursive",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 24,
    name: "Bradley-Terry",
    text: "Fits latent strengths so pairwise win probabilities match observed comparisons.",
    input: "pairwise",
    solver: "mm-iteration",
    complexity: "iterative-polytime",
    maturity: "standard",
    domain: "preference-learning",
    assumption: "ties-native",
  },
  {
    id: 25,
    name: "Thurstone-Mosteller",
    text: "Fits latent preference scores under a probabilistic pairwise judgment model.",
    input: "pairwise",
    solver: "gradient-ascent",
    complexity: "iterative-polytime",
    maturity: "standard",
    domain: "psychometrics",
    assumption: "ties-native",
  },
  {
    id: 26,
    name: "Poly rank",
    text: "Fits latent scores from pairwise outcomes with an alternating least-squares likelihood model.",
    input: "pairwise",
    solver: "alternating-least-squares",
    complexity: "iterative-polytime",
    maturity: "specialized",
    domain: "preference-learning",
    assumption: "ties-native",
  },
  {
    id: 27,
    name: "Markov chain",
    text: "Derives rankings from the stationary distribution of a preference-based Markov chain.",
    input: "pairwise",
    solver: "power-iteration",
    complexity: "iterative-polytime",
    maturity: "standard",
    domain: "preference-learning",
    assumption: "strict-ranks",
  },
  {
    id: 28,
    name: "Maximal lottery",
    text: "Uses a game-theoretic mixed solution over pairwise majority comparisons.",
    input: "pairwise",
    solver: "fictitious-play",
    complexity: "iterative-polytime",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "strict-ranks",
  },
  {
    id: 29,
    name: "Massey ranking",
    text: "Solves a linear rating system from pairwise outcomes and margins.",
    input: "pairwise",
    solver: "gaussian-elimination",
    complexity: "polytime",
    maturity: "standard",
    domain: "sports-rating",
    assumption: "strict-ranks",
  },
  {
    id: 30,
    name: "Colley ranking",
    text: "Solves a regularized linear rating system from pairwise wins and losses.",
    input: "pairwise",
    solver: "gaussian-elimination",
    complexity: "polytime",
    maturity: "standard",
    domain: "sports-rating",
    assumption: "ties-native",
  },
  {
    id: 31,
    name: "Linear ordering problem",
    text: "Optimizes a total order that best agrees with pairwise preferences.",
    input: "pairwise",
    solver: "exact-enumeration",
    complexity: "factorial-exact",
    maturity: "specialized",
    domain: "social-choice",
    assumption: "ties-native",
  },
  {
    id: 32,
    name: "Plackett-Luce",
    text: "Fits a probabilistic model of full rankings from repeated ranking data.",
    input: "rank",
    solver: "mm-iteration",
    complexity: "iterative-polytime",
    maturity: "standard",
    domain: "preference-learning",
    assumption: "complete-rankings",
  },
  {
    id: 33,
    name: "PROMETHEE II",
    text: "An MCDA outranking method based on net preference flows between candidates.",
    input: "score",
    solver: "flow-computation",
    complexity: "polytime",
    maturity: "standard",
    domain: "mcda",
    assumption: "ties-irrelevant",
  },
  {
    id: 34,
    name: "ELECTRE III",
    text: "An MCDA outranking method with thresholded concordance and discordance logic.",
    input: "score",
    solver: "flow-computation",
    complexity: "polytime",
    maturity: "standard",
    domain: "mcda",
    assumption: "ties-irrelevant",
  },
  {
    id: 35,
    name: "TOPSIS",
    text: "Ranks candidates by distance to ideal and anti-ideal performance profiles.",
    input: "score",
    solver: "distance-to-ideal",
    complexity: "polytime",
    maturity: "standard",
    domain: "mcda",
    assumption: "ties-irrelevant",
  },
  {
    id: 36,
    name: "VIKOR",
    text: "Ranks candidates by compromise distance to ideal performance across criteria.",
    input: "score",
    solver: "distance-to-ideal",
    complexity: "polytime",
    maturity: "standard",
    domain: "mcda",
    assumption: "ties-irrelevant",
  },
  {
    id: 37,
    name: "Friedman-Nemenyi rank",
    text: "Aggregates benchmark ranks in the Friedman-Nemenyi comparison framework.",
    input: "rank",
    solver: "direct-statistic",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "complete-rankings",
  },
  {
    id: 38,
    name: "DMAUC performance profile",
    text: "Integrates a performance profile curve to summarize benchmark dominance.",
    input: "score",
    solver: "profile-integration",
    complexity: "polytime",
    maturity: "standard",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
  {
    id: 39,
    name: "DMLBO leave one out profile",
    text: "Uses leave-one-out performance profile integration to measure benchmark robustness.",
    input: "score",
    solver: "profile-integration",
    complexity: "polytime",
    maturity: "specialized",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
];
