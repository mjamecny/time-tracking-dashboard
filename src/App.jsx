import { useState } from "react"

const data = [
  {
    title: "Work",
    type: "work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    type: "play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    type: "study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    type: "exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    type: "social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    type: "self-care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
]

export default function App() {
  const [timeframe, setTimeframe] = useState("daily")

  const filteredData = data.map((item) => {
    return {
      title: item.title,
      type: item.type,
      current: item.timeframes[timeframe].current,
      previous: item.timeframes[timeframe].previous,
    }
  })

  return (
    <div className="container">
      <div className="dashboard">
        <div className="user-card">
          <div className="user-info">
            <img
              src="image-jeremy.png"
              alt="profile photo"
              className="user-info__photo"
            />
            <div className="info-box">
              <span>Report for</span>
              <p className="user-info__name">Jeremy Robson</p>
            </div>
          </div>
          <ul className="menu">
            <li>
              <a
                href="#"
                className={`menu__link ${
                  timeframe === "daily" ? "menu__link--active" : ""
                }`}
                onClick={() => setTimeframe("daily")}
              >
                Daily
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`menu__link ${
                  timeframe === "weekly" ? "menu__link--active" : ""
                }`}
                onClick={() => setTimeframe("weekly")}
              >
                Weekly
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`menu__link ${
                  timeframe === "monthly" ? "menu__link--active" : ""
                }`}
                onClick={() => setTimeframe("monthly")}
              >
                Monthly
              </a>
            </li>
          </ul>
        </div>
        {filteredData.map((item) => (
          <div key={item.type} className={`time-card time-card--${item.type}`}>
            <img
              className="time-card__icon"
              src={`icon-${item.type}.svg`}
              alt="briefcase icon"
            />
            <div className="stats">
              <div className="title-box">
                <p className="stats__title">{item.title}</p>
                <img
                  className="stats__icon"
                  src="icon-ellipsis.svg"
                  alt="ellipsis icon"
                />
              </div>
              <div className="numbers-box">
                <p className="stats__hours">{item.current}hrs</p>
                <p className="stats__last-period">
                  {timeframe === "daily" && "Yesterday"}
                  {timeframe === "weekly" && "Last week"}
                  {timeframe === "monthly" && "Last month"} - {item.previous}hrs
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
