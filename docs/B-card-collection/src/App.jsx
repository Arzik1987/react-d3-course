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
    maxWidth: 1000,
    fontSize: 40,
    lineHeight: 1.1,
    color: "#1f2933",
    fontFamily: 'Georgia, "Times New Roman", serif',
    textAlign: "center",
  };

  const cardsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 2fr))",
    gap: 24,
    width: "100%",
    maxWidth: 1000,
    margin: "0 auto",
    boxSizing: "border-box",
  };

  const introStyle = {
    margin: "0 auto 28px",
    width: "100%",
    maxWidth: 1000,
    fontSize: 16,
    lineHeight: 1.6,
    color: "#3e4c59",
    fontFamily: 'Georgia, "Times New Roman", serif',
  };

  const filterRowStyle = {
    width: "100%",
    maxWidth: 1000,
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
        question, and they are not always consistent with each other.  This page lists the ones I found 
        and <a href="https://github.com/Arzik1987/aggregation_methods">implemented</a> with the help of Codex. You can
        browse the collection of <strong>aggregation methods</strong> and
        compare them by input type, solver, complexity, maturity, domain, and
        assumptions.
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
    input: "score",
    solver: "profile-integration",
    complexity: "polytime",
    maturity: "specialized",
    domain: "benchmarking",
    assumption: "ties-irrelevant",
  },
];
