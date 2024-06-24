export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  webChannel: null;
  dvdCountry: null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
      name: string;
    };
  };
}

const show = {
  id: 1,
  url: "https://www.tvmaze.com/shows/1/under-the-dome",
  name: "Under the Dome",
  type: "Scripted",
  language: "English",
  genres: ["Drama", "Science-Fiction", "Thriller"],
  status: "Ended",
  runtime: 60,
  averageRuntime: 60,
  premiered: "2013-06-24",
  ended: "2015-09-10",
  officialSite: "http://www.cbs.com/shows/under-the-dome/",
  schedule: {
    time: "22:00",
    days: ["Thursday"],
  },
  rating: {
    average: 6.5,
  },
  weight: 97,
  network: {
    id: 2,
    name: "CBS",
    country: {
      name: "United States",
      code: "US",
      timezone: "America/New_York",
    },
    officialSite: "https://www.cbs.com/",
  },
  webChannel: null,
  dvdCountry: null,
  externals: {
    tvrage: 25988,
    thetvdb: 264492,
    imdb: "tt1553656",
  },
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
  },
  summary:
    "\u003Cp\u003E\u003Cb\u003EUnder the Dome\u003C/b\u003E is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.\u003C/p\u003E",
  updated: 1704794065,
  _links: {
    self: {
      href: "https://api.tvmaze.com/shows/1",
    },
    previousepisode: {
      href: "https://api.tvmaze.com/episodes/185054",
      name: "The Enemy Within",
    },
  },
};