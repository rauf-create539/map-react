import "./style.css"

export default function App() {
  return <form className="home-form">
    <div className="header">
      <div className="headcontent">
        <button>Navigation</button>
        <input
        type="text"
        placeholder="Search..."></input>
      </div>
    </div>

    <div className="body">
      <div className="line">

        <div className="city">
        <div className="body"></div>
        <div className="description">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="city">
        <div className="body"></div>
        <div className="description">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="city">
        <div className="body"></div>
        <div className="description">
          <h2>Davao City</h2>
        </div>
      </div>

      </div>

            <div className="line">

        <div className="city">
        <div className="body"></div>
        <div className="description">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="city">
        <div className="body"></div>
        <div className="description">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="city">
        <div className="body"></div>
        <div className="description">
          <h2>Davao City</h2>
        </div>
      </div>

      </div>
    </div>
  </form>
}