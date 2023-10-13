export const intelligenceStyleFunc = (percent) => {
  return {
    "::before": {
      content: { percent },
    },
    background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(red ${percent}%, pink 0)`,
  };
};
