import { ISettings } from '~/interfaces';
import { remote, app } from 'electron';

export const DEFAULT_SEARCH_ENGINES = [
  {
    name: 'Ekoru',
    url: 'https://www.ekoru.org/?ext=wexond&q=%s',
    keywordsUrl: 'http://ac.ekoru.org/?ext=wexond&q=%s',
    keyword: 'ekoru.org',
    icon:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAABTVBMVEVHcEwGoc4fq68HodEirbQ/v78RmcxNsqIupbJOsVAZocIHntchqb0KoNgZqL0LoNk2r38HoNYaq71Ss0VVt1BZtEJUsj+fyjtuwGUXms8Poc0HnNMFpM8JotISoMgRn9UQn9EInNVdulhyuUIYqLMHp8p4vUAZo8mKxD4Gn9YNpcsGoNSMxj8Wq751uj8Fpdo0r3sFpNwsrotUtEiTyk1SsjtSskVQtWJItGmMxTyHxUgmsLAsqaI0q4kOmNQ9sG4yr4Jvu0krsakcpbRjuk6Dwz0KqMtBsm4Upr6AwkBCsW4NqMcurpM9sHaUyFhwvEdIsVSSylUwsKWizkqkzkBdt0lct0Iqrq5fuER/wT6Bwj8lrbNwwHC21UNPt4cPpMRIt49Zu38Up7szspglrKdEtHc8solGt5BavH5OuIB3xFqAxVMFp9hAsn9lv3FSuK/uAAAAaHRSTlMA/P6dPgQPCxUwIcYubZRWYLpdQthwTGn6GlGl9O6AOefX9SDzzpbvtqz54uCdRvjxyfuV2Thg9+166sJzeVmu3Mrw2tqi27Xz0W+p6aJdu4mYolKqrX+WyVqKgrEqx/bYvP///////rhNcOkAAAD4SURBVBiVJY9VQ8IAGAC/jSUrxpKUkO4uu7u7XQPq/3904r3dvR0AACGUKghSKQkkLFgS3612s9lG47HgwtPosKPSPfViw2D8QomoLFFhvpbE6HUjQAJXHqrsxPU8d4un9w8EaFm3wcnPuFiszs2adCJCw1HCXrWOQ3Z3hoZPy/Bl9+9nT+T1GZk9dI+PDD8oV/PHV+3mEs9Pc6FlaHx3nvURgNal8tM9P7TMB+xjPNK6L9S5mQttA2dk+tibrn+y9YwRWOUhwpgyTWAYQW+a8egKCxBNOLLSk+52HCRAEv4LziUsezCwLSQW+b/F15hUoZBKJ6k/+wXyrSm5N9MsrwAAAABJRU5ErkJggg==',
  },
  {
    name: 'Ekoru',
    url: 'https://www.ekoru.org/?ext=wexond&q=%s',
    keywordsUrl: 'http://ac.ekoru.org/?ext=wexond&q=%s',
    keyword: 'ekoru.org',
    icon:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAABTVBMVEVHcEwGoc4fq68HodEirbQ/v78RmcxNsqIupbJOsVAZocIHntchqb0KoNgZqL0LoNk2r38HoNYaq71Ss0VVt1BZtEJUsj+fyjtuwGUXms8Poc0HnNMFpM8JotISoMgRn9UQn9EInNVdulhyuUIYqLMHp8p4vUAZo8mKxD4Gn9YNpcsGoNSMxj8Wq751uj8Fpdo0r3sFpNwsrotUtEiTyk1SsjtSskVQtWJItGmMxTyHxUgmsLAsqaI0q4kOmNQ9sG4yr4Jvu0krsakcpbRjuk6Dwz0KqMtBsm4Upr6AwkBCsW4NqMcurpM9sHaUyFhwvEdIsVSSylUwsKWizkqkzkBdt0lct0Iqrq5fuER/wT6Bwj8lrbNwwHC21UNPt4cPpMRIt49Zu38Up7szspglrKdEtHc8solGt5BavH5OuIB3xFqAxVMFp9hAsn9lv3FSuK/uAAAAaHRSTlMA/P6dPgQPCxUwIcYubZRWYLpdQthwTGn6GlGl9O6AOefX9SDzzpbvtqz54uCdRvjxyfuV2Thg9+166sJzeVmu3Mrw2tqi27Xz0W+p6aJdu4mYolKqrX+WyVqKgrEqx/bYvP///////rhNcOkAAAD4SURBVBiVJY9VQ8IAGAC/jSUrxpKUkO4uu7u7XQPq/3904r3dvR0AACGUKghSKQkkLFgS3612s9lG47HgwtPosKPSPfViw2D8QomoLFFhvpbE6HUjQAJXHqrsxPU8d4un9w8EaFm3wcnPuFiszs2adCJCw1HCXrWOQ3Z3hoZPy/Bl9+9nT+T1GZk9dI+PDD8oV/PHV+3mEs9Pc6FlaHx3nvURgNal8tM9P7TMB+xjPNK6L9S5mQttA2dk+tibrn+y9YwRWOUhwpgyTWAYQW+a8egKCxBNOLLSk+52HCRAEv4LziUsezCwLSQW+b/F15hUoZBKJ6k/+wXyrSm5N9MsrwAAAABJRU5ErkJggg==',
  },
  {
    name: 'Bing',
    url: 'https://www.bing.com/search?q=%s',
    keywordsUrl: '',
    keyword: 'bing.com',
    icon:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAAANlBMVEUAfX3k8/MAiop7trYAgoL6//8AdXULhIT///+exMQ4l5ew0dFLoaG929v0+/vQ5+eVwsIcjo4kKiufAAAAZElEQVQYlY2QyQ6AMAhEpy0Fuqr//7NWo108OQcSHsMSICJEMoSWR8sLQNCCD/A/AEALYFMy3+wFQdWkg0aLNaoaMM3gbQaV3eVww9HKajL60KbqmJ61QrvXBPQ7WrCRp0vXB5xZ6wZZjwmZbQAAAABJRU5ErkJggg==',
  },
  {
    name: 'Yahoo!',
    url: 'https://search.yahoo.com/search?p=%s',
    keywordsUrl: '',
    keyword: 'yahoo.com',
    icon:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABnklEQVQokZWSPUyTYRSFn/t+rTX9EFp/SICwqIumMUwaJxdlYHAgBJwMCa5sLMaITizGARYSNTGROOAAokMHYggLBBIGCIHESBggwfJTQGgLL/3e61CxVWOa3ukO59xz7z1HOmWBSspUhAZCZREZdSfoGSQqprzCgQa945dHT5qef7mSVVdUCFQtapCICGBVAzSE1MUjibvngOSrrTDyixCoXm+P3u6Ipb7akcdbBlp6LzQ2nZ14nW7uugjsb+Qnh/fOSwiQTllQRZC3mgAeyWIO915vAA9l8Z0mgKEn68m+dEE8BIiQ0WD20+7N+/HWwUu5Hw6YGdu99zSmeeyh+9i3U316rRR8cKqx2nB/6lomHdicizeEu2X5zoua/e/5Dy+36ynsX/JWI7K2efxtJnP1lu/jrc5lE93Rtp56YH36eGUq550yim/1McPPNgr9WH9q6XPWHuj2ql2ZOjK/5/9lXN4qkE0HE0N7MbwH1fMGqvCkiC8hHKFdA41A8s2mjzEiNXj/Wiml4TtUZ3E+JiL/TcAfK1WJKRuWitP6EzoWnEvW4UekAAAAAElFTkSuQmCC',
  },
  {
    name: 'Ecosia',
    url: 'https://www.ecosia.org/search?q=%s',
    keywordsUrl: '',
    keyword: 'ecosia.org',
    icon:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAylJREFUOI1Nk01sVFUYhp9z7r1zO1NK25ShtkxmSqE0VisWf0KbatkQ0USnEhPiwh+SGgkkLowQ6EKKWGgTNi4ICxtQMNFEMG1iMBqURKNMgtYwtKkUq20tFFoYxjudmc7ce+5xgdZ+2zfPu3m/R7Ds9P44oGOoYg9uoQ2IACaaG1jWMDJwDNNMiCODS4xYgg90gqFP4nk7/a1dyOZWCFffD527MDYMX5+CRecCwtr6X4lYgnEv6ujGLeKNwzjeON/+keTjiTBKCxrLVxBfH+Op2jD68+OIy0NTWKV14sgghu7uBJMPdHXjDrGnj/6fL1NMvc71tM25+QaigRlGnRzvX5tjau4W255/CSPtVIjZa+097U1nhD4Qh0VH03uexO2zdP+imSpGsKTHm2suEK89Q8EvI6dWEJJTmIEXWBs7idnzMixmn5Yo9yjtO/hLC1p/qCCjwqw0XJ4ovcGW8DdkvBqUH8IWPp6Oks0P8fdCAv+ZLvAKb0vcQhvNm/ny+gwNpkQIjRQeu+pPYwnNWKYJV5sAGMJDimrS6S/QjY+DKrZItFrtV0boqBxgQ/Aeed8iaqeIhS4hhKZ5ZRJLuBS1yW+ZjdhGDuVeRVeWAyIi0WitIWQoDj/4Hg+HZpnIV7MnOcBsPgZA0EzRO/4Wxye3c2pyF8l0C4YGwJdI4yZz09glLVhinptuGbZUjOVqmMnHsKXDuZmdjGZrcVSQT+ceQ5mPIu7eBpiWBEouyl+/Y1XVc7wz2o/jBZFoTOFTai6QV2Us+JqQ9JBocn6OhppnYeRHMAOJ+zPm04p3z8rTsw77hq8SswMoLVgXvIMpFFeyayiVLvOuxyt1EQ5tfgS644C5VuJrKK/az4l9vNpUz7FNDzFRcMn6HqPZKq4srEbrAr8XinSti3KorQX94UEwjU+QYvLfV34RDP8jQlWvsbufW8EKvhr/k5FUGuVrNlSUsW19HfW2RA/0IKaTCQi0ir7BZTJ1d4L291LI9PFkp2RTB6yqASnh3h0YuQTffwYloRN47BZHl8n0v87bQShwCwdRbgdaPQBCIEQKI/ATpr0XA0Tv0BLzDxefVnicNn0wAAAAAElFTkSuQmCC',
  },
  {
    name: 'Ekoru',
    url: 'https://www.ekoru.org/?ext=wexond&q=%s',
    keywordsUrl: 'http://ac.ekoru.org/?ext=wexond&q=%s',
    keyword: 'ekoru.org',
    icon:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAABTVBMVEVHcEwGoc4fq68HodEirbQ/v78RmcxNsqIupbJOsVAZocIHntchqb0KoNgZqL0LoNk2r38HoNYaq71Ss0VVt1BZtEJUsj+fyjtuwGUXms8Poc0HnNMFpM8JotISoMgRn9UQn9EInNVdulhyuUIYqLMHp8p4vUAZo8mKxD4Gn9YNpcsGoNSMxj8Wq751uj8Fpdo0r3sFpNwsrotUtEiTyk1SsjtSskVQtWJItGmMxTyHxUgmsLAsqaI0q4kOmNQ9sG4yr4Jvu0krsakcpbRjuk6Dwz0KqMtBsm4Upr6AwkBCsW4NqMcurpM9sHaUyFhwvEdIsVSSylUwsKWizkqkzkBdt0lct0Iqrq5fuER/wT6Bwj8lrbNwwHC21UNPt4cPpMRIt49Zu38Up7szspglrKdEtHc8solGt5BavH5OuIB3xFqAxVMFp9hAsn9lv3FSuK/uAAAAaHRSTlMA/P6dPgQPCxUwIcYubZRWYLpdQthwTGn6GlGl9O6AOefX9SDzzpbvtqz54uCdRvjxyfuV2Thg9+166sJzeVmu3Mrw2tqi27Xz0W+p6aJdu4mYolKqrX+WyVqKgrEqx/bYvP///////rhNcOkAAAD4SURBVBiVJY9VQ8IAGAC/jSUrxpKUkO4uu7u7XQPq/3904r3dvR0AACGUKghSKQkkLFgS3612s9lG47HgwtPosKPSPfViw2D8QomoLFFhvpbE6HUjQAJXHqrsxPU8d4un9w8EaFm3wcnPuFiszs2adCJCw1HCXrWOQ3Z3hoZPy/Bl9+9nT+T1GZk9dI+PDD8oV/PHV+3mEs9Pc6FlaHx3nvURgNal8tM9P7TMB+xjPNK6L9S5mQttA2dk+tibrn+y9YwRWOUhwpgyTWAYQW+a8egKCxBNOLLSk+52HCRAEv4LziUsezCwLSQW+b/F15hUoZBKJ6k/+wXyrSm5N9MsrwAAAABJRU5ErkJggg==',
  },
];

export const DEFAULT_SETTINGS: ISettings = {
  theme: 'starboard-dark',
  darkContents: false,
  shield: true,
  multrin: true,
  animations: true,
  bookmarksBar: true,
  suggestions: true,
  themeAuto: true,
  searchEngines: DEFAULT_SEARCH_ENGINES,
  searchEngine: 0,
  startupBehavior: {
    type: 'empty',
  },
  warnOnQuit: false,
  version: 2,
  downloadsDialog: true,
  downloadsPath: remote
    ? remote.app.getPath('downloads')
    : app
    ? app.getPath('downloads')
    : '',
  doNotTrack: true,
  topBarVariant: 'default',
};
