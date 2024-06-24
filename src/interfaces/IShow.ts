export interface IShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres?: string[];
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
  rating?: {
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
  image?: {
    medium: string;
    original: string;
  };
  seasons: ISeason[];
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

export interface ISeason {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
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
  image?: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
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
  seasons: [
    {
      id: 1,
      url: "https://www.tvmaze.com/seasons/1/under-the-dome-season-1",
      number: 1,
      name: "",
      episodeOrder: 13,
      premiereDate: "2013-06-24",
      endDate: "2013-09-16",
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
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/24/60941.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/24/60941.jpg",
      },
      summary: "",
      _links: {
        self: {
          href: "https://api.tvmaze.com/seasons/1",
        },
      },
    },
    {
      id: 2,
      url: "https://www.tvmaze.com/seasons/2/under-the-dome-season-2",
      number: 2,
      name: "",
      episodeOrder: 13,
      premiereDate: "2014-06-30",
      endDate: "2014-09-22",
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
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/24/60942.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/24/60942.jpg",
      },
      summary: "",
      _links: {
        self: {
          href: "https://api.tvmaze.com/seasons/2",
        },
      },
    },
    {
      id: 6233,
      url: "https://www.tvmaze.com/seasons/6233/under-the-dome-season-3",
      number: 3,
      name: "",
      episodeOrder: 13,
      premiereDate: "2015-06-25",
      endDate: "2015-09-10",
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
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/182/457332.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/182/457332.jpg",
      },
      summary: "",
      _links: {
        self: {
          href: "https://api.tvmaze.com/seasons/6233",
        },
      },
    },
  ],
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
