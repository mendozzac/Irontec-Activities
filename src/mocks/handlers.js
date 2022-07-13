import { rest } from "msw";
export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, async (req, res, ctx) => {
    const resp = res(
      ctx.json([
        {
          activity: "Play a game of Monopoly",
          type: "social",
          participants: 4,
          price: 0.2,
          link: "",
          key: "",
          accessibility: 0.3,
        },
        {
          activity: "Make a simple musical instrument",
          type: "music",
          participants: 1,
          price: 0.4,
          link: "",
          key: "7091374",
          accessibility: 0.25,
        },
      ])
    );
    return resp;
  }),
];
