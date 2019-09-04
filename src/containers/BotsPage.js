import React from "react"
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import BotSearch from "../components/BotSearch"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    yourBots: [],
    toggleSpecs: false,
    theOneBot: "",
    searchText: "",
    filterClass: "Default"
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(json => this.setState({ allBots: json }))
  }

  // This is the old Bot Collection Click before implementing BotSpecs
  // botCollectionClick = (e, bot) => {
  //   console.log("Bot Collection Click", bot)
  //   if (!this.state.yourBots.includes(bot)) {
  //     this.setState({ yourBots: [...this.state.yourBots, bot] })
  //   } else {
  //     alert(`You have already enlisted ${bot.name}`)
  //   }
  // }

  botCollectionClick = (e, bot) => {
    this.setState({ toggleSpecs: true, theOneBot: bot })
  }

  botSpecsBackClick = () => {
    this.setState({ toggleSpecs: false })
  }

  botSpecsEnlistClick = (e, bot) => {
    if (!this.state.yourBots.includes(bot)) {
      this.setState({ yourBots: [...this.state.yourBots, bot] })
    } else {
      alert(`You have already enlisted ${bot.name}`)
    }
    this.botSpecsBackClick()
  }

  botSearchChange = e => {
    this.setState({ searchText: e.target.value })
  }

  botDropdownChange = e => {
    this.setState({ filterClass: e.target.value })
  }

  // You can totally ignore this function if you want
  justBecauseICould = () => {
    ;(function() {
      function c() {
        var e = document.createElement("link")
        e.setAttribute("type", "text/css")
        e.setAttribute("rel", "stylesheet")
        e.setAttribute("href", f)
        e.setAttribute("class", l)
        document.body.appendChild(e)
      }
      function h() {
        var e = document.getElementsByClassName(l)
        for (var t = 0; t < e.length; t++) {
          document.body.removeChild(e[t])
        }
      }
      function p() {
        var e = document.createElement("div")
        e.setAttribute("class", a)
        document.body.appendChild(e)
        setTimeout(function() {
          document.body.removeChild(e)
        }, 100)
      }
      function d(e) {
        return {
          height: e.offsetHeight,
          width: e.offsetWidth
        }
      }
      function v(i) {
        var s = d(i)
        return s.height > e && s.height < n && s.width > t && s.width < r
      }
      function m(e) {
        var t = e
        var n = 0
        while (!!t) {
          n += t.offsetTop
          t = t.offsetParent
        }
        return n
      }
      function g() {
        var e = document.documentElement
        if (!!window.innerWidth) {
          return window.innerHeight
        } else if (e && !isNaN(e.clientHeight)) {
          return e.clientHeight
        }
        return 0
      }
      function y() {
        if (window.pageYOffset) {
          return window.pageYOffset
        }
        return Math.max(
          document.documentElement.scrollTop,
          document.body.scrollTop
        )
      }
      function E(e) {
        var t = m(e)
        return t >= w && t <= b + w
      }
      function S() {
        var e = document.createElement("audio")
        e.setAttribute("class", l)
        e.src = i
        e.loop = false
        e.addEventListener(
          "canplay",
          function() {
            setTimeout(function() {
              x(k)
            }, 500)
            setTimeout(function() {
              N()
              p()
              for (var e = 0; e < O.length; e++) {
                T(O[e])
              }
            }, 15500)
          },
          true
        )
        e.addEventListener(
          "ended",
          function() {
            N()
            h()
          },
          true
        )
        e.innerHTML =
          " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>"
        document.body.appendChild(e)
        e.play()
      }
      function x(e) {
        e.className += " " + s + " " + o
      }
      function T(e) {
        e.className += " " + s + " " + u[Math.floor(Math.random() * u.length)]
      }
      function N() {
        var e = document.getElementsByClassName(s)
        var t = new RegExp("\\b" + s + "\\b")
        for (var n = 0; n < e.length; ) {
          e[n].className = e[n].className.replace(t, "")
        }
      }
      var e = 30
      var t = 30
      var n = 350
      var r = 350
      var i =
        "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3"
      var s = "mw-harlem_shake_me"
      var o = "im_first"
      var u = ["im_drunk", "im_baked", "im_trippin", "im_blown"]
      var a = "mw-strobe_light"
      var f =
        "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css"
      var l = "mw_added_css"
      var b = g()
      var w = y()
      var C = document.getElementsByTagName("*")
      var k = null
      for (var L = 0; L < C.length; L++) {
        var A = C[L]
        if (v(A)) {
          if (E(A)) {
            k = A
            break
          }
        }
      }
      if (A === null) {
        console.warn(
          "Could not find a node of the right size. Please try a different page."
        )
        return
      }
      c()
      S()
      var O = []
      for (var L = 0; L < C.length; L++) {
        var A = C[L]
        if (v(A)) {
          O.push(A)
        }
      }
    })()
  }

  sortNFilter = arr => {
    if (this.state.filterClass !== "Default") {
      arr = arr.filter(
        bot =>
          bot.bot_class === this.state.filterClass &&
          bot.name.toLowerCase().includes(this.state.searchText.toLowerCase())
      )
    } else {
      arr = arr.filter(bot =>
        bot.name.toLowerCase().includes(this.state.searchText.toLowerCase())
      )
    }
    return arr
  }

  render() {
    let matchingBots = this.sortNFilter(this.state.allBots)

    return (
      <div>
        <YourBotArmy
          yourBots={this.state.yourBots}
          botCollectionClick={() => {}}
        />

        {/* Control the toggle of the BotSpecs and BotCollection */}
        {this.state.toggleSpecs ? (
          <BotSpecs
            bot={this.state.theOneBot}
            backClicked={this.botSpecsBackClick}
            enlistClicked={this.botSpecsEnlistClick}
          />
        ) : (
          <div>
            <BotSearch
              input={this.state.searchText}
              dropdownVal={this.state.filterClass}
              changed={this.botSearchChange}
              dropChange={this.botDropdownChange}
              shakeEm={this.justBecauseICould}
            />
            <BotCollection
              allBots={matchingBots}
              botCollectionClick={this.botCollectionClick}
            />
          </div>
        )}
      </div>
    )
  }
}

export default BotsPage
